"use client";
import React, { useState } from "react";

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
    <switch
      onClick={toggleDark}
      className="cursor-pointer flex flex-col justify-center items-center mx-2"
    >
      {dark === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </switch>
  );
}
