import React, { PureComponent, lazy, Suspense, Fragment } from 'react';

import { withStyles, CssBaseline } from '@material-ui/core';
// Components
import Menu from '../containers/Menu/Menu.jsx';
// import Footer from '../components/Footer/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import Header from '../components/Header/Header';
import { styles } from './styles';
import 'typeface-roboto';
// Pages
const Student = lazy(() => import('./Student/listStudent/Student.jsx'));
const Avaliation = lazy(() => import ('./Avaliation/listAvaliation/Avaliation.jsx'));
const CreateStudent = lazy(() => import('./Student/createStudent/CreateStudent.jsx'));
const CreateAvaliation = lazy(() => import('./Avaliation/createAvaliation/CreateAvaliation.jsx'));
const EditAvaliation = lazy(() => import('./Avaliation/editAvaliation/EditAvaliation'));
const DetailsAvaliation = lazy(() => import('./Avaliation/Details/Details'));
const Schedule = lazy(() => import('./Schedule/Schedule.jsx'));
const CID = lazy(() => import('./CID/listCID/CID'));
const CreateCID = lazy(() => import('./CID/createCID/CreateCID'));
const EditCID = lazy(() => import('./CID/editCID/EditCID'));
class Main extends PureComponent {
  render() {
    const { classes, location } = this.props;
    return (
        <Fragment>
            <CssBaseline />
            <Menu />
            <main className={classes.layout}>
                { location.state &&
                    <Header title={location.state.name} subTitle={location.state.description}/> 
                }
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route exact path="/main" component={() => <Redirect to={{ pathname: "/main/schedule", state: { name: 'Agenda' }}} /> } />
                        <Route exact path="/main/schedule" component={Schedule}/>
                        <Route exact path="/main/student" component={Student}/>
                        <Route path="/main/student/create" component={CreateStudent}/>
                        <Route exact path="/main/avaliation" component={Avaliation}/>
                        <Route path="/main/avaliation/create" component={CreateAvaliation}/>
                        <Route path="/main/avaliation/edit" component={EditAvaliation}/>
                        <Route path="/main/avaliation/view" component={DetailsAvaliation}/>
                        <Route exact path="/main/cid" component={CID}/>
                        <Route path="/main/cid/create" component={CreateCID}/>
                        <Route path="/main/cid/edit" component={EditCID}/>
                    </Switch>
                </Suspense>
            </main>
        </Fragment>
    );
  }
}
export default withStyles(styles)(Main);