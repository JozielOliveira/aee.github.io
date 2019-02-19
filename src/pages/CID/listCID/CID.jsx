import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import AvaliationCard from '../../../components/Card/CidCard';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { getListCID, getCID } from "../../../store/actions/cid";
import { styles } from './styles';

class CID extends Component {
  componentDidMount = () => this.props.getListCids()

  handleEdit = async item => {
    const response = await this.props.getCID(item);
    if (response)
      this.props.history.push('/main/cid/edit');
  }

  render (){
    const { classes, listCID } = this.props;
    return (
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* List avaliations */}
          <List
             className={classes.root}
          >
            {listCID.map( cid => (
              <AvaliationCard key={cid.id} item={cid} edit={this.handleEdit}/>
            ))}
          </List>
          <Link to={{ pathname : '/main/cid/create', state : { pageName : 'Aluno', fromDashboard: true }}}> 
            <Fab  className={classes.fab} color='primary'>
              <AddIcon />
            </Fab>
          </Link>
        </div>
    );
  }
}

CID.propTypes = {
  classes: PropTypes.object.isRequired,
};

const reducer = 'cid';
const mapStateToProps = state => ({
  force: state,
  listCID : state[reducer].get('listCID'),
})

const mapDispatchToProps = dispatch => ({
  getListCids : bindActionCreators(getListCID, dispatch),
  getCID : bindActionCreators(getCID, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps )(withStyles(styles)(CID));
