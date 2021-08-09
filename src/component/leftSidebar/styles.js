import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '27%',
        padding: '2rem', 
        borderRight: '1px solid',
        borderRightColor: theme.palette.mainColors.main,
    
    },

    divider: {
        background: theme.palette.mainColors.main,
    },

    profile: {
        borderRadius: '50px',
        width: '50px',
        height: '50px',
        border: '1px solid',
        borderColor: theme.palette.mainColors.main,
        position: 'absolute',
        left: '20px',
        top: '20px'   
    },

    cont: {
        position: 'absolute',
        top: '27px',
        left: '80px',
        color: '#595959', 
        cursor: 'pointer'
    },

    profText: {
        fontSize: '12px'
    },

    who: {
        width: '95%',
        background: 'hsl(180, 20%, 97%)',
        height: '60vh',
        marginTop: '80px',
        borderRadius: '17px',
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

    title: {
        fontWeight: '1000',
        padding: '10px',
        fontSize: '18px',
        position: 'sticky',
        top: '0',
        zIndex: 1,
        width: '100%',
        background: 'hsl(180, 20%, 97%)',
        
    },


    name: {
        fontSize: '14px',
        fontWeight: '650',
    },

    id: {
        fontSize: '12px',
        color: '#595959',
    },

    image: {
        height: '40px',
        width: '40px',
        borderRadius: '50px',
        position: 'absolute',
        left: '10px',
        border: '1px solid #e6e6e6',
        
    },

   

    nameId: {
        position: 'absolute',
        left: '60px',
        top: '8px',
    },

    usersCont: {
        '&:focus': {
            outline: 'unset',
        },
        width: '100%',
        height: '55px',
        padding: '8px',
        position: 'relative',
        borderTop: '1px solid',
        borderColor: theme.palette.mainColors.main,
    }
}))

export default useStyles;