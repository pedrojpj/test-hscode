import { compose, pure, withStateHandlers, withHandlers } from 'recompose';

import Modal from '../../components/Modal';

export default compose(
  withStateHandlers(
    { selectedTab: 0 },
    {
      onChangeTab: () => (event, value) => ({ selectedTab: value })
    }
  ),
  withHandlers({
    onChangeChapter: ({ onChangeTab, selectChapter }) => value => {
      onChangeTab(null, 1);
      selectChapter(value);
    },
    onChangeHeading: ({ onChangeTab, selectHeading }) => value => {
      onChangeTab(null, 2);
      selectHeading(value);
    },
    onChangeSubheading: ({ selectSubheading }) => value => {
      selectSubheading(value);
    },
    activeButton: ({ chapter, heading, subheading }) => () => {
      if (chapter == '00') {
        return true;
      }

      if (heading == '00') {
        return true;
      }

      if (subheading == '00') {
        return true;
      }

      return false;
    }
  }),
  pure
)(Modal);
