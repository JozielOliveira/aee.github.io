import React, { PureComponent } from 'react';
import { CircularProgress } from '@material-ui/core';

export default class Loading extends PureComponent {
  render() {
    return <div style={styles.root}> 
                <CircularProgress style={styles.progress} size={80} disableShrink /> 
           </div>;
  }
}

const styles = {
    root : {
        display: 'flex',
        position:'fixed',
        width: '100%',
        height:'100%',
        zIndex: 1,
        background: '#fafafaa3',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
    },
    progress : {
        position:'relative'
    }
}