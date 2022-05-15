import React from "react";

export default function Home({setInit}){
    return (
    <>
        <div className="AlingCenter">
        <div><img src="./image 1.png" alt="logo"/></div>
        <div><h1>ZapRecall</h1></div>
        <div onClick={()=>setInit(true)} className="StartButton BackgroungWhite">Iniciar Recall!</div>
        </div>
    </>
    )
}