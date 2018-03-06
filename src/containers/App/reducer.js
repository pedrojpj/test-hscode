import {
  SELECT_CHAPTER,
  SELECT_HEADING,
  SELECT_SUBHEADING,
  RESET_VALUE,
  ADD_CODE
} from './actionsTypes';
import { loggerReducer } from '../../utils/logger';

export const initialState = {
  chapter: '00',
  heading: '00',
  subheading: '00',
  code: ''
};

export const reducer = (state = initialState, action) => {
  const { type, chapter, heading, subheading, value, code } = action;

  loggerReducer(action, state);

  switch (type) {
    case SELECT_CHAPTER: {
      return {
        ...state,
        chapter
      };
    }

    case SELECT_HEADING: {
      return {
        ...state,
        heading
      };
    }

    case SELECT_SUBHEADING: {
      return {
        ...state,
        subheading
      };
    }

    case RESET_VALUE: {
      return {
        ...state,
        ...value
      };
    }

    case ADD_CODE: {
      return {
        ...state,
        code
      };
    }

    default:
      return state;
  }
};
