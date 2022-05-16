import React from 'react'
import Footer from './Footer'
import HeadPage from './HeadPage'
import FlashCardsList from './FlashCardsLIst'
import "./nweStyle.css"
import play from './img/play.png'
export default function Flashcards(){

    const[flashcards,setFlashcards]=React.useState(0)
    const[question,setQuestion]=React.useState('')
    const[icones,setIcones]=React.useState([])
    const[response,setResponse]=React.useState([])
    const[answeredFlashcards,setAnsweredFlashcards]=React.useState(0);

    if(flashcards===0){
        console.log(Cards)
        return(
            <div>
            <HeadPage />
            {Cards.map((item,index)=><div className='AlingCenter' onClick={()=> setFlashcards(1)} >{item}</div>)}
            
            <Footer
                    answeredFlashcards={answeredFlashcards}
                    response={response}
                    icones={icones}>
                    <div className='Footer'>
                        <h3>{flashcards}/4 CONCLUÍDOS</h3>
                    </div>
                </Footer>
            </div>
            )
    }
    if(flashcards===1 ){
        console.log(Myquestion)
        return(
        <div >
            <HeadPage />
            {Myquestion.map((item,index)=>(<FlashCardsList index={index} R={Myquestion[index].R} Q={Myquestion[index].Q} id={Myquestion[index].id} response={response} setResponse={setResponse} icones={icones} setIcones={setIcones} answeredFlashcards={answeredFlashcards} setAnsweredFlashcards={setAnsweredFlashcards}/> ))}

            <Footer
                    answeredFlashcards={answeredFlashcards}
                    response={response}
                    icones={icones}>
                    <div className='Footer'>
                        <h3>{flashcards}/4 CONCLUÍDOS</h3>
                    </div>
                </Footer>
        </div>)
        }
}
let Myquestion=[
    {Q:"Quem é a esposa do Shrek?",R:"Fiona",id:1, Icone:<ion-icon className='PlayIcone' name="play-outline"></ion-icon>},
    {Q:"Quem é o melhor personagem de Shrek?",R:"Burro",id:2,Icone:<ion-icon name="play-outline" className='PlayIcone'></ion-icon>},
    {Q:"Qual personagem foi contratado para matar o Shrek?",R:"Gato de Botas",id:3, Icone:<ion-icon name="play-outline" className='PlayIcone'></ion-icon>},
    {Q:"Em qual filme Shrek se transforma em humano?",R:"Shrek 2",id:7, Icone:<ion-icon name="play-outline" className='PlayIcone'></ion-icon>}
]

let Cards=[
    <div className='DisplayFlex3 Card'>
    <div>Pergunta 1</div>
    <img src={play}/></div>,
    <div className='DisplayFlex3 Card'>
    <div >Pergunta 2</div>
    <img src={play}/></div>,
    <div className='DisplayFlex3 Card'>
    <div >Pergunta 3</div>
    <img src={play}/></div>,
    <div className='DisplayFlex3 Card'>
    <div >Pergunta 4</div>
    <img src={play}/></div>
]

Myquestion.sort(Shuffle)
function Shuffle(){
    return(
        Math.random()-0.5
    )
}

