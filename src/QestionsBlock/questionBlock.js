import React from 'react';
import OneQuestion from './OneQuestion/oneQuestion';
import Answers from './Answers/answers';
import ProgressCounter from './ProgressCounter/progressCounter';
import FinalScreen from './FinalScreen/finalScreen';
import classes from './questionBlock.module.css';
import { withRouter } from "react-router";
import Preloader from './../Preloader/preloader';
import { connect } from 'react-redux';
import { oneQuestion, resetState, setTest, fetchTest } from './../Actions/questionsBlock';

class QuestionBlock extends React.Component {
    componentDidMount = () => {
        this.props.fetchTest(this.props.match.params.id, this.props.history)
    }
    render(){
        const { isFinished, questionsList, activeQuestion, loading, finalScreen, correctAnswers, result, disabled } = this.props
        const currentQuestion = questionsList[activeQuestion];
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
                             choosenAnswer={this.props.oneQuestion} 
                             result={result}
                             disabled={disabled} />
                  </>
                : <FinalScreen questionsList={questionsList}
                               finalScreen={finalScreen}
                               correctAnswers={correctAnswers}
                               retryButton={this.props.resetState}/>
                }
       
            </div>
          )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.questionBlock.loading,
        activeQuestion: state.questionBlock.activeQuestion,
        result: state.questionBlock.result,
        finalScreen: state.questionBlock.finalScreen,
        correctAnswers: state.questionBlock.correctAnswers,
        disabled: state.questionBlock.disabled,
        isFinished: state.questionBlock.isFinished,
        questionsList: state.questionBlock.questionsList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        oneQuestion: (id) => dispatch(oneQuestion(id)),
        resetState: () => dispatch(resetState()),
        setTest: (questionsList) => dispatch(setTest(questionsList)),
        fetchTest: (id, error) => dispatch(fetchTest(id, error))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(QuestionBlock))
  