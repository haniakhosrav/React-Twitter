import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        background: 'hsl(180, 20%, 97%)',
        overflowY: 'auto',  
    },

    headerTitle: {
        fontWeight: '1000',
        fontSize: '18px',
    },

    header: {
       padding: '10px',
       background: '#ffffff',
       borderBottom: '1px solid',
       borderBottomColor: theme.palette.mainColors.main,
       position: 'absolute',
       top: 0, 
       zIndex: 1,
       width: '40%',
       height: '50px',
    },
}));

export default useStyles;