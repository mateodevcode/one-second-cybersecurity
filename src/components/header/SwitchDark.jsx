"use client";
import React, { useState } from "react";
import { Switch } from "@nextui-org/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function SwitchDark() {
  const [dark, setDark] = useState("dark");
  const toggleDark = () => {
    if (dark === "dark") {
      setDark("light");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      setDark("dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  };

  return (
    <Switch
      defaultSelected
      size="sm"
      color="primary"
      onChange={toggleDark}
      className="cursor-pointer flex flex-row justify-center items-center"
    >
      {dark === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </Switch>
  );
}
