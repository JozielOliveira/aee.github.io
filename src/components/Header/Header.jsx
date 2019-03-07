import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 6}px 0 ${theme.spacing.unit * 4}px`,
    },
})
class Header extends PureComponent {
  render() {
    const { classes, title, subTitle } = this.props;
    return ( title !== undefined && 
      <div className={classes.heroContent}>
        <Typography variant="h3" gutterBottom align="center" color="textPrimary" >
            {title}
        </Typography>
        { subTitle &&
            <Typography style={{marginTop : 20}} variant="subtitle1"  gutterBottom align="center" color="textSecondary">
                {subTitle}
            </Typography>
        }
      </div>
    )
  }
}
Header.propTypes = {
    title : PropTypes.string,
    subTitle : PropTypes.string
};
export default withStyles(styles)(Header);