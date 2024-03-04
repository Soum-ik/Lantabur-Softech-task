 
export default function Home() {
  return (
    <div className=" space-x-2 flex "> 
      <a className=" px-3 py-2 text-center overflow-hidden rounded-md bg-neutral-800 shadow-xl text-sm font-medium select-none text-neutral-200" href="/public"> Public Page</a>
      <a className=" px-3 py-2 text-center overflow-hidden rounded-md bg-neutral-800 shadow-xl text-sm font-medium select-none text-neutral-200" href="/private"> Private Page </a> 
    </div>
  );
}
