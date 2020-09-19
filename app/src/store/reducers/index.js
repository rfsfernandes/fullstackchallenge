import questionsReducer from './questions';
import {combineReducers} from 'redux';

export default combineReducers({
    questions: questionsReducer,
})
