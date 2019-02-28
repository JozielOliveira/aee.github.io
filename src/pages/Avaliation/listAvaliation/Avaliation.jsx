import React, { Component } from 'react';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import AvaliationCard from '../../../components/Card/AvaliationCard';
import NotFound from '../../../components/NotFound/notFound';
import { styles } from './styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { getAll, getItem } from "../../../store/actions/avaliation";

class Avaliation extends Component {
  componentDidMount= () => this.props.getAll()

  handleEdit = async item => {
    const response = await this.props.getItem(item);
    if (response)
      this.props.history.push('/main/avaliation/edit');
  }

  handleView = async item => {
    const response = await this.props.getItem(item);
    if (response)
      this.props.history.push('/main/avaliation/view');
  }

  render (){
    const { classes, list } = this.props;
    return (
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {NotFound({active : list.length, text : 'Não há avaliações cadastrada'})}
          {/* List avaliations */}
          <List
             className={classes.root}
          >
            {list.map( item => (
              <AvaliationCard key={item.id} item={item} edit={this.handleEdit} view={this.handleView}/>
            ))}
          </List>
          <Link to={{ pathname : '/main/avaliation/create', state : { pageName : 'Aluno', fromDashboard: true }}}> 
            <Fab  className={classes.fab} color='primary'>
              <AddIcon />
            </Fab>
          </Link>
        </div>
    );
  }
}

const reducer = 'avaliations';
const mapStateToProps = state => ({
  force: state,
  list : state[reducer].get('list'),
})

const mapDispatchToProps = dispatch => ({
  getAll : bindActionCreators(getAll, dispatch),
  getItem : bindActionCreators(getItem, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps )(withStyles(styles)(Avaliation));
