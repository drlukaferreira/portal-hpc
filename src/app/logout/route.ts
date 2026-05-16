import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  const cookieStore = await cookies();
  cookieStore.delete("hpc_token");
  cookieStore.delete("hpc_pid");
  redirect("/login");
}
