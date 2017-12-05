import {combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const appReducers = combineReducers({
    form: reduxFormReducer // mounted under "form"
});

export default appReducers