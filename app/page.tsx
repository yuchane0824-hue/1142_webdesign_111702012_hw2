"use client"

import Link from "next/link";
import build from "@/component/Button";  
import Button from "@/component/Button";

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
        <Button>
          <Link className="text-black bg-black px-3 py-2" href="test">開始</Link>
        </Button>
      </div> 
      </>
    )

}