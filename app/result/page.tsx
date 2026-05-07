"use client"
import { useState, useEffect } from "react";
import { usePsyStore } from "@/store/store";
import { useRouter } from "next/navigation"

export default function Result() {
  const router = useRouter();
  const PsyData = usePsyStore( (state)=> state.PsyData );
  const setPsyScore = usePsyStore( (state) => state.setScore );
  const [PsyResult, setPsyResult] = useState(<></>);
  
  useEffect( ()=>{
    getResult();
  }, [PsyData.score]);


  function getResult(){
    if( PsyData.score < 3 ){
      setPsyResult(
        <div>結果 A</div>
      );
    }else if( PsyData.score >= 3 && PsyData.score < 7 ){
      setPsyResult(<div>結果 B</div>);
    }else{
      setPsyResult(<div>結果 C</div>);
    }
  }

  function Replay(){
    setPsyScore(0);
    router.push("/");
  }

  
  
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        
        結果，目前積分：{PsyData.score}
        
        {PsyResult}
        
        <div 
          className="text-white bg-black px-3 py-2" 
          onClick={Replay}>
          再玩一次
        </div>
      </div>
    </>
  );

}