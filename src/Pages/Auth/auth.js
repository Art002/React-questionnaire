import React from 'react';
import classes from './auth.module.css';
import Input from './Inputs/input';
import is from 'is_js';
import Button from './../../Buttons/button'

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  disabledButton = (input) => {
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

    this.disabledButton(input)
    this.setState({inputs});
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
          <Button class="warning"
                  disabled={!this.state.isFormValid}
                  value="Войти"/>
          <Button class="primary"
                  value="Регистрация"/>
        </form>
      </div>
    )
  }
}

export default Auth;
