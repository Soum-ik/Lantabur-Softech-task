"use client"; 
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  async function logout() {
    const res = await fetch("/api/login");
    const json = await res.json();
    if (json["status"] == true) {
      router.replace("/");
    }
  }
  return (
    <div className=" space-x-2">
      <span>This is a Private page</span>
      <a onClick={logout} className=" px-3 py-2 text-center overflow-hidden rounded-md bg-neutral-800 shadow-xl text-sm font-medium select-none text-neutral-200" href="/">  Log Out</a>

    </div>
  );
}
