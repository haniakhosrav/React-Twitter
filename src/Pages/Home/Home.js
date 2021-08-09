import React from 'react';
import Header from '../../../src/component/header/Header';
import NewTweet from './components/newTweet';
import TweetList from './components/TweetList';
import UseStyle from './styles';
import { getAllTweets } from '../../api/api-tweet';
import { toast } from 'react-toastify';
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/tweetContext';



const Home = () => {

    const classes = UseStyle();

    const {tweetList: tweets} = useTweetState();
    const tweetDispatch = useTweetDispatch();

    React.useEffect(() => {
        updateTweet();
    })

    const updateTweet = () => {
        getAllTweets((isOk, data) => {
            if(!isOk) return toast.error(data);
            setTweetList(tweetDispatch, data);
        })
    }

    return <div className={classes.root}>
        <Header title={'Home'}/>
            <NewTweet updateTweet={updateTweet}/>
            <TweetList data={tweets}/>
    </div>
}

export default Home;