import React from 'react'
import Flashcards from './Flashcards'
import Footer from './Footer'
import setinha from './img/setinha.png'
import wrong from './img/wrong.png'
import almost from './img/almost.png'
import yep from "./img/yep.png"
import "./nweStyle.css"
export default function FlashCardsList({Q,R,index,id}){
    let qnt=[0];
    const Clicks=[{click:"dontRemember"},{click:"Almost"}]
    const[show,setShow]=React.useState(0)
    const[response,setResponse]=React.useState([])
    let[icone,setIcone]=React.useState(0)
    
    function contar(){
        setResponse([...qnt,{qnt}])
        setShow(4);
       console.log(response)

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
        console.log(response)
        
        return(
            <div className='Card2'>
        <p className='Recursive'>{R}</p>
        <div className='RememberButtonContainer'>
            <div className='RememberButton red TextAlignCenter' onClick={contar} >Não lembrei</div>
            <div className='RememberButton orange TextAlignCenter' onClick={()=>setShow(5) }>Quase não lembrei</div>
            <div className='RememberButton green TextAlignCenter' onClick={()=>setShow(6)}>Zap!</div>
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
            <Footer>
                <div  className='Footer'>
                <h3>{index+1}/4 CONCLUÍDOS</h3>
                <img id='wrongImg' src={wrong} />
                </div>
            </Footer>
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
                <Footer>
                <div  className='Footer'>
                <h3>{index+1}/4 CONCLUÍDOS</h3>
                <img id='wrongImg' src={almost} />
                </div>
            </Footer>
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

            <Footer>
            <div  className='Footer'>
            <h3>{index+1}/4 CONCLUÍDOS</h3>
         
            </div>
            </Footer>
            </>
        )
    }
    console.log(qnt)
  
}