import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#62A7DB',
      dark:'#013B6D'
    },
    secondary: {
      main: '#D9232B',
      dark:'#ab161f'
    },
  },
  grey:{
    light:'#eef0f3',
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
