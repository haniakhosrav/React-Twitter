import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '33%',
        padding: '2rem',
        borderLeft: '1px solid',
        borderLeftColor: theme.palette.mainColors.main,
    },

    logo: { 
        height: '35px',
        width: '35px',  
    },

    iconButton: {
        height: '45px',
        width: '45px',
        color: theme.palette.mainColors.primary,
        '&:focus': {
            outline: 'unset',
        },
    },

    title: {
        color: 'rgba(29,161,242,1.00)',
    },

    hashtags: {
        width: '80%',
        height: '60vh',
        borderRadius: '17px',
        marginTop: '20px',
        background: 'hsl(180, 20%, 97%)',  
        overflow: 'auto',  
        '&::-webkit-scrollbar': {
            width: '1px'
          },
          '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#e6e6e6',
            outline: '1px solid slategrey',
          },
          overflowX: 'hidden'  
    },

    hashtagTitle: {
        fontWeight: '1000',
        padding: '10px',
        fontSize: '18px',
        width: '100%',
        background: 'hsl(180, 20%, 97%)',
        position: 'sticky',
        top: '0',
        zIndex: 1,
    },

    divider: {
        background: theme.palette.mainColors.main,
    },

    trend: {
        fontSize: '14px',
        fontWeight: '650',
    },

    hashtagCont: {
        height: '60px',
        width: '100%',
        padding: '10px',    
        borderTop: '1px solid', 
        borderColor:  theme.palette.mainColors.main,
        '&:focus': {
            outline: 'unset',
        },
    },
}))

export default useStyles;