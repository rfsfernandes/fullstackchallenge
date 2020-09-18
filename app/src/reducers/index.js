import questionsReducer from './questions';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    questions: questionsReducer,
})

export default allReducers;