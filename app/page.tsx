"use client"

import { useState, useEffect } from "react";

export default function Home() {


    //開始頁面

    //題目

    //結果頁面

    const [counter, setCounter] = useState(0);

    function addSleep(){
      console.log("zzzz");
      setCounter(counter+1);
    }

    useEffect(function(){
      console.log("蛤")
    },[counter]);

    useEffect(function(){
      console.log("隨便寫")
    },[]);

    return(
      <>
        <div className="bg-amber-100 w-[480px] h-screen flex justify-center items-center flex-col"> 
          <div>開始遊戲 </div>
          <div className="bg-black px-6 py-3">開始遊戲</div>
        </div>
        </>
    )

}