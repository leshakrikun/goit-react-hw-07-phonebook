import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
/* import {createStore, applyMiddleware} from 'redux' */
import { composeWithDevTools } from 'redux-devtools-extension';
//import thunk from 'redux-thunk'

//import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; //habr
import * as reducers from './reducer'; //habr

const middleware = getDefaultMiddleware({
  //habr
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  //habr
  reducer: { ...reducers },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

//import { contactsSlice } from './reducer';
/* import { persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist' */

//import rootReducer from './rootReducer'

/* const middlewares = [thunk]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
 */

/* const store = configureStore({ reducer: 
    persistReducer(persistConfig, contactsSlice.reducer),
    middleware,
    devTools:  process.env.NODE_ENV === `development`
}); */
/* const persistor = persistStore(store) */

//export default store /* persistor }*/
