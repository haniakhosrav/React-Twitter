import React from 'react';
import useStyles from './styles';
import { Tab, Tabs, Typography, TextField, Button, Paper} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import { toast } from 'react-toastify';
import { loginApi, resgisterApi } from '../../api/api-tweet';

const LOGIN_TAB_VALUE = 1;
const REG_TAB_VALUE = 2;

const AuthPage = () => {
    const classes = useStyles();

    const [tab, setTab] = React.useState(LOGIN_TAB_VALUE);

    const handleChangeTab = (e, newValue) => {
        setTab(newValue)
    }

    //Login states
    const [userNameLogin, setUserNameLogin] = React.useState();
    const [passwordLogin, setPasswordLogin] = React.useState();

    //register states
    const [nameRegister, setNameRegister] = React.useState();
    const [userNameRegister, setUserNameRegister] = React.useState();
    const [passwordRegister, setPasswordRegister] = React.useState();
    const [confirmPassword, setConfirmpassword] = React.useState();
    

    const validateLogin = (user) => {
        if(!user.username) return 'Please enter your username';
        if(!user.password) return 'Please enter your pssword';
    }

    const handleLogin = () => {
        const user = {
            username: userNameLogin,
            password: passwordLogin,
        }
        const error = validateLogin(user);
        if (error) toast.error(error);
        loginApi(user, (isOk, data) => {
            if(!isOk) return toast.error(data);
            toast.success("hoooora");
            localStorage.setItem('name', data.name);
            localStorage.setItem('image', data.image);
            localStorage.setItem('username', data.username);
            localStorage.setItem('x-auth-token', data['x-auth-token']);
            window.location.reload();
        })
    }

    const validateRegister = (user) => {
        if(!user.name) return 'Please enter your name';
        if(!user.username) return 'Please enter your username';
        if(!user.password || !user.confirmPassword) return 'Please enter your password';
        if(user.password !== user.confirmPassword) return "Your configration password is not matched to it's main"
    }

    const handleRegister = () => {
        const user = {
            name: nameRegister,
            username: userNameRegister,
            password: passwordRegister,
            confirmPassword: confirmPassword
        }
        const error = validateRegister(user);
        if(error) return toast.error(error);
        user.confirmPassword = undefined;
        resgisterApi(user, (isOk, data) => {
            if (!isOk) return toast.error(data);
            toast.success('You are successfuly registerd');
            localStorage.setItem('name', data.name);
            localStorage.setItem('image', data.image);
            localStorage.setItem('username', data.username);
            localStorage.setItem('x-auth-token', data['x-auth-token']);
            window.location.reload();
        })
    }

    return <div className={classes.root}>
        <div className={classes.leftcont}>
            <TwitterIcon className={classes.icon2}/>
        </div>
        <Paper className={classes.container}>
            <TwitterIcon className={classes.icon}/>
            <Typography className={classes.happening}>
                Happening now
            </Typography>
            <Typography className={classes.twitter}>
                Join Twitter today.
            </Typography>
            <Tabs value={tab}
            className={classes.tabs}
            indicatorColor={'white'}
            onChange={handleChangeTab}>
                <Tab label={'Login'} value={LOGIN_TAB_VALUE} className={classes.login} style={{background: '#ccf2ff'}}/>
                <Tab label={'Sign up'} value={REG_TAB_VALUE} className={classes.login}/>  
            </Tabs>
            {tab === LOGIN_TAB_VALUE &&
                <div className={classes.root2}>
                    <Typography className={classes.log}>Login into your account</Typography>                   
                    <TextField 
                    value={userNameLogin}
                    onChange={e=>setUserNameLogin(e.target.value)}
                    id="outlined-basic" 
                    variant="outlined" 
                    label="Username"
                    style={{width: '70%', marginTop: '10px', marginBottom: '5px'}}/>
                    <TextField 
                    value={passwordLogin}
                    onChange={e=>setPasswordLogin(e.target.value)}
                    id="outlined-basic" 
                    variant="outlined" 
                    label="Password"
                    style={{width: '70%'}}/>
                    <Button onClick={handleLogin} className={classes.btn}>log in</Button>
                </div>
                
                }

            {tab === REG_TAB_VALUE &&
                <div className={classes.root2}>
                    <Typography className={classes.log}>Create your account</Typography>                   
                    <TextField 
                    value={nameRegister}
                    onChange={e => setNameRegister(e.target.value)}
                    id="outlined-basic" 
                    variant="outlined" 
                    label="Full name"
                    style={{width: '70%', marginTop: '10px'}}/>
                    <TextField 
                    value={userNameRegister}
                    onChange={e => setUserNameRegister(e.target.value)}
                    id="outlined-basic" 
                    variant="outlined" 
                    label="Username"
                    style={{width: '70%', marginTop: '5px', marginBottom: '5px'}}/>
                    <TextField
                    value={passwordRegister}
                    onChange={e => setPasswordRegister(e.target.value)} 
                    id="outlined-basic" 
                    variant="outlined" 
                    label="Password"
                    style={{width: '70%'}}/>
                    <TextField 
                    value={confirmPassword}
                    onChange={e => setConfirmpassword(e.target.value)}
                    id="outlined-basic" 
                    variant="outlined" 
                    label="Confirm password"
                    style={{width: '70%', marginTop: '5px'}}/>
                    <Button onClick={handleRegister} className={classes.btn}>register</Button>
                </div>
                }
        </Paper> 
    </div>   
}

export default AuthPage;