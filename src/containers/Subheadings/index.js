import { compose, withProps, pure } from 'recompose';
import { withErrors } from 'recompose-extends';

import { getHeadings } from '../../utils/apiHS';
import ListView from '../../components/ListView';

export default compose(
  withErrors(),
  pure,
  withProps(({ chapter, heading }) => ({
    items: getHeadings(chapter + heading)
  }))
)(ListView);
