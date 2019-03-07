import React from 'react'
import { Typography } from '@material-ui/core'

export default ({active, text}) => 
    active === 0 && 
        <Typography variant="h5" gutterBottom  align="center" color="textSecondary" >
            {text}
        </Typography>
          
