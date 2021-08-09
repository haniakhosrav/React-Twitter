import React from 'react';
import LeftSidebar from '../leftSidebar/leftSidebar';
import RightSidebar from '../rightSidebar/rightSidebar';
import UseStyle from './styles';
import { getProfileRequest } from '../../api/api-tweet';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { CircularProgress } from '@material-ui/core';

const Layout = (props) => {
    const classes = UseStyle();

    const history = useHistory();
    const [wait, setWait] = React.useState(true);

    React.useEffect(() => {
        getProfileRequest((isOk, data) => {
            if(!isOk)  {
                toast.error(data);
                localStorage.clear();
                return history.push('/login');
            }
            else {
                localStorage.setItem('name', data.name);
            localStorage.setItem('image', data.image);
            localStorage.setItem('username', data.username);
            localStorage.setItem('x-auth-token', data['x-auth-token']);
            setWait(false);
            }
        })
    })

    if(wait) return <div className={classes.waitParent}>
        <CircularProgress className={classes.cirlce}/>
        Please wait
    </div>

    return <div className={classes.root}>
            <LeftSidebar />
        
        <div className={classes.content}>
            {props.children}
        </div>      
        <RightSidebar />
    </div>
}

export default Layout;