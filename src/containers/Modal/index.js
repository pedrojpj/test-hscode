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
      if (!chapter.insert) {
        return true;
      }

      if (!heading.insert) {
        return true;
      }

      if (!subheading.insert) {
        return true;
      }

      return false;
    }
  }),
  pure
)(Modal);
