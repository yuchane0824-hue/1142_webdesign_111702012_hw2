"use client"

import { useState, useEffect } from "react";

export default function Button({children}: {children: React.ReactNode}) {

    const Button = ["ฅ^•ﻌ•^ฅ","(⁎⁍̴̛ᴗ⁍̴̛⁎)‼","-`д´-"];
    const [CurrentBut, setCurrentBut] = useState(0);
    const [Counter, setCounter] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log("A few moments later")
            }, 10000);

        setInterval(() => {
            if (CurrentBut%5 ==0){
                setCurrentBut(1);
            }else{
                setCurrentBut(0);
            }
            setCounter(Counter+1);
            }, 1000);
        }, []);

    return(
      <>
      {children}
      {Button[CurrentBut]}
      </>
    )

}