import React from 'react';
import OneQuestion from './OneQuestion/oneQuestion';
import Answers from './Answers/answers';
import ProgressCounter from './ProgressCounter/progressCounter';
import FinalScreen from './FinalScreen/finalScreen'
import classes from './questionBlock.module.css';
import { withRouter } from "react-router";
import axios from 'axios';
import Preloader from './../Preloader/preloader'

class QuestionBlock extends React.Component {
    state = {
        loading: true,
        activeQuestion: 0,
        result: {},
        finalScreen: [],
        correctAnswers: 0,
        disabled: false,
        isFinished: false,
        quetionsList: [],
        error: <FinalScreen/>
    }

    choosenAnswer = (id) => {
        this.setState({disabled: true})
        
        const questionsList = this.state.quetionsList;
        const activeQuestion = this.state.activeQuestion;

        if(id === questionsList[activeQuestion].correctAnswer){
            const finalScreenList = [...this.state.finalScreen]
            finalScreenList.push({question: questionsList[activeQuestion].question, answer: 'correct'})
            this.setState({finalScreen: finalScreenList,
                           correctAnswers: this.state.correctAnswers + 1,
                           result: {[id]: 'success'}})
        } else {
            const finalScreenList = [...this.state.finalScreen]
            finalScreenList.push({question: questionsList[activeQuestion].question, answer: 'error'})
            this.setState({finalScreen: finalScreenList,
                           result: {[id]: 'error'}})
        }

        setTimeout(() => {
            if(activeQuestion < questionsList.length - 1){
                this.setState({activeQuestion: activeQuestion + 1})
            } else if(activeQuestion === questionsList.length - 1){
                this.setState({isFinished: true})
            }
            this.setState({disabled: false, result: {}})
        }, 1000)
    }

    retryButton = () => {
        this.setState({
            activeQuestion: 0,
            result: {},
            correctAnswers: 0,
            isFinished: false,
            finalScreen: []
        })
    }
    redirect() {
        this.props.history.push('/error')
    }
    componentDidMount = async() => {
        try{
            const list = await axios.get(`https://react-tests-b0e1f.firebaseio.com/${this.props.match.params.id}.json`)
            const quetionsList = list.data
            if(quetionsList !== null){
                this.setState({quetionsList, loading: false})
            } else {
                return this.redirect()
            }
        } catch(err){}
    }

    render(){
        const currentQuestion = this.state.quetionsList[this.state.activeQuestion];
        const isFinished = this.state.isFinished;
        const questionsList = this.state.quetionsList;
        const activeQuestion = this.state.activeQuestion;
        const loading = this.state.loading;
        return (
            <div className={classes.questionBlock}>
                {loading
                ? <Preloader />
                : !loading && !isFinished
                ? <>
                    <OneQuestion question={currentQuestion.question} />
                    <ProgressCounter activeQuestion={activeQuestion}
                                allQuestion={questionsList.length} />
                    <Answers answers={currentQuestion.answers}
                        correctAnswer={currentQuestion.correctAnswer}  
                        choosenAnswer={this.choosenAnswer} 
                        result={this.state.result}
                        disabled={this.state.disabled} />
                  </>
                : <FinalScreen questionsList={questionsList}
                               finalScreen={this.state.finalScreen}
                               correctAnswers={this.state.correctAnswers}
                               retryButton={this.retryButton}/>
                }
       
            </div>
          )
    }
}

export default withRouter(QuestionBlock);