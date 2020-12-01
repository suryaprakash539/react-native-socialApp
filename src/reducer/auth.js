import {IS_AUTHENTICATED, SET_USER} from '../action/action.types';

const initialState = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
