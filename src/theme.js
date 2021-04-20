import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#62A7DB',
    },
    secondary: {
      main: '#D71920',
    },
  },
  grey:{
    light:'',
    dark:''
  },
  white:'#FFF',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme
