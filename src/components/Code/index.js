import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import { logger } from '../../utils/logger';

const styles = theme => ({
  container: {
    marginBottom: '10px'
  }
});

class Code extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.props.onChange({ name: this.props.name, value: this.props.value });
    }
  }

  componentDidMount() {
    if (this.props.value) {
      this.props.onChange({ name: this.props.name, value: this.props.value });
    }
  }

  render() {
    const { value, placeholder, classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography align="center" variant="title">
          {value ? value : placeholder}
        </Typography>
      </div>
    );
  }
}

Code.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  classes: PropTypes.object.isRequired
};

Code.defaultProps = {
  value: '000000'
};

export default withStyles(styles)(Code);
