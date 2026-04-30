"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {


    //開始頁面 /start

    //題目 /test

    //準備頁面 /prepare

    //結果頁面 /result

    //https://psy-test.com/whichrock/result?id=10

    return(
      <>
      <div className="flex flex-col justify-center items-center gap-4">
        歡迎
        <Link className="text-black bg-white px-3 py-2" href="test">開始</Link>
      </div> 
      </>
    )

}