import { compose, withProps, pure } from 'recompose';

import { getChapters } from '../../utils/apiHS';
import ListView from '../../components/ListView';

export default compose(
  pure,
  withProps({
    items: getChapters()
  })
)(ListView);
