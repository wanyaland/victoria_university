import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles ,  useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Logo from '../assets/images/Master-Logo.jpeg'
import { Link } from 'react-router-dom';
import Menu from './Menu'
import MenuItem from '@material-ui/core/MenuItem';
import {mainNav,topNav} from '../routes'
import { Paper, Button,Typography,Card,CardContent ,CardMedia,Divider,Grid} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
const drawerWidth = 240;
export const navHeight = 80;

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
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
      width:'200px',
      height: '100%',
      padding:'10px',
      marginRight:'10%',
      backgroundColor:theme.white,

      '& img':{
        width:'100%',
        height:'100%'
      },
      [theme.breakpoints.down('md')]: {
        height: '100%',
        marginRight:'0',
      }
    },
    '& .MuiToolbar-root':{
      height: navHeight,
      //backgroundColor:  theme.palette.primary.main;
      // background: 'rgb(241,243,245)',
      background: 'radial-gradient(circle, rgba(136,198,245,1) 0%, rgba(129,195,244,1) 17%, rgba(98,167,219,1) 38%, rgba(98,167,219,1) 62%, rgba(232,112,146,1) 86%, rgba(215,25,32,1) 100%)',
      borderTop: '0.5px solid #e0dcdc',
      [theme.breakpoints.down('md')]: {
        // height: '70px',
        // backgroundColor:theme.palette.primary.main,
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
  
    '& .MuiList-root':{
      color:`${theme.palette.primary.main} !important`,
    },
    '& .MuiPaper-elevation4':{
      boxShadow:'none'
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
    // flexGrow: 1,
    backgroundColor:theme.grey.light,
    width:'100%',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidth,
    overflowX: 'hidden',
    '& .content-wrappper':{
      minHeight:'70vh',
      width: '100%',
      marginBottom:'50px',
    },
  
  },
  // contentShift: {
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  //   marginLeft: 0,
  // },
  footer:{
    position:'relative',
    backgroundColor:theme.palette.primary.main,
    minHeight:'200px',
    color:'white',
    '& .MuiCard-root':{
      background:'none',
      color:'white',
      '& a':{
        color:'white',
      },
      '& p':{
        margin:'2px',
      }
    }, 
    '& .MuiPaper-elevation1':{
      boxShadow:'none'
    },
    '& .copyright':{
      postion:'absolute', 
      top:'90%', 
      left:'0' ,
      backgroundColor:theme.palette.primary.dark,
      color:'white'
    },
    '& .MuiDivider-root':{
      backgroundColor:theme.white,  
    }
  }

}));

export default function Layout({children}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar open={open} setOpen={setOpen} />
      <main
        className={clsx(classes.content)}
      >
        {/* <div className={classes.drawerHeader} /> */}
        <div className="content-wrappper" >
          {children}
        </div>
        <Footer/>
      </main>
    </div>
  );
}

const NavBar = ({open,setOpen}) => {
  const [closeMenu, setCloseMenu] = React.useState(false);

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
          : <Menu label={route?.children[0]?.name}  close={closeMenu} setCloseMenu={setCloseMenu}>
            {route.children?.slice(1)?.map((res)=>( 
              <Link  to={res.path} key={res.path}>
                <MenuItem onClick={()=>setCloseMenu(true)}>{res.name}</MenuItem>
              </Link>))}        
          </Menu>
      ))}  
    </>
  }

  return (
    <div className={classes.root}>
      <AppBar   
        position="relative"
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
        <List >     
          {renderNavLinks([...mainNav,...topNav])}
        </List>
      </Drawer>
    </div>
  );
};



const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} >
          <Card >
            <CardContent>
              <Typography align="center"  variant="h6" gutterBottom>
                Quick Links             
              </Typography>
              <Typography  align="center" variant="body1" component="p">
                <p><Link to="/">Home</Link></p>
                <p><Link to="/">About Us</Link></p>
                <p><Link to="/">Admissions</Link></p>
                <p><Link to="/">Programs</Link></p>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Card >
            <CardContent>
              <Typography align="center"  variant="h6" gutterBottom>
               Location
              </Typography>
              <Typography  align="center" variant="body1" component="p">
                Victoria Tower, Plot 1-13 Jinja Road
                P.O.Box 30866, Kampala Uganda
              </Typography>
              <Typography align="center"  variant="h6" gutterBottom>
                Connect with us
              </Typography>
              <Typography  align="center" variant="body1" >
                <a href="https://www.facebook.com/VUKampala"><FacebookIcon/> </a>
                <a href="https://twitter.com/VUKampala"><TwitterIcon/></a>
                <a href="https://www.instagram.com/victoriauniversity_kampala/"><InstagramIcon/></a>
                <a href="https://www.linkedin.com/company/victoria-university-kampala/"><LinkedInIcon/></a>
                <a href="https://www.youtube.com/channel/UC_4EzcvGVtnqjvr4At_r7PQ"><YouTubeIcon/></a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Card >
            <CardContent>
              <Typography align="center"  variant="h6" gutterBottom>
              Get Intouch
              </Typography>
              <Typography  align="center" variant="body1" component="p">
                <div><PhoneIcon/><span>(+256) 200405433</span></div>
                <div><PhoneIcon/><span> (+256) 759 996 130</span></div>
                <div><WhatsAppIcon/><span> (+256) 700 300 088</span></div>
                <div><EmailIcon/><span> admissions@vu.ac.ug</span></div>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div  className="copyright" style={{}}>
        <Typography  align="center" variant="body1" component="p">
©2021 Victoria University, Kampala, Uganda.
Victoria University is part of the Ruparelia Group of Companies.
        </Typography>
      </div>
    </div>
  );
}

