import React from 'react';
import classes from './createTest.module.css';
import getAnswers from './stateGenerator/stateGenerator';
import Input from './../Auth/Inputs/input';
import Button from './../../Buttons/button';
import Select from './Select/select';
import { addQuestion, createNewTest } from './../../Actions/createTest';
import { connect } from 'react-redux';

function generateInputs() {
  return {
    question: {
      type: 'text',
      label: 'Введите вопрос',
      value: '',
      isTouched: false,
      isValid: false,
      errorMessage: 'Поле не должно быть пустым'
    },
    answer1: getAnswers(1),
    answer2: getAnswers(2),
    answer3: getAnswers(3),
    answer4: getAnswers(4)
  }
}

class CreateTest extends React.Component {
  state = {
    inputs: generateInputs(),
    correctAnswer: 2,
    options: [
      {text: 'Вариант 1', value: 1},
      {text: 'Вариант 2', value: 2},
      {text: 'Вариант 3', value: 3},
      {text: 'Вариант 4', value: 4}
    ],
    disabled: true
  }

  validation = (e, input) => {
    input.isTouched = true
    if(e.target.value !== ''){
      input.isValid = true
    } else {
      input.isValid = false
    }
  }
  disableButton = (inputs) => {
    let isFormValid = true

    for (let input in inputs) {
      if (inputs.hasOwnProperty(input)) {
        isFormValid = inputs[input].isValid && isFormValid
      }
    }
    return isFormValid
  }

  changeHandler = (e, oneInput) => {
    const inputs = {...this.state.inputs}
    const input = inputs[oneInput]

    this.validation(e, input)
    input.value = e.target.value
    inputs[oneInput] = input

    this.setState({inputs, disabled: !this.disableButton(inputs)})
  }

  selectChangeHandler = (e) => {
    this.setState({correctAnswer: +e.target.value})
  }

  pushQuestion = (e) => {
    e.preventDefault()
    const inputs = {...this.state.inputs}
    const correctAnswer = this.state.correctAnswer
    const test = {}
    
    test.correctAnswer = correctAnswer
    test.question = inputs.question.value
    test.answers = [
      {text : inputs.answer1.value, id: inputs.answer1.id},
      {text : inputs.answer2.value, id: inputs.answer2.id},
      {text : inputs.answer3.value, id: inputs.answer3.id},
      {text : inputs.answer4.value, id: inputs.answer4.id}
    ]
    this.props.addQuestion(test)

    this.setState({inputs: generateInputs()})
  }

  createTest = (e) => {
    e.preventDefault()
    try{
      this.props.createNewTest()
      this.setState({
        inputs: generateInputs(),
        disabled: true
      })
    } catch(err){}
    }

  render(){
    const inp = this.state.inputs;
    const inputs = Object.keys(inp).map((oneInput, index) => {
      const input = inp[oneInput];
      return <div key={oneInput + index}>
              <Input label={input.label}
                type={input.type}
                errorMessage={input.errorMessage}
                value={input.value}
                onChange={(e) => this.changeHandler(e, oneInput)}
                UniqueKey={oneInput + index}/>
                {index === 0 ? <hr/> : null}
              </div>
    
    })
    return (
      <div className={classes.createTest}>
        <form>
          {inputs}
          <Select label="Правильный ответ"
                  options={this.state.options}
                  value={this.state.correctAnswer}
                  onChange={this.selectChangeHandler}/>
          <Button value="Добавить вопрос"
                  view="primary"
                  onClick={this.pushQuestion}
                  disabled={this.state.disabled}/>
          <Button value="Создать тест"
                  view="warning"
                  disabled={this.state.disabled}
                  onClick={this.createTest}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      tests: state.createTest.tests
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      addQuestion: (test) => dispatch(addQuestion(test)),
      createNewTest: () => dispatch(createNewTest())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateTest)
