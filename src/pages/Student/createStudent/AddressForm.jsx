import React, { Component, Fragment } from 'react';
import { TextField, Grid, withStyles } from '@material-ui/core';
import Autocomplete from '../../../components/AutoSuggestion/AutoSuggestion';
import DatePicker from '../../../components/DatePicker/DatePicker';
import Select from '../../../containers/Select/Select';
import {styles} from './styles';
import { gender, periodo, serie, city } from '../../../utils';


class AddressForm extends Component {
  render() {
    return (
      <Fragment>

         <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="frmNameA"
              name="fname"
              label="Nome"
              fullWidth
              autoComplete="fname"
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lname"
              label="Sobre nome"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
        
          <Grid item xs={6}>
            <DatePicker />
          </Grid>

          <Grid item xs={6}>
            <Select options={gender} label="Gênero" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete label='Cidade Natal'  suggestions={city}/>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Autocomplete label='Cidade Atual'  suggestions={city}/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="street-address"
              name="street-address"
              label="Endereço"
              fullWidth
              autoComplete="street address"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="neighborhood"
              name="neighborhood"
              label="Bairro"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="frmCityS"
              name="ship-city"
              label="Cidade"
              fullWidth
              autoComplete="shipping locality"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="frmZipS"
              name="ship-zip"
              label="CEP"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>

          <Grid item xs={6}>
            <Select options={periodo} label="Periodo" />
          </Grid>

          <Grid item xs={6}>
            <Select options={serie} label="Série" />
          </Grid>

        </Grid>
      </Fragment>
    );
  }
}

export default  withStyles(styles)(AddressForm);
