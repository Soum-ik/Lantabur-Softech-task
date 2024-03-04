import React from "react";
import Button from "../../Components/button";

export default function Page() {
  return (
    <div className="">
      <span>This is a public page</span>
      <Button text={"Home Page"} link={"/"} />
    </div>
  );
}
