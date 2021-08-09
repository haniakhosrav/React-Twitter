import React from 'react';
import Header from '../../../src/component/header/Header';
import TweetList from '../Home/components/TweetList';
import UseStyle from '../Home/styles';
import { getTweetsByHashtagRequest } from '../../api/api-tweet';
import { toast } from 'react-toastify';
import { useTweetState , useTweetDispatch, setTweetList as setTweets} from '../../context/tweetContext';
import { useLocation } from 'react-router';

const TweetByHashtags = (props) => {

    const classes = UseStyle();

    const location = useLocation();
    const {tweetList: tweets} = useTweetState();
    const tweetDispatch = useTweetDispatch();

    React.useEffect(() => {
        getTweetsByHashtagRequest(props.match.params.hashtag, (isOk, data) => {
            if(!isOk) return toast.error(data);
            setTweets(tweetDispatch, data);
        })
    }, [location])

    return <div className={classes.root}>
        <Header title={props.match.params.hashtag}/>
        <div style={{marginTop: '50px'}}>
            <TweetList data={tweets}/>
        </div>
    </div>
}

export default TweetByHashtags;