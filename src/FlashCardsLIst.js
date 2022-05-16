import React from 'react'
import Flashcards from './Flashcards'
import Footer from './Footer'
import setinha from './img/setinha.png'
import wrong from './img/wrong.png'
import almost from './img/almost.png'
import yep from "./img/yep.png"
import "./nweStyle.css"
export default function FlashCardsList({Q,R,index,id, response, setResponse, icones, setIcones, answeredFlashcards, setAnsweredFlashcards}){
    let qnt=[0];
    const Clicks=[{click:"dontRemember"},{click:"Almost"}]
    const[show,setShow]=React.useState(0)
    
    function AnsweringFlashcard(status){
        setResponse([...response,status])
        if(status=='wrong'){
            setShow(4);
            setIcones([...icones,wrong])
        }
        if(status=='almost'){
            setShow(5);
            setIcones([...icones,almost])
        }
        if(status=='yep'){
            setShow(6);
            setIcones([...icones,yep])
        }
        setAnsweredFlashcards(answeredFlashcards+1)
    }

    if(show===0){
    return(
        <>
        <div className='Card2'>
            <p className='Recursive'>{Q}</p>
            <img className='setinha' src={setinha} onClick={()=>
            setShow(1)}/>
  
        </div>
       </>
    )}
    if(show===1){
        
        return(
            <div className='Card2'>
        <p className='Recursive'>{R}</p>
        <div className='RememberButtonContainer'>
            <div className='RememberButton red TextAlignCenter' onClick={()=>AnsweringFlashcard('wrong')} >Não lembrei</div>
            <div className='RememberButton orange TextAlignCenter' onClick={()=>AnsweringFlashcard('almost')}>Quase não lembrei</div>
            <div className='RememberButton green TextAlignCenter' onClick={()=>AnsweringFlashcard('yep')}>Zap!</div>
        </div>
        </div>)
    }
    if(show===4){
        let arr=[];
        arr=[...arr,<img id='wrongImg' src={wrong} />]
        
        return(
            <>
            <div className='Card DisplayFlex2 marginBottom'>
                <p className='DontRememberText'>Pergunta {index+1}</p>
                <img id='wrongImg' src={wrong} />
            </div>
            <Footer
                    answeredFlashcards={answeredFlashcards}
                    response={response}
                    icones={icones}
                />
            </>
        )
    }

    if(show===5){
        qnt++;
        return(
            <>  
                <div className='Card DisplayFlex marginBottom'>
                    <p className='AlmostForgetText'>Pergunta {index+1}</p>
                    <img id='wrongImg' src={almost} />
                </div>
                <Footer
                    answeredFlashcards={answeredFlashcards}
                    response={response}
                    icones={icones}
                />
            </>

        )
    }
    if(show===6){
        qnt++;
        return(
            <>
            <div className='Card DisplayFlex marginBottom'>
                <p className='YepText'>Pergunta {index+1}</p>
                <img id='wrongImg' src={yep} />
            </div>

            <Footer
                    answeredFlashcards={answeredFlashcards}
                    response={response}
                    icones={icones}
                />
            </>
        )
    }
    console.log(response)
  
}