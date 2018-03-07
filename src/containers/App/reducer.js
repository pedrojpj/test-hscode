import {
  SELECT_CHAPTER,
  SELECT_HEADING,
  SELECT_SUBHEADING,
  RESET_VALUE,
  RESET_ALL,
  ADD_CODE
} from './actionsTypes';
import { loggerReducer } from '../../utils/logger';

export const initialState = {
  chapter: { value: '00', insert: false },
  heading: { value: '00', insert: false },
  subheading: { value: '00', insert: false },
  code: ''
};

export const reducer = (state = initialState, action) => {
  const { type, chapter, heading, subheading, value, code } = action;

  loggerReducer(action, state);

  switch (type) {
    case SELECT_CHAPTER: {
      return {
        ...state,
        chapter: {
          value: chapter,
          insert: true
        }
      };
    }

    case SELECT_HEADING: {
      return {
        ...state,
        heading: {
          value: heading,
          insert: true
        }
      };
    }

    case SELECT_SUBHEADING: {
      return {
        ...state,
        subheading: {
          value: subheading,
          insert: true
        }
      };
    }

    case RESET_VALUE: {
      return {
        ...state,
        ...value
      };
    }

    case RESET_ALL: {
      return {
        ...state,
        subheading: initialState.subheading,
        chapter: initialState.chapter,
        heading: initialState.heading
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
