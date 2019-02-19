import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
    lineHeight: '24px'
  },
  input: {
    margin: theme.spacing.unit * 3,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`,
    width: '100%',
    fontSize: '3rem !important'
  },
});

class HeaderTeste extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="row"
          spacing={24}
        >
          <Grid
            item
            md={12}
            className={classes.demo}
          >
          <div className={classes.container}>
              <TextField
                label="Título"
                defaultValue="Anamnese"
                className={classes.textField}
                InputProps={{
                    disableUnderline: true,
                    classes: {
                        input: classes.textField,
                    },
                  }}
              />
              <TextField
                label="Descrição"
                defaultValue="É onde começa do toda coleta de dados do aluno"
                className={classes.textField}
                InputProps={{
                    disableUnderline: true,
                  }}
              />
            </div>
          </Grid>
        </Grid>
    );
  }
}

HeaderTeste.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderTeste);
