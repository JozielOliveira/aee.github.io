import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ScheduleCard from '../../components/Card/ScheduleCard';
import { styles } from './styles';

const students = [{ id : 1, name : 'João', profile : 'boy1' }, { id : 2, name : 'Joana', profile : 'girl' }, 
{ id : 3, name : 'Paulo', profile : 'boy2' }, { id : 4, name : 'Pedro', profile : 'boy4' }, { id : 5, name : 'Larissa', profile : 'girl5' }, 
{ id : 6, name : 'Carlos', profile : 'boy3' }, { id : 7, name : 'Maria', profile : 'girl1' }, { id : 8, name : 'Caroline', profile : 'girl2' }, 
{ id : 9, name : 'Luiza', profile : 'girl4' }, { id : 10, name : 'Mateus', profile : 'boy5' }, { id : 11, name : 'Luan', profile : 'boy' },
{ id : 12, name : 'Daniela', profile : 'girl3' }];

class Schedule extends Component {
  render (){
    const { classes } = this.props;
    return (
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* List Students */}
          <Grid container spacing={40} >
            {students.map(student => (
              <ScheduleCard key={student.id} student={student}/>
            ))}
          </Grid>
        </div>
    );
  }
}

Schedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Schedule);
