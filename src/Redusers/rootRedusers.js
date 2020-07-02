import { combineReducers } from 'redux';
import pagesList from './pagesList';
import createTest from './createTest';
import questionBlock from './qustionBlock';
import auth from './auth'

export default combineReducers({
    pagesList,
    createTest,
    questionBlock,
    auth
  })