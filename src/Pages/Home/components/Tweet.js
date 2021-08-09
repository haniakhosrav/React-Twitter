import { IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';
import UseStyle from '../styles';
import { useTweetDispatch, setTweetText as setTweet, likeTweet } from '../../../context/tweetContext';
import { likeTweetRequest } from '../../../api/api-tweet';
import { toast } from 'react-toastify';

const Tweet = ({data}) => {

    const classes = UseStyle();

    const tweetDispatch = useTweetDispatch();

    const renderTweet = (text) => {
        return {__html: text.replace(/#\S+/g, `<a href="./tags" style="color: rgb(27, 149, 224); margin-left: 3px; margin-right: 2px ">$&</a>`)};
    }

    const getImage = () => {
        if(data.user.image) return data.user.image;
        return '/images/user.png'
    }

    const retweetClick = () => {
        setTweet(tweetDispatch, data.text + '(retweet)');
    }  

    const handleLike = () => {
        likeTweetRequest(data._id, (isOk, data) => {
            if(!isOk) return toast.error(data);
            likeTweet(tweetDispatch, data._id);
        }) 
    }

    return <div className={classes.tweet}>
                
            <img className={classes.userProf} src={getImage()}/>
            <Typography className={classes.names} component={'span'}>{data.user.name}</Typography>
              
            <Typography component={'p'} dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.content}>
                     
            </Typography>
         
            {
                data.image &&
                <img src={data.image} 
                className={classes.tweetPhoto}/>          
            }
            
            
            <IconButton onClick={retweetClick} className={classes.retweet}>
                <i className={'fa fa-retweet'}></i>
            </IconButton> 

            <IconButton onClick={handleLike} className={classes.like}>
                <FavoriteIcon className={classes.heart}/>
            </IconButton>
            <Typography component={'span'} className={classes.likeNum}>{data.likes}</Typography>
        </div>
        
            
}

export default Tweet;