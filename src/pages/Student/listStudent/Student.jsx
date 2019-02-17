import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import AlunoCard from '../../../components/Card/AlunoCard';
import { styles } from './styles';
import { dynamicSort } from '../../../helpers/dynamicSort';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';

let students = [{ id : 1, name : 'João', profile : 'boy1' }, { id : 2, name : 'Joana', profile : 'girl' }, 
{ id : 3, name : 'Paulo', profile : 'boy2' }, { id : 4, name : 'Pedro', profile : 'boy4' }, { id : 5, name : 'Larissa', profile : 'girl5' }, 
{ id : 6, name : 'Carlos', profile : 'boy3' }, { id : 7, name : 'Maria', profile : 'girl1' }, { id : 8, name : 'Caroline', profile : 'girl2' }, 
{ id : 9, name : 'Luiza', profile : 'girl4' }, { id : 10, name : 'Mateus', profile : 'boy5' }, { id : 11, name : 'Luan', profile : 'boy' },
{ id : 12, name : 'Daniela', profile : 'girl3' }];


class Student extends PureComponent {
  render (){
    const { classes } = this.props;
    return (
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* List Students */}
          <Grid container spacing={40}>
            {students.sort(dynamicSort("name")).map(student => (
                <AlunoCard key={student.id} student={student}/>
            ))}
          </Grid>
          <Link to={{ pathname : '/main/student/create', state : { pageName : 'Aluno', fromDashboard: true }}}> 
            <Fab  className={classes.fab} color='primary'>
              <AddIcon />
            </Fab>
          </Link>
        </div>
    );
  }
}

Student.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Student);
