"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export type LoginState = { error: string } | null;

export async function loginAction(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = (formData.get("email") as string).trim().toLowerCase();
  const senha = formData.get("senha") as string;

  const sb = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await sb.auth.signInWithPassword({
    email,
    password: senha,
  });

  if (error || !data.session) {
    return { error: "E-mail ou senha incorretos. Tente novamente." };
  }

  // Look up patient by email in Flask API
  const apiUrl = process.env.FLASK_API_URL!;
  const apiKey = process.env.PORTAL_API_KEY!;

  let pid: string;
  try {
    const resp = await fetch(
      `${apiUrl}/api/paciente/lookup?email=${encodeURIComponent(email)}`,
      { headers: { "X-API-Key": apiKey }, cache: "no-store" }
    );
    if (!resp.ok) {
      return { error: "Paciente não encontrado. Entre em contato com a clínica." };
    }
    const json = await resp.json();
    pid = json.pid;
  } catch {
    return { error: "Erro de conexão com o servidor. Tente novamente." };
  }

  const cookieStore = await cookies();
  const opts = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  };
  cookieStore.set("hpc_token", data.session.access_token, opts);
  cookieStore.set("hpc_pid", pid, opts);

  redirect("/dashboard");
}
