import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { styles } from './styles';

class Footer extends PureComponent {
  render() {
    const { classes }  = this.props;
    return (
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Em Desenvolvimento
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            by Joziel O Santos
          </Typography>
        </footer>    
    );
  }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Footer);