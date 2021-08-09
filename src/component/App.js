import React from 'react';
import Layout from './layout/Layout';
import Home from '../Pages/Home/Home';
import TweetByHashtags from '../Pages/tweetByHashtags/tweetByHashtags';
import TweetsByUser from '../Pages/tweetsByUser/tweetsByUser';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Page404 from '../Pages/Page404';
import AuthPage from '../Pages/auth/auth';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TweetProvider } from '../context/tweetContext';

let App = () => {
    return <div>
        <BrowserRouter>
        <Switch>
            <PublicRoute path={'/login'} component={AuthPage}/>
            <PrivateRoute path={'/'} render={() => {
                return <TweetProvider>
                <Layout>
                <Switch>
                    <Route  path={'/user/:username'} component={TweetsByUser}/>
                    <Route  path={'/hashtags/:hashtag'} component={TweetByHashtags}/>
                    <Route exact path={'/'} component={Home}/>
                    <Route component={Page404}></Route>
                </Switch>  
            </Layout>
            </TweetProvider>
            }}>
            </PrivateRoute>
            </Switch>
        </BrowserRouter>
        <ToastContainer/>
    </div>
}

const isLogin = () => !!localStorage.getItem('x-auth-token');

const PublicRoute = ({component, ...props}) => {
    return <Route {...props} render={(props) => {
        if(isLogin()) return <Redirect to={'/'}/>
        return React.createElement(component, props);
    }}/>
}

const PrivateRoute = ({render, ...props}) => {
    return <Route {...props} render={() => {
        if(isLogin()) return render(props);
        return <Redirect to={'/login'}/>
    }}/>
}

export default App;
