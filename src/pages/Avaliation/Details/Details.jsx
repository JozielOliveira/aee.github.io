import React, { PureComponent, Fragment } from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { withStyles, CssBaseline, Paper, Button, Typography } from '@material-ui/core';
import { calcelAvaliation } from "../../../store/actions/avaliationCreate";
import { styles } from './styles';
import { Review } from '../../../containers/AvaliationForm';

class Details extends PureComponent {
    handleBack = () => this.props.calcelAvaliation()
    handleEdit = () => this.props.history.push('/main/avaliation/edit')
    render() {
        const  { classes, name, description, form} = this.props;
        if (!name)
          return <Redirect to={{ pathname: '/main/avaliation/', state : { name : 'Avaliação'} }}/>
        return (
            <Fragment>
            <CssBaseline />
            <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h3" align="center"color="textPrimary" >
                    {name}
                </Typography>
                <Typography component="h5" variant="h6" align="center" color="textSecondary">
                    {description}
                </Typography>
                <Fragment>
                    <Review form={form}/>
                    <div className={classes.buttons}>
                        <Button onClick={this.handleBack} className={classes.button}>
                        Voltar
                        </Button>
                    
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleEdit}
                            className={classes.button}
                        >
                            Editar
                        </Button>
                    </div>
                </Fragment>
            </Paper>
            </main>
        </Fragment>
        )
    }
}
const reducer = 'createAvaliation'
const mapStateToProps = state => ({
  force: state,
  name : state[reducer].get('name'),
  description : state[reducer].get('description'),
  form: state[reducer].get('form'),
})

const mapDispatchToProps = dispatch => ({
    calcelAvaliation : bindActionCreators(calcelAvaliation, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Details));
