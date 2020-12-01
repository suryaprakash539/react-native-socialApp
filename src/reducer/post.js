import {SET_POST, ERROR_POST} from '../action/action.types';

const initialState = {
  posts: null,
  isLoading: true,
  error: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        error: false,
      };

    case ERROR_POST:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default postReducer;
