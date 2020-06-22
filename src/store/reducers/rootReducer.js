import { combineReducers } from 'redux';

import authReducer from './auth';
import loadingReducer from './loading';
import notifyReducer from './notify';

const rootReducer = combineReducers({
    authReducer,
    loadingReducer,
    notifyReducer
});

export default rootReducer;