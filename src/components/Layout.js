import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles ,  useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Logo from '../assets/images/Master-Logo.jpeg'
import { Link } from 'react-router-dom';
import Menu from './Menu'
import MenuItem from '@material-ui/core/MenuItem';
import {mainNav,topNav} from '../routes'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .top-nav':{
      // backgroundColor:theme.palette.primary.main,
      backgroundColor:theme.white,
      padding: '10px 5px', 
      display:'flex', 
      justifyContent:'flex-end',
      '& a':{
        margin:'0 5px',
        cursor:'pointer',
        color:'black', 
      },
      '& a:hover':{
        textDecoration:'underline'
      }, 
      [theme.breakpoints.down('md')]: {
        display: 'none',
      }, 
    },
    '& .logo-wrapper':{
      width:'30vh',
      height: '100%',
      padding:'10px',
      marginRight:'10%',
      backgroundColor:theme.white,

      '& img':{
        width:'auto',
        height:'100%'
      },
      [theme.breakpoints.down('md')]: {
        height: '100%',
        marginRight:'0',
      }
    },
    '& .MuiToolbar-root':{
      height: '100px',
      //backgroundColor:  theme.palette.primary.main;
      // background: 'rgb(241,243,245)',
       background: 'radial-gradient(circle, rgba(136,198,245,1) 0%, rgba(129,195,244,1) 17%, rgba(98,167,219,1) 38%, rgba(98,167,219,1) 62%, rgba(232,112,146,1) 86%, rgba(215,25,32,1) 100%)',
      borderTop: '0.5px solid #e0dcdc',
      [theme.breakpoints.down('md')]: {
        height: '70px',
        backgroundColor:theme.palette.primary.main,
      },
      '& .MuiButton-text':{
        // color:theme.palette.primary.main,
        color:theme.white,
        fontWeight:'bold',
        [theme.breakpoints.down('md')]: {
           color:theme.white
        },
        '& .MuiButton-label':{
          [theme.breakpoints.down('md')]: {
            display:'none'
          }
        },
      },
      '& .MuiButton-text:hover':{
        color:theme.white,
        // backgroundColor:theme.palette.primary.main
      }

    },
    '& .content-wrappper':{
      minHeight:'70vh',
      width: '100%',
      marginTop:'100px',
      [theme.breakpoints.down('md')]: {
        marginTop:'30px',
      }
    },
    '& .MuiList-root':{
     color:`${theme.palette.primary.main} !important`,

      // [theme.breakpoints.down('md')]: {
      //   display:'none'
      // }
    },
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'white',

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiButton-root':{
      color:theme.palette.primary.main,
      fontWeight:'bold'
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor:theme.palette.primary.main,
  },
  content: {
    flexGrow: 1,
    backgroundColor:'#eae6e6',
    width:'100%',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    padding:'0 10px'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  footer:{
    backgroundColor:theme.palette.primary.main,
    height:'300px',
    margin:'0 -10px'
  }

}));

const NavBar = ({open,setOpen}) => {
  const classes = useStyles();
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const renderNavLinks = (routes)=>{
    return <>
      {routes.map((route)=>(
       
 !route?.children?.length
  ? <div><Link to={`${route.path}`}>
 <Button>{route.name}</Button>
</Link></div>
: <Menu label={route?.children[0]?.name}>
 {route.children?.slice(1)?.map((res)=>( 
   <Link  to={res.path} key={res.path}>
     <MenuItem >{res.name}</MenuItem>
   </Link>))}        
</Menu>


      ))}
    
    </>
  }

  return (
    <div className={classes.root}>
      <AppBar   position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <div className="top-nav">
          {topNav.map(res => <Link key={res.path} to={`${res.path}`}>{res.name}</Link>)}
        </div>
        <Toolbar className={classes.toolbar}>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className="logo-wrapper">
            <img src={Logo}></img>
          </div>
          {renderNavLinks(mainNav)}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton style={{color:'#fff'}} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List >     
          {renderNavLinks([...mainNav,...topNav])}
        </List>
      </Drawer>
    </div>
  );
};

export default function Layout({children}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar open={open} setOpen={setOpen}/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div className="content-wrappper" >
          {children}
        </div>
        <Footer/>
      </main>
    </div>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>

    </div>
  );
}

