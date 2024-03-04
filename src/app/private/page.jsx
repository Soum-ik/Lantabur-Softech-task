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
    <div className=" space-x-3 flex items-center ">
      This is a private page
      {/* <Button text={"Home Page"} link={"/"} /> */}
      <button onClick={logout} className="group relative h-8 w-32   overflow-hidden rounded-md bg-neutral-800 shadow-xl text-sm font-medium select-none text-neutral-200">
        Log Out
        <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
    </div>
  );
}
