import React, { PureComponent } from 'react'
import { Drawer, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { 
  ChevronLeft as ChevronLeftIcon, 
  ChevronRight as ChevronRightIcon,
  Today as AgendaIcon,
  AssignmentIndRounded as AlunosIcon,
  InsertChart as AvaliationIcon,
  LocalOffer as CIDsIcon,
  AccountCircle,
  DirectionsRun
} from '@material-ui/icons';
import Menu from './NavBar';

const icons = {
  'Agenda' : <AgendaIcon />,
  'Alunos' : <AlunosIcon />,
  'Avaliações' : <AvaliationIcon />,
  'CIDs' : <CIDsIcon />
} 

export default class NavBarMobile extends PureComponent {
  render() {
    const { classes, theme, logout, menu, open, close } = this.props;
    return (
        <Drawer
          className={classes.drawer}
          anchor="right"
          open={open}
          onClose={close}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={close}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Menu menu={menu} Component={ item =>
              <ListItem button onClick={close}>
                <ListItemIcon>{icons[item.label]}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            }/>
            <ListItem button>
                <ListItemIcon><AccountCircle/></ListItemIcon>
                <ListItemText primary="Perfil" />
            </ListItem>
            <ListItem button onClick={logout}>
                <ListItemIcon><DirectionsRun/></ListItemIcon>
                <ListItemText primary="Sair" />
            </ListItem>
          </List>
        </Drawer>
    )
  }
}
