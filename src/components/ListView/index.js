import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';

const styles = theme => ({
  list: {
    width: '100%',
    display: 'flex',
    flex: '1 1 auto'
  },
  listItem: {
    borderBottom: '2px solid #eeeeee',
    width: '100%'
  },
  listItemIcon: {
    background: '#eeeeee',
    borderRadius: '50%',
    display: 'inline-block',
    width: '30px',
    height: '30px',
    textAlign: 'center',
    boxSizing: 'border-box',
    paddingTop: '5px'
  }
});

const ListView = ({ items, classes, onChange }) => (
  <div className={classes.list}>
    <List dense={false}>
      {items.map(item => (
        <ListItem
          button
          key={item.id}
          className={classes.listItem}
          onClick={() => onChange(item.id)}
        >
          <ListItemIcon>
            <span className={classes.listItemIcon}>{item.id}</span>
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  </div>
);

ListView.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      parent: PropTypes.string
    })
  ),
  onChange: PropTypes.func
};

export default withStyles(styles)(ListView);
