"use client"

import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react";
import { usePsyStore } from "../../store/store.js"

export default function Test() {
  const router = useRouter();
  const [TestIndex, setTestIndex] = useState(0);

  const PsyData = usePsyStore((state: { PsyData: any; }) => state.PsyData);
  const setScore = usePsyStore((state: { setScore: any; }) => state.setScore);

  console.log(PsyData);
  console.log(PsyData.quizData);

  useEffect(() => {
    console.log("目前分數" + PsyData.score);
  }, [PsyData.score]);

  function next(optionIndex: any){
    console.log("使用者選擇：" + optionIndex);

    setScore(PsyData.score + PsyData.quizData[TestIndex].options[optionIndex].value);
    console.log(PsyData.score);

    if( TestIndex != PsyData.quizData.length - 1 ){      
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
        <div>{ "Q" + (TestIndex + 1) + "." + PsyData.quizData[TestIndex].title }</div>
        <div onClick={()=>next(0)}> { PsyData.quizData[TestIndex].options[0].text } </div>
        <div onClick={()=>next(1)}> { PsyData.quizData[TestIndex].options[1].text } </div>
        <div onClick={()=>next(2)}> { PsyData.quizData[TestIndex].options[2].text } </div>
      </div>
    </div>

    <div> </div>

      <Link className="text-black bg-white px-3 py-2" href="prepare">完成送出</Link>
    </div> 
    </>
  )
}