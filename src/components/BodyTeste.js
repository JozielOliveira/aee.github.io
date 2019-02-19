import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { RadioButtonChecked, CheckBox, Sort, Subject } from '@material-ui/icons';

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
    fontSize: '2rem !important'
  },
  select : {
    backgroudColor: '#f5f5f5f5'
  }
});


class HeaderTeste extends PureComponent {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'Select',
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

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
            <Grid
              item
              md={8}
              className={classes.demo}
            >
                <TextField
                  label="Título"
                  defaultValue="Pergunta"
                  className={classes.textField}
                  InputProps={{
                      disableUnderline: true,
                      classes: {
                          input: classes.textField,
                      },
                    }}
                />
            </Grid>
            <Grid
              item
              md={4}
              className={classes.demo}
            >
                <TextField
                  id="outlined-select-currency"
                  select
                  className={classes.textField}
                  value={this.state.currency}
                  onChange={this.handleChange('currency')}
                  SelectProps={{
                    MenuProps: {
                      className :  { select: classes.select}
                    },
                    
                  }}
                  margin="normal"
                >
                    <MenuItem key='select' value='Select'>
                      <RadioButtonChecked style={{ fontSize: 15}} /> Multipla Escolha
                    </MenuItem>
                    <MenuItem key='check' value='Check'  >
                      <CheckBox style={{ fontSize: 15}} /> Caixas de Seleção
                    </MenuItem>
                    <MenuItem key='text' value='Reposta Curta'  >
                      <Sort style={{ fontSize: 15}} /> Resposta Curta
                    </MenuItem>
                    <MenuItem key='text' value='Reposta Longa'  >
                      <Subject style={{ fontSize: 15}} /> Resposta Longa
                    </MenuItem>
                </TextField>
            </Grid>  
            </div>
          </Grid>
          <Grid
            item
            md={12}
            className={classes.demo}
          >
            <TextField
                  label="Título"
                  defaultValue="Pergunta"
                  className={classes.textField}
                  InputProps={{
                      disableUnderline: true,
                      classes: {
                          input: classes.textField,
                      },
                    }}
                />
          </Grid>
        </Grid>
    );
  }
}

HeaderTeste.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderTeste);
