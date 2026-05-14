"use client"

import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    fetch("/api/backend")
      .then((res) => res.json())
  }, []);

  return(
    <>
    </>
  )
}