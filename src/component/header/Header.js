import React from 'react';
import UseStyle from './styles';


const Header = ({title, icon}) => {

    const classes = UseStyle();

    return <React.Fragment>
                <div className={classes.header}>
                    <span className={classes.userIcon}>{icon}</span>                  
                    <span  className={classes.headerTitle}>{title}</span>
                </div>
            </React.Fragment>
}

export default Header;