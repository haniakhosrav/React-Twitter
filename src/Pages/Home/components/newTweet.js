import { Button, IconButton} from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import React from 'react';
import UseStyle from '../styles';
import classnames from 'classnames';
import { newTweetRequest } from '../../../api/api-tweet';
import { toast } from 'react-toastify';
import { useTweetDispatch, useTweetState, updateHashtagList } from '../../../context/tweetContext';
import { setTweetText as setTweet } from '../../../context/tweetContext';

const NewTweet = ({updateTweet}) => {
    const classes = UseStyle();
    const input = React.useRef();

    const {tweetText: tweet} = useTweetState();
    const tweetDispatch = useTweetDispatch();

    const [imagePath, setImagePath] = React.useState();

    const newTweetClick = () => {

        const tweetText = tweet;
        if(!tweetText) return;

        const formData = new FormData();
        formData.append('text', tweetText);

        if(imagePath)
        formData.append('image', imagePath);

        newTweetRequest(formData, (isOk) => {
            if(!isOk) return toast.error('error');
            toast.success("your tweet successfuly posted");
        }); 
        setTweet(tweetDispatch, '');
        setImagePath(); 
        updateTweet(); 
        if(tweetText.includes('#'))
        updateHashtagList(tweetDispatch); 
    }

    const getImage = () => {
        if (localStorage.getItem('image') 
        && localStorage.getItem('image') !== 'undefined') 
        return localStorage.getItem('image');
        return '/images/ghost.png';
    }

    const tweetPhoto = (e) => {
        if(e.target.files && e.target.files.length > 0){
            const reader = new FileReader();
            reader.onload = (e) => {
            setImagePath(e.target.result);
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const showImage = () => {
        if(imagePath) return imagePath;
        return;
    }

    return <React.Fragment>
        <div container className={classes.newTweet}>
            <div className={classes.cont}>
                <img className={classes.prof} src={getImage()}/>
            
                <textarea value={tweet} 
                onChange={e => setTweet(tweetDispatch, e.target.value)} 
                placeHolder={"What's happening?"} 
                className={classnames(classes.text, 'editable')}
                >
                    
                </textarea>
                {
                    imagePath &&
                    <img src={showImage()} 
                    className={classes.tweetImg}/>
                    
                }
                
            </div>
            <IconButton onClick={() => input.current.click()} 
            className={classes.photo}>
                <AddPhotoAlternateIcon/>
            </IconButton>
            <input onChange={tweetPhoto} 
            style={{display: 'none'}} ref={input} type={'file'}/>
            
            <Button onClick={newTweetClick} 
            variant={'contained'} className={classes.button}>
                Tweet
            </Button>    
        </div>
    </React.Fragment>
}

export default NewTweet;