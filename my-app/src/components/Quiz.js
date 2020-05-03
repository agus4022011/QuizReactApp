import React, { Component } from 'react'
import {QuizData} from './preguntas'

class Quiz extends Component {



    constructor(props) {
        super(props)

        this.state = {
                userAnswer:null,
                cuentaPreguntas :0,
                opciones :[],
                examend:false,
                score:0,
                disabled: true

                 
        }
    }

    loadQuiz = () =>{

        const  {cuentaPreguntas} = this.state;

        this.setState(() => {
        
        return {

            preguntas : QuizData[cuentaPreguntas].question,
            opciones : QuizData[cuentaPreguntas].options,
            respuesta : QuizData[cuentaPreguntas].answer





            }

        });
    }

    componentDidMount(){
            
        this.loadQuiz();

    }



    updateQue(){
        
        const {userAnswer,respuesta,score} = this.state;

        this.setState({
            cuentaPreguntas:this.state.cuentaPreguntas + 1

        })

        if(userAnswer===respuesta){
       this.setState({

        score:score+1

       })

        }
        


    }

    componentDidUpdate(prevProps,prevState){
        const {cuentaPreguntas} = this.state;
        if(this.state.cuentaPreguntas!==prevState.cuentaPreguntas){
            this.setState(()=>{

                return {
                    disabled:true,

                    preguntas : QuizData[cuentaPreguntas].question,
                    opciones : QuizData[cuentaPreguntas].options,
                    respuesta : QuizData[cuentaPreguntas].answer
        
        
        
        
        
                    }
            })
        }

    }

checkAnwer(option){


    this.setState({
        userAnswer:option,
        disabled:false
    })
    console.log(this.state.userAnswer)
}


finishExam(){



    const {userAnswer,respuesta,score} = this.state;

    if(userAnswer===respuesta){
        this.setState({
 
         score:score+1
 
        })
 
         }


if (this.state.cuentaPreguntas ===QuizData.length-1){
  this.setState({

    examend : true

  })

}

}





 
    render() {
        const {preguntas,opciones,cuentaPreguntas,userAnswer,examend} = this.state;

        if (examend){

                return(

                    <div className="alert alert-success">

                        <h2>Su examen finalizo</h2>
                <p>Sus respuestas correctas fueron {this.state.score}/{QuizData.length}</p>

                        {QuizData.map((it,index)=>(

                            <ul  key={index} >
                               {it.id} - {it.answer}
                            </ul>


                        ))}

                        
                    </div>

                )


        }



        return (
            <div className="card w-50 mr-auto ml-auto  ">
               
                <h2> {preguntas}</h2>
        <span>{`Pregunta ${cuentaPreguntas} de ${QuizData.length - 1}`}</span>
                <hr/>
                {opciones.map(
                    item =>
                    <p key= {item.id}
                       className={`card  ${userAnswer === item ? "bg-secondary":null}`}
                       onClick = {()=>this.checkAnwer(item)}
                    >
                        {item}
                    </p>
                )}


                {cuentaPreguntas < QuizData.length - 1 &&
                <button
                   onClick={()=>this.updateQue()}
                   className="btn btn-success"
                   disabled={this.state.disabled}
                >

                        Siguiente pregunta
               

                </button>
                }

                {cuentaPreguntas === QuizData.length-1 &&
                <button
                onClick={()=>this.finishExam()}
                className="btn btn-danger"
                disabled={this.state.disabled}
               >

                     Finalizar
            

             </button>
                
                }


                <br/>
            </div>
        )
    }
}

export default Quiz
