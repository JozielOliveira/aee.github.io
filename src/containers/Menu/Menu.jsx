import React, { PureComponent } from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../../assets/logo_white.png';
import { logout } from '../../store/actions/auth';
import MenuComponet from '../../components/Menu/Menu.jsx';

const menu = [ 
    { id: '1', label : 'Agenda', path : 'schedule'}, 
    { id : '2', label : 'Alunos', path : 'student'}, 
    { id : '3', label : 'Avaliações', path : 'avaliation'},
    { id : '4', label : 'CIDs', path : 'cid'}
]

class Menu extends PureComponent {
    render() {
        const { redirectToReferrer, logout } = this.props;
        return <MenuComponet 
            logo={logo}
            menu={menu}
            redirectToReferrer={redirectToReferrer}
            logout={logout}
        />
  }
}

const reducer = 'auth';
const mapStateToProps = state => ({
  force: state,
  redirectToReferrer : state[reducer].get('redirectToReferrer')
})

const mapDispatchToProps = dispatch => ({
  logout : bindActionCreators(logout, dispatch)
});

export default connect( mapStateToProps, mapDispatchToProps )(Menu);