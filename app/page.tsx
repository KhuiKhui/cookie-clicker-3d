"use client";
import Image from "next/image";
import { useState } from "react";
import UI from "./components/UI";
import Cookie from "./components/Cookie";

export default function Home() {
  const [cookies, setCookies] = useState(0);
  return (
    <div className="flex flex-col items-center w-[100vw] h-[100vh] bg-[#926E51] text-black cursor-default">
      <b className="border-2 border-black border-t-0 bg-[#F8DFB2] p-[5px]">
        cookie clicker 3d
      </b>
      <br></br>
      <UI cookies={cookies} setCookies={setCookies}></UI>

      <Cookie cookies={cookies} setCookies={setCookies}></Cookie>
    </div>
  );
}
