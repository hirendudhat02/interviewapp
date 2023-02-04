import {LOGIN_REQUEST, LOGIN_RESPONSE} from '../Services/Type';

const initialState = {
  data: null,
};
console.log('call loginReducer');
export const LoginReducer = (state = initialState, action) => {
  const prevState = {...state};
  const {type} = action;

  switch (type) {
    case LOGIN_REQUEST:
      console.log('LoginReducer Request call ===>', action);
      return {
        ...prevState,
        action: action,
      };
    case LOGIN_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
