import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { 
    ListItem, ListItemAvatar, ListItemSecondaryAction, Avatar, 
    IconButton, withStyles, Typography, Chip 
} from '@material-ui/core';
import { Delete, Edit, Visibility, Description } from '@material-ui/icons';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItem } from "../../store/actions/avaliation";
import { styles } from './styles';

export class AvaliationCard extends PureComponent {
    state = {
        open: true,
    };

    handleClick = () => this.setState(state => ({ open: !state.open }));
    
    render() {
        const { classes, item, deleteItem, edit, view } = this.props;
        return (
            <Fragment>
                <ListItem className={classes.itemList}>
                    <ListItemAvatar>
                        <Avatar style={{ background : 'white' }}>
                            <Description color='primary' />
                        </Avatar>
                    </ListItemAvatar>
                    <div style={{marginLeft: '20px', width: '100%'}}>
                      <Typography variant={'h6'} paragraph> {item.title} </Typography>
                      <div style={{width: '80%'}}>
                        { item.target_audience.arr.map( 
                              ( item, index )=> 
                                <Chip key={`${index}`} style={{marginRight: '5px', marginTop : '5px'}} label={`${item}`} color='secondary'/>
                          )
                        }
                      </div>
                    </div>
                    <ListItemSecondaryAction>
                      <IconButton aria-label="visualizar" onClick={() => view(item)}>
                        <Visibility color='primary' />
                      </IconButton>
                      <IconButton aria-label="editar" onClick={() => edit(item)}>
                        <Edit color='secondary' />
                      </IconButton>
                      <IconButton aria-label="Delete" onClick={() => deleteItem(item)}>
                        <Delete color='error' />
                      </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Fragment>
        );
    }
}

AvaliationCard.propTypes = {
    classes : PropTypes.object.isRequired,
    item : PropTypes.object.isRequired,
    edit : PropTypes.func.isRequired,
    view : PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  force: state,
})

const mapDispatchToProps = dispatch => ({
    deleteItem : bindActionCreators(deleteItem, dispatch)
});
  
export default connect(mapStateToProps, mapDispatchToProps )(withStyles(styles)(AvaliationCard));