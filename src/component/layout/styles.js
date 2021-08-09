import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '100vh',
    },

    content: {
        flex: 1,
        overflowY: 'auto',
        overflow: 'hidden',
        '&::-webkit-scrollbar': {
          width: '1px'
        },
        '&::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#e6e6e6',
          outline: '1px solid slategrey',
        }
    },

    waitParent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '0',
      bottom: '0',
      right: '0',
      left: '0',
      height: '100vh',
      width: '100%'
    },

    cirlce: {
      color: theme.palette.mainColors.primary
    }
}));

export default useStyles;