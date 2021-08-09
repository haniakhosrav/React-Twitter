import { Typography, Grid, ButtonBase, IconButton } from '@material-ui/core';
import React from 'react';
import UseStyle from './styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';
import { getAllHashtags } from '../../api/api-tweet';
import { toast } from 'react-toastify';
import { useTweetDispatch, useTweetState , setHashtagList} from '../../context/tweetContext';

const RightSidebar = () => {
    const classes = UseStyle();

    const {hashTags} = useTweetState();
    const tweetDispatch = useTweetDispatch();

    React.useEffect(() => {
        getAllHashtags((isOk, data) => {
        if(!isOk) return toast.error(data);
        setHashtagList(tweetDispatch, data);
    })
})

    return <div className={classes.root}>
        <Grid container direction={'row'} alignItems={'center'}>

            <Link to={'/'}>
                <IconButton  className={classes.iconButton}>
                    <TwitterIcon className={classes.logo}/>
                </IconButton>
            </Link>
                <Typography component={'span'} className={classes.title}>
                    Twitter
                </Typography>  
             
        </Grid>
        
        
        <div className={classes.hashtags} container direction={'column'} alignItems={'left'}>   
            <div className={classes.hashtagTitle}>
                Trends for you
            </div>

            {
                hashTags.map(item => <Link to={'/hashtags/' + item.text} style={{textDecoration: "none", color: "black"}}>
                                    <ButtonBase className={classes.hashtagCont}>
                                        <Grid item container>
                                            <Typography className={classes.trend}>#{item.text}</Typography>
                                        </Grid> 
                                    </ButtonBase>
                                </Link>)
            }
                             
        </div>
</div>
}

export default RightSidebar;