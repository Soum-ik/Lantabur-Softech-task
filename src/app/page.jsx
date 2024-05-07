import Link from "next/link";

export default function Home() {
  return (
    <div className=" space-x-2 flex ">
      <Link
        className=" px-3 py-2 text-center overflow-hidden rounded-md bg-neutral-800 shadow-xl text-sm font-medium select-none text-neutral-200"
        href="/public"
      >
        {" "}
        Public Page
      </Link>
      <Link
        className=" px-3 py-2 text-center overflow-hidden rounded-md bg-neutral-800 shadow-xl text-sm font-medium select-none text-neutral-200"
        href="/private"
      >
        {" "}
        Private Page{" "}
      </Link>
    </div>
  );
}
