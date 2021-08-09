import {createMuiTheme} from '@material-ui/core';

const colorPrimary = 'rgba(29,161,242,1.00)';
const colorMain = 'hsla(0, 0%, 92%, 0.9)';

let theme = createMuiTheme({
    palette: {
        mainColors: {
            primary: colorPrimary,
            main: colorMain,
        }
    }
})

export default theme;