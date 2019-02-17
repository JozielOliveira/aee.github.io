import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from'react-redux';

class PrivateRoute extends PureComponent {
  render() {
    const { component: Component, redirectToReferrer, ...rest} = this.props;
    return <Route {...rest} render={(props) => (
        redirectToReferrer
          ? <Component {...props} />
          : <Redirect to='/' />
      )} />;
  }
}

const mapStateToProps = state => ({
  force: state,
  redirectToReferrer : state.auth.get('redirectToReferrer')
})

export default connect(mapStateToProps )(PrivateRoute);
