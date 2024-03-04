import Link from "next/link";
import React from "react";

export default function Button({ link, text }) {
  return (
    <Link
      href={link}
      className="group relative h-8 w-32 p-2 overflow-hidden rounded-md bg-green-500 text-sm font-medium select-none text-white"
    >
      {text}
      <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
    </Link>
  );
}
