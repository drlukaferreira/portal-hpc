"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export async function loginAction(formData: FormData) {
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
    redirect("/login?erro=credenciais");
  }

  const apiUrl = process.env.FLASK_API_URL!;
  const apiKey = process.env.PORTAL_API_KEY!;

  let pid: string;
  try {
    const resp = await fetch(
      `${apiUrl}/api/paciente/lookup?email=${encodeURIComponent(email)}`,
      { headers: { "X-API-Key": apiKey }, cache: "no-store" }
    );
    if (!resp.ok) {
      redirect("/login?erro=nao_encontrado");
    }
    const json = await resp.json();
    pid = json.pid;
  } catch {
    redirect("/login?erro=conexao");
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
  cookieStore.set("hpc_pid", pid!, opts);

  redirect("/dashboard");
}
