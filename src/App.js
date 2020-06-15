import React from 'react';
import './App.css';
import Header from './Header/header';
import QuestionBlock from './QestionsBlock/questionBlock';
import Menu from './Navigation/menu';
import {Switch, Route} from 'react-router-dom';
import List from './Pages/PagesList/list';
import Auth from './Pages/Auth/auth';
import CreateTest from './Pages/CreateTest/createTest';
import Error from './404/404';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/auth' render= {() => <Auth/>}></Route>
      <Route path='/createTest' render= {() => <CreateTest/>}></Route>
      <Route path='/tests/:id' render= {() => <><Header/><QuestionBlock/></>}></Route>
      <Route path='/error' render={() => <Error />}></Route>
      <Route path='/' exact render= {() => <List/>}></Route>
      </Switch>
      <Menu/>
    </div>
  );
}

export default App;
