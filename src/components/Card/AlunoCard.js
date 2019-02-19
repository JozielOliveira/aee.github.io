import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

export class AlunoCard extends PureComponent {
  render() {
    const { classes, student } = this.props;
    return (
        <Grid item sm={6} md={4} lg={3} xl={2} style={{width:'100%'}}>
            <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                image={require(`../../assets/${student.profile}.png`)} // eslint-disable-line max-len
                title="Image title"
                style={{
                    backgroundSize : 'contain'
                }}
                />
                <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                    {student.name}
                </Typography>
                </CardContent>
                <CardActions>
                    <Button style={{flex:1}} size="small" color="primary">
                        Detalhes
                    </Button>
                    <Button style={{flex:1}} size="small" color="primary">
                        Editar
                    </Button>
                </CardActions>
            </Card>
        </Grid>    
    );
  }
}

AlunoCard.propTypes = {
    classes: PropTypes.object.isRequired,
    student: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(AlunoCard);