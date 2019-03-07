import React, { PureComponent } from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../../assets/logo_white.png';
import { logout } from '../../store/actions/auth';
import MenuComponet from '../../components/Menu/Menu.jsx';

const menu = [ 
    { id: '1', label : 'Agenda', path : 'schedule', description : 'Lista por ordem de agendamento'}, 
    { id : '2', label : 'Alunos', path : 'student', description : 'Alunos são as pessoas que poderam ser avaliadas no AEE' }, 
    { id : '3', label : 'Avaliações', path : 'avaliation', description : 'Avaliações são criadas pra aplicar em alunos e obter resultado para analise de CIDs' },
    { id : '4', label : 'CIDs', path : 'cid', description : 'Classificação Internacional de Doenças' }
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