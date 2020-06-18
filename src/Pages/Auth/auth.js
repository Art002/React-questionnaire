import React from 'react';
import classes from './auth.module.css';
import Input from './Inputs/input';
import is from 'is_js';
import Button from './../../Buttons/button';
import axios from 'axios'

class Auth extends React.Component {
  state = {
    isFormValid: false,
    inputs: {
      email: {
        label: 'Email',
        type: 'email',
        value: '',
        isValid: false,
        touched: false,
        errorMessage: 'Введите корректный Email',
      },
      password: {
        label: 'Пароль',
        type: 'text',
        value: '',
        isValid: false,
        touched: false,
        errorMessage: 'Введите корректный пароль',
      }
    }
  }

  validation = (value, type) => {
    let isValid = true;
    if(type === 'email'){
      isValid = is.email(value)
    }else if (type === 'text'){
      isValid = value.length >= 6
    }
    return isValid;
  }

  disabledButton = () => {
    let isFormValid = true;
    Object.keys(this.state.inputs).forEach(name => {
      isFormValid = this.state.inputs[name].isValid
    })
    this.setState({isFormValid});
  }

  inputChange = (event, input) => {
    const inputs = {...this.state.inputs};
    const inp = inputs[input];

    inp.value = event.target.value;
    inp.touched = true;
    inp.isValid = this.validation(inp.value, inp.type);

    inputs[input] = inp;

    this.disabledButton()
    this.setState({inputs});
  }

  register = async(e) => {
    e.preventDefault()
    const params = {
      email: this.state.inputs.email.value,
      password: this.state.inputs.password.value,
      returnSecureToken: true
    }
    try{
      await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCegsXsj4hSwieRMd2B2Yc_arxN5q8yat8', params)
    } catch(e) {
     
    }
    
  }
  logIn = async(e) => {
    e.preventDefault()
    const params = {
      email: this.state.inputs.email.value,
      password: this.state.inputs.password.value,
      returnSecureToken: true
    }
    try{
      await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCegsXsj4hSwieRMd2B2Yc_arxN5q8yat8', params)
    } catch(e) {
      console.log('Неверный пароль')
    }
    
  }

  render(){
    const inputs = Object.keys(this.state.inputs).map((input, index) => {
      const inp = this.state.inputs[input];
      return <Input key={inp.label + index}
                    label={inp.label}
                    type={inp.type}
                    value={inp.value}
                    onChange={(event) => this.inputChange(event, input)}
                    touched={inp.touched}
                    isValid={inp.isValid}
                    errorMessage={inp.errorMessage}/>
    })
    return (
      <div className={classes.auth}>
        <form>
          {inputs}
          <Button view="warning"
                  disabled={!this.state.isFormValid}
                  value="Войти"
                  onClick={this.logIn}/>
          <Button view="primary"
                  disabled={!this.state.isFormValid}
                  value="Регистрация"
                  onClick={this.register}/>
        </form>
      </div>
    )
  }
}

export default Auth;
