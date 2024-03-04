import Button from "../Components/button";

export default function Home() {
  return (
    <div className=" space-x-2 ">
      <Button text={"Public Page"} link={"/public"} />
      <Button text={"Private Page"} link={"/private"} />
    </div>
  );
}
