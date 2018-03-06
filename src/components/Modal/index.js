import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Save from 'material-ui-icons/Save';
import Close from 'material-ui-icons/Close';

import Chapters from '../../containers/Chapters';
import Headings from '../../containers/Headings';
import Subheadings from '../../containers/Subheadings';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  modal: {
    position: 'absolute',
    zIndex: '100',
    width: '100%',
    top: '60px',
    backgroundColor: 'white',
    left: 0,
    height: '100%'
  },
  container: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    overflow: 'auto',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
    height: 'calc(100% - 250px)'
  },
  buttonBottom: {
    display: 'inline-block',
    width: '50%',
    height: '60px'
  },
  buttonIcon: {
    paddingRight: '10px',
    position: 'relative',
    top: '4px'
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    textAlign: 'center'
  })
});

const ModalView = ({
  classes,
  selectedTab,
  onChangeTab,
  onCloseModal,
  onSaveModal,
  theme,
  onChangeChapter,
  onChangeHeading,
  onChangeSubheading,
  chapter,
  subheading,
  heading,
  resetValue,
  activeButton,
  ...rest
}) => (
  <div className={classes.modal}>
    <Paper elevation={4} className={classes.paper}>
      <Typography variant="headline" component="h3">
        Selected HS-Code
      </Typography>

      <Typography>{`${chapter} - ${heading} - ${subheading}`}</Typography>
    </Paper>
    <AppBar position="static" color="default">
      <Tabs
        value={selectedTab}
        onChange={onChangeTab}
        indicatorColor="primary"
        textColor="primary"
        fullWidth
        centered
      >
        <Tab label="chapter" onClick={() => resetValue('chapter')} />
        <Tab label="heading" disabled={chapter === '00'} onClick={() => resetValue('heading')} />
        <Tab label="subheading" disabled={heading === '00'} />
      </Tabs>
    </AppBar>
    <div className={classes.container}>
      {selectedTab === 0 && (
        <TabContainer dir={theme.direction} className={classes.tabContainer}>
          <Chapters {...rest} onChange={onChangeChapter} />
        </TabContainer>
      )}
      {selectedTab === 1 && (
        <TabContainer dir={theme.direction}>
          <Headings {...rest} chapter={chapter} onChange={onChangeHeading} />
        </TabContainer>
      )}
      {selectedTab === 2 && (
        <TabContainer dir={theme.direction}>
          <Subheadings
            {...rest}
            chapter={chapter}
            heading={heading}
            onChange={onChangeSubheading}
          />
        </TabContainer>
      )}
    </div>
    <div>
      <Button
        variant="raised"
        color="default"
        className={classes.buttonBottom}
        onClick={onCloseModal}
      >
        <Close className={classes.buttonIcon} />
        Cancel
      </Button>
      <Button
        variant="raised"
        color="primary"
        disabled={activeButton()}
        className={classes.buttonBottom}
        onClick={onSaveModal}
      >
        <Save className={classes.buttonIcon} />Save
      </Button>
    </div>
  </div>
);

ModalView.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedTab: PropTypes.number,
  onChangeTab: PropTypes.func,
  onCloseModal: PropTypes.func,
  onSaveModal: PropTypes.func,
  onChangeChapter: PropTypes.func,
  onChangeHeading: PropTypes.func,
  onChangeSubheading: PropTypes.func,
  theme: PropTypes.object.isRequired,
  chapter: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  resetValue: PropTypes.func,
  activeButton: PropTypes.func
};

ModalView.defaultProps = {
  selectedTab: 0
};

export default withStyles(styles, { withTheme: true })(ModalView);
