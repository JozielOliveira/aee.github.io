import React, { PureComponent } from 'react';
import { FormControlLabel, Grid, Fab } from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';

export default class Options extends PureComponent {
    render() {
        const { ComponentType, options, HandleRemove } = this.props;
        return (
            options.map( elem => 
                <Grid container spacing={24} key={elem.value}>
                    <Grid item xs={10} sm={10} >
                        <FormControlLabel
                            value={elem.value}
                            control={<ComponentType color="primary" />}
                            label={elem.label}
                            labelPlacement="end"
                        />
                    </Grid>
                    <Grid  item xs={2} sm={2}>
                        <Fab size='small' color='primary' onClick={() => HandleRemove(elem)}>
                            <RemoveIcon />
                        </Fab>
                    </Grid>

                </Grid>
            )
        );
    }
}
