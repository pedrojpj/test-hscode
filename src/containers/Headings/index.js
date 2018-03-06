import { compose, withProps, pure } from 'recompose';

import { getHeadings } from '../../utils/apiHS';
import ListView from '../../components/ListView';

export default compose(
  pure,
  withProps(({ chapter }) => ({
    items: getHeadings(chapter)
  }))
)(ListView);
