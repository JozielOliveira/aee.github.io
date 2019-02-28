import React from 'react'
import { Typography } from '@material-ui/core'

export default ({active, text}) => 
    active === 0 && 
        <Typography component="h4" variant="h4" align="center" color="textSecondary" >
            {text}
        </Typography>
          
