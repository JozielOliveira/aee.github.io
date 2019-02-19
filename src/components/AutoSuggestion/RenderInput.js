import React from 'react'
import { TextField } from '@material-ui/core';

export default  ({ InputProps, classes, ref, ...other }) => {
    return (
        <TextField
          InputProps={{
            inputRef: ref,
            classes: {
              root: classes.inputRoot,
              input: classes.inputInput,
            },
            ...InputProps,
          }}
          {...other}
        />
    );
}
