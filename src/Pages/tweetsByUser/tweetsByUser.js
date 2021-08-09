import React from 'react';
import Header from '../../../src/component/header/Header';
import TweetList from '../Home/components/TweetList';
import UseStyle from '../Home/styles';
import PersonIcon from '@material-ui/icons/Person';
import { getTweetsByUserRequest } from '../../api/api-tweet';
import { useTweetState, useTweetDispatch, setTweetList} from '../../context/tweetContext';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';


const TweetsByUser = (props) => {

    const {tweetList: tweets} = useTweetState();
    const {headerTitle: title} = useTweetState();
    const dispatch = useTweetDispatch();
    const location = useLocation();

    React.useEffect(() => {
        getTweetsByUserRequest(props.match.params.username, (isOk, data) => {
            if(!isOk) return toast.error(data.message);
            setTweetList(dispatch, data);
        })
    }, [location])

    const classes = UseStyle();

    return <div className={classes.root}>
        <Header title={title} icon={<PersonIcon/>}/>
        <div style={{marginTop: '50px'}}>
            <TweetList data={tweets}/>
        </div>
    </div>
}

export default TweetsByUser;