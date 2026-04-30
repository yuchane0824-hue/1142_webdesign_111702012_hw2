"use client"

import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function test() {

  const router = useRouter();

  let TestData = [
    {
      title: "題目一", 
      options:[
        {
          text: "選項一",
          value: 1
        },

        {
          text: "選項二",
          value: 2
        },

        {
          text: "選項三",
          value: 3
        }
      ]
    },

    {
      title: "題目二", 
      options:[
        {
          text: "選項一",
          value: 1
        },

        {
          text: "選項二",
          value: 2
        },

        {
          text: "選項三",
          value: 3
        }
      ]
    },

    {
      title: "題目三", 
      options:[
        {
          text: "選項一",
          value: 1
        },

        {
          text: "選項二",
          value: 2
        },

        {
          text: "選項三",
          value: 3
        }
      ]
    }
  ];

 const [TestIndex, setTestIndex] = useState(0);

  function next(optionIndex: number){
    console.log("使用者選擇：" + optionIndex);

    if( TestIndex < TestData.length - 1 ){      
      console.log("下一題");
      setTestIndex( TestIndex + 1 );
    }else{
      console.log("看結果");
      router.push("/prepare")
    }
  }

  return(
    <>
    <div className="flex flex-col justify-center items-center gap-4">
    答題

    <div>
      <div>
        <div>{ "Q" + (TestIndex + 1) + "." + TestData[TestIndex].title }</div>
        <div onClick={()=>next(0)}> { TestData[TestIndex].options[0].text } </div>
        <div onClick={()=>next(1)}> { TestData[TestIndex].options[1].text } </div>
        <div onClick={()=>next(2)}> { TestData[TestIndex].options[2].text } </div>
      </div>
    </div>

    <div> </div>

      <Link className="text-black bg-white px-3 py-2" href="prepare">完成送出</Link>
    </div> 
    </>
  )

}