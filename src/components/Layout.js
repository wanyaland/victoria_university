import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles ,  useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Logo from '../assets/images/Master-Logo.jpeg'
import { Link } from 'react-router-dom';
import Menu from './Menu'
import MenuItem from '@material-ui/core/MenuItem';
import {about} from '../routes'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiToolbar-regular': {
      height: '100px',
      backgroundColor:theme.white,
      [theme.breakpoints.down('md')]: {
        height: '70px',
        backgroundColor:theme.palette.primary.main,

      },
    },
    '& .top-nav':{
      backgroundColor:theme.palette.primary.main,
      padding: '10px 5px', 
      display:'flex', 
      justifyContent:'flex-end',
      '& a':{
        margin:'0 5px',
        cursor:'pointer',
        color:theme.white, 
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
      marginRight:'5%',

      '& img':{
        width:'100%',
        [theme.breakpoints.down('md')]: {
          height: '100%',
          width:'auto',
  
        },
      },
      [theme.breakpoints.down('md')]: {
        height: '100%',
        marginRight:'0',

      },
    },
    '& .MuiToolbar-root':{
      '& .MuiButtonBase-root':{
        color:theme.palette.primary.main,
        [theme.breakpoints.down('md')]: {
          color:theme.white
        },
        '& .MuiButton-label':{
          [theme.breakpoints.down('md')]: {
            display:'none'
          }
        },
      },
      '& .MuiButtonBase-root:hover':{
        color:theme.white,
        backgroundColor:theme.palette.primary.main
      }

    },
    '& .content-wrappper':{
      minHeight:'70vh',
      width: '100vw',
      marginTop:'100px',
      [theme.breakpoints.down('md')]: {
        marginTop:'30px',
      }
    }
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
  const renderNavLinks = ()=>{
    return <>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Menu label="About Us">
        {about.map((route)=>( 
          <Link  to={route.path} key={route.path}>
            <MenuItem >{route.name}</MenuItem>
          </Link>))}        
      </Menu>
    </>
  }

  return (
    <div className={classes.root}>
      <AppBar   position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <div className="top-nav">
          <Link to="/">Staff</Link>
          <Link to="/">Almuni</Link>
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
          {renderNavLinks()}
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
          {renderNavLinks()}
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

