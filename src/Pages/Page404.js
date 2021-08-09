import React from 'react';
import useStyles from './Home/styles'

const P404 = () => {

    const classes = useStyles();

    return <div className={classes.root2}>
        <img className={classes.errorImg} src={'/images/404err.jpg'}/>
    </div> 
    
}

export default P404;