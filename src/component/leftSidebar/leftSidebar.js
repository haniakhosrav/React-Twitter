import { Typography, Grid, Divider, ButtonBase, MenuItem, Menu} from '@material-ui/core';
import React from 'react';
import UseStyle from './styles';
import { Link } from 'react-router-dom';
import { getUsers } from '../../api/api-tweet';
import { sendProf } from '../../api/api-tweet';
import { toast } from 'react-toastify';
import { setHeaderTitle , useTweetDispatch} from '../../context/tweetContext';


const Twitter = ({name, username, img, id}) => {

    const classes = UseStyle();

    const usersPhoto = () => {
        if(img) return img;
        return '/images/user.png'
    }
    
    const dispatch = useTweetDispatch()

    return <Link  to={'/user/' + id} style={{textDecoration: 'none', color: 'black'}}>
    <ButtonBase onClick={() => setHeaderTitle(dispatch, name)} className={classes.usersCont}> 
                <img src={usersPhoto()} className={classes.image}/>   
                <div className={classes.nameId}>
                    <Typography className={classes.name}>{name}</Typography>
                    <Typography className={classes.id}>{username}</Typography>                         
                </div>  
            </ButtonBase>
        </Link>
}

const LeftSidebar = () => {

    const classes = UseStyle();

    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        getUsers((isOk, data)=> {
            if(!isOk) return alert(data);
            setUsers(data);
        })
    })


    const [imagePath, setImagePath] = React.useState();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const input = React.useRef();

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    const getImage = () => {
        if(imagePath) return imagePath;
        if (localStorage.getItem('image') && localStorage.getItem('image') !== 'undefined') 
        return localStorage.getItem('image');
        return '/images/user.png';
    }

    const setProf = (e) => {
        if(e.target.files && e.target.files.length > 0){

            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePath(e.target.result)  
            }
            reader.readAsDataURL(e.target.files[0]);
            const formData = new FormData();
            formData.append('image', e.target.files[0]);
            sendProf(formData, (isOk, data) => {
                if(!isOk) return toast.error(data);
                toast.success('Your profile photo successfuly uploaded');
                localStorage.setItem('image', data.imagePath);
                window.location.reload()
            })
        } 
    }

    return <div className={classes.root}>
        <Grid direction={'row'}>
            <img className={classes.profile} src={getImage()}/>
            <Grid className={classes.cont} aria-haspopup="true" onClick={handleClick}>
                <Typography className={classes.profText}>{localStorage.getItem('name')}</Typography>
                <Typography  className={classes.profText}>@{localStorage.getItem('username')}</Typography> 
            </Grid>
            <Menu 
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >    
            <MenuItem onClick={handleClose, handleLogout}>Log out</MenuItem>
            <MenuItem onClick={() => input.current.click()}><input 
            ref={input} 
            type={'file'} 
            style={{display: 'none'}}
            onChange={setProf}/>Set profile</MenuItem>
        </Menu>
        </Grid>

       
        <div container direction={'column'} className={classes.who}>
            <div className={classes.title}>Who to follow</div>
            {
                users.map(
                    item => <Twitter id={item._id} name={item.name} username={item.username} img={item.image}/>
                    )
            }
        </div>
    </div>
}

export default LeftSidebar;