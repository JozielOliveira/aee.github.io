import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


import HeaderTeste from './HeaderTeste';
import BodyTeste from './BodyTeste';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  center : {
    margin: 'auto',
    marginTop: '20px',
    width: '80%'
  }
});

class PaperSheet extends PureComponent {
render(){  
  const { classes } = this.props;
  return (
    <div className={classes.center}>
      <Paper className={classes.root} elevation={1}>
        <HeaderTeste></HeaderTeste>
        <Paper className={classes.root} elevation={1}>
          <BodyTeste></BodyTeste>
        </Paper>
      </Paper>
    </div>
  );
}
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);