import party from "./img/party.png"
import sad from "./img/sad.png"
export default function Footer(props){
    let GameOver=props.answeredFlashcards===4 ? true : false;
    let WrongCard=props.response.find((response)=>response ==='wrong');

    let Title='Parabéns';
    let message='Você não esqueceu de nenhum flashcard!';
    let image=<img src={party}/>
    if(WrongCard){
        Title='Putz...'
        message='Ainda faltam alguns...Mas não desanime!'
        image=<img src={sad}/>
    }
    return (
        <div className='Footer'>
            {GameOver ? (
                <>
                    <div className="DisplayFlex4 ">
                        <div className="SizeAdjust">{image}</div>
                        <div className="FontAdjust">{Title}</div>
                    </div>
                    <div className="Recursive400">{message}</div>
                    
                </>
            ) : (
                ''
            )}
            <h3>{props.answeredFlashcards}/4 CONCLUÍDOS</h3>
            <div>
                {props.icones.map((icone) => (
                    <img className="padding" src={icone} alt='Icon' />
                ))}
            </div>
        </div>
    );
}