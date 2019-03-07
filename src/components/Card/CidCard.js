import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { 
    ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar, 
    IconButton, withStyles, Typography
} from '@material-ui/core';
import { Delete, Edit, Description } from '@material-ui/icons';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCID } from "../../store/actions/cid";
import { styles } from './styles';

export class AvaliationCard extends PureComponent {
    render() {
        const { classes, item, deleteCID, edit } = this.props;
        return (
            <Fragment>
                <ListItem className={classes.itemList}>
                    <ListItemAvatar>
                        <Avatar style={{ background : 'white' }}>
                            <Description color='primary' />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={<Typography variant='h6' paragraph> {item.name} </Typography>}
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="editar" onClick={() => edit(item)} >
                        <Edit color='secondary' />
                      </IconButton>
                      <IconButton aria-label="Delete" onClick={() => deleteCID(item)}>
                        <Delete color='error' />
                      </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Fragment>
        );
    }
}

AvaliationCard.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    edit : PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  force: state,
})

const mapDispatchToProps = dispatch => ({
    deleteCID : bindActionCreators(deleteCID, dispatch),
});
  
export default connect(mapStateToProps, mapDispatchToProps )(withStyles(styles)(AvaliationCard));