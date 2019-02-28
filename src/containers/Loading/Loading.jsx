import React from 'react';
import { connect } from'react-redux';
import LoadingComponent from '../../components/Loading';

const Loading = ({active}) => active && <LoadingComponent/>

const reducer = 'loading';
const mapStateToProps = state => ({
  force: state,
  active : state[reducer].get('active')
})


export default connect( mapStateToProps )(Loading);