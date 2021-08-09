import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        background: 'hsl(180, 20%, 97%)',
        overflowY: 'auto',
    },

    homeTitle: {
        fontWeight: '1000',
        fontSize: '18px',
    },

    newTweet: {
        minHeight: '22vh',
        width: '100%',
        position: 'relative',
        background: '#ffffff',
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.mainColors.main,
        marginTop: '50px'
    },

    text: {
        border: 'none',
        width: '90%',
        height: '150px',
        '&:focus': {
            outline: 'unset'
        }
    },

    prof: {
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        border: '1px solid',
        borderColor: theme.palette.mainColors.main,
    },

    cont: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px',
    },

    button: {
        background: theme.palette.mainColors.primary,
        borderRadius: '20px',
        width: '75px',
        height: '40px',
        color: 'white',
        fontWeight: '600',
        position: 'absolute',
        right: '10px',
        bottom: '10px',
        textTransform: 'capitalize',
        '&:focus': {
            outline: 'unset',
            background: theme.palette.mainColors.primary,
        },

        '&:hover': {
            background: theme.palette.mainColors.primary,
        }, 
    },

    photo: {
        color: theme.palette.mainColors.primary,
        position: 'absolute',
        left: '35px',
        bottom: '10px',
        borderRadius: '50px',
        '&:focus': {
            outline: 'unset',
        },
    },

    tweet: {
        background: '#ffffff',
        marginTop: '10px',
        minHeight: '22vh',
        width: '100%',
        position: 'relative',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderTopColor: theme.palette.mainColors.main,
        borderBottomColor: theme.palette.mainColors.main,
        position: 'relative',    
    },

    userProf: {
        height: '40px',
        width: '40px',
        borderRadius: '50px',
        border: '1px solid',
        borderColor: theme.palette.mainColors.main,
        position: 'absolute',
        left: '5px',
        top: '5px'
    },

    names: {
        position: 'absolute',
        left: '55px',
        top: '12px'
    },

    retweet: {
        fontSize: '20px',
        '&:focus': {
            outline: 'unset',
        },
        position: 'absolute',
        left: '10px',
        bottom: '5px'
    },

    like: {
        '&:focus': {
            outline: 'unset',
        },
        position: 'absolute',
        left: '70px',
        bottom: '5px',
        color: '#ff1a66',
    },

    likeNum: {
        fontSize: '12px',
        position: 'absolute',
        left: '113px',
        bottom: '17px'
    },

    heart: {
        fontSize: '20px'
    },

    content: {
        marginTop: '60px',
        marginBottom: '50px',
        marginLeft: '30px',   
        fontSize: '15px', 
    },

    errorImg: {
        height: '60%',
        width: '85%',
    },

    root2: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    tweetImg: {
        width: '100px', 
        height: '100px',
        borderRadius: '5px',
        position: 'absolute',
        right: '110px',
        bottom: '10px'
    },

    tweetPhoto: {
        height: '150px',
        widht: '150px',
        borderRadius: '5px',
        display: 'block',
        marginBottom: '60px',
        marginLeft: '30px',
    },
}));

export default useStyles;