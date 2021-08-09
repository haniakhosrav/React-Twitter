import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        background: theme.palette.mainColors.primary,
    },

    container: {
        background: '#e6e6e6',
        width: '45%',
        minHeight: '100vh',
        backgroundAttachment: 'feixed',
        padding: '20px'
    },

    login: {
        '&:focus': {
            outline: 'unset',
        },
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '25px',
        border: '1px solid rgba(29,161,242,1.00)'
    },

    tabs: {
        color: theme.palette.mainColors.primary,
    },

    happening: {
        fontWeight: '1000',
        fontSize: '50px',
        marginLeft: '30px',
    },

    twitter: {
        fontWeight: '800',
        fontSize: '27px',
        marginTop: '30px',
        marginBottom: '20px',
        marginLeft: '30px'
    },

    icon: {
        color: theme.palette.mainColors.primary,
        fontSize: '40px',
        marginLeft: '30px',
        marginTop: '10px',
        marginBottom: '30px'
    },

    leftcont: {
        width: '55%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon2: {
        color: '#ffffff',
        fontSize: '300px'
    },

    root2: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    log: {
        fontWeight: '700',
        marginTop: '30px'
    },

    btn: {
        '&:focus': {
            outline: 'unset',
        },
        width: '70%',
        marginTop: '5px',
        background: theme.palette.mainColors.primary,
        '&:hover': {
            background: theme.palette.mainColors.primary,
        },
    }
}));

export default useStyles;