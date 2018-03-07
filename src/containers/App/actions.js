import {
  SELECT_CHAPTER,
  SELECT_HEADING,
  SELECT_SUBHEADING,
  RESET_VALUE,
  RESET_ALL,
  ADD_CODE
} from './actionsTypes';

export const selectChapter = dispatch => chapter => dispatch({ type: SELECT_CHAPTER, chapter });
export const selectHeading = dispatch => heading => dispatch({ type: SELECT_HEADING, heading });
export const selectSubheading = dispatch => subheading =>
  dispatch({ type: SELECT_SUBHEADING, subheading });

export const resetValue = dispatch => value => {
  if (value === 'chapter') {
    dispatch({ type: RESET_VALUE, value: { heading: { value: '00', insert: false } } });
    dispatch({ type: RESET_VALUE, value: { subheading: { value: '00', insert: false } } });
  } else if (value === 'heading') {
    dispatch({ type: RESET_VALUE, value: { subheading: { value: '00', insert: false } } });
  }
};

export const resetAll = dispatch => () => dispatch({ type: RESET_ALL });

export const addCode = (dispatch, state) => () => {
  dispatch({
    type: ADD_CODE,
    code: state.chapter.value + state.heading.value + state.subheading.value
  });
};
