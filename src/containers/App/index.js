import {
  compose,
  pure,
  withStateHandlers,
  withProps,
  withReducer,
  withHandlers,
  mapProps,
  lifecycle
} from 'recompose';
import { withModal, withActions } from 'recompose-extends';

import { logger } from '../../utils/logger';
import { selectChapter, selectHeading, selectSubheading, resetValue, addCode } from './actions';
import { reducer, initialState } from './reducer';
import App from '../../components/App';
import Modal from '../../containers/Modal';

export default compose(
  withReducer('state', 'dispatch', reducer, initialState),
  withActions({ selectChapter, selectHeading, selectSubheading, resetValue, addCode }),
  mapProps(({ state, ...rest }) => ({ ...state, ...rest })),
  withStateHandlers(
    { modal: false },
    {
      selectCode: () => () => ({ modal: true }),
      hideModal: () => () => ({ modal: false })
    }
  ),
  withModal(({ modal }) => modal, Modal, ({ hideModal, addCode }) => ({
    onCloseModal: () => hideModal(),
    onSaveModal: () => {
      hideModal();
      addCode();
    }
  })),
  withHandlers({
    onChangeCode: () => value => {
      logger('Dispatch event onChange', value);
    }
  }),
  pure
)(App);
