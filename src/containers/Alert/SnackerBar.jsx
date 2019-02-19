import React, { PureComponent, Fragment  } from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { Snackbar } from '@material-ui/core';
import MySnackbarContentWrapper from '../../components/SnackerBar/MySnackbarContent';
import { closeAlert } from '../../store/actions/alert';


class CustomizedSnackbars extends PureComponent {

  render() {
    const { open, msg, closeAlert, variant } = this.props;
    return (
      <Fragment>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          autoHideDuration={3000}
          onClose={closeAlert}
        >
          <MySnackbarContentWrapper
            onClose={closeAlert}
            variant={variant}
            message={msg}
          />
        </Snackbar>
      </Fragment>
    );
  }
}

const reducer = 'alert';
const mapStateToProps = state => ({
  force: state,
  open : state[reducer].get('open'),
  msg  : state[reducer].get('msg'),
  variant : state[reducer].get('variant')
})

const mapDispatchToProps = dispatch => ({
  closeAlert : bindActionCreators(closeAlert, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps )(CustomizedSnackbars);
