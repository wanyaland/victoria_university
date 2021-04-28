import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button,Typography,Card,CardContent ,CardMedia,Divider,Grid} from '@material-ui/core'
import building from '../../assets/images/carousel/vu-front.jpeg'
import admissions from '../../assets/images/carousel/admission-at-victoria-university.jpeg'
import succeeding from '../../assets/images/carousel/succeeding-after-vu.jpeg'
import building2 from '../../assets/images/carousel/Victoria University - Building Slider (3).jpeg'
import compLab from '../../assets/images/carousel/Victoria University - Computer -Lab.jpeg'
import graduation from '../../assets/images/carousel/victoria-university-5th-graduation-ceremony.jpeg'
import CarouselComponent from '../../components/carousel';
import { whyVuData, admissionsData,academicsData,testmonials,newsData ,events} from './data';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import adminAndAids from '../../assets/images/admissions.jpeg'
import Image from '../../components/Image'
import ReactPlayer from 'react-player'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    backgroundColor:theme.grey.light,
    // '& .page-content':{
    '& .main-content':{
      padding:'1rem',
      backgroundColor:'white',
    },
    '& .side-content':{
      width:'100%',
      marginLeft:'3%',
      padding:'0 1rem',

      '& .events':{
        marginTop:'6%',
        paddingTop:'1rem',
   
        width:'100%',
        backgroundColor:'white',

      },
      '& .tweets-wrapper':{
        marginTop:'6%',
        paddingTop:'1rem',
        backgroundColor:'white',
        width:'100%',
        '& div':{
          width:'100%',
          margin:'0 auto',
          '& iframe':{
            width:'100%',
          }
        }
      },
      [theme.breakpoints.down('sm')]: {
        padding:0,
        width:'100%',
        marginLeft:0,
      },
    },

    '& .header':{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      marginTop:'7rem',
      marginBottom:'3rem',
      [theme.breakpoints.down('xs')]: {
        marginTop:'2rem',
        marginBottom:'2rem', 
      },
      '& h5':{
        backgroundColor: theme.palette.primary.main ,
        width: '35%',
        margin: '0 auto',
        color: 'white',
        borderRadius: '5px',
        padding: '10px',
        [theme.breakpoints.down('xs')]: {
          width: '80%',
        },
      },
      '& svg':{
        color: theme.palette.primary.main,
        fontSize: '3rem',
        marginTop: '-3vh',
        [theme.breakpoints.down('xs')]: {
          fontSize: '4rem',
          marginTop: '-5vh',

        },
      }
    },
    '& .testmonials':{
      marginTop:'7rem',
      color:theme.white,
      [theme.breakpoints.down('xs')]: {
        marginTop:'2rem',
      },
      '&  .header':{
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '5px 0 0 5px',
        margin:0,
        '& svg':{
          display:'none',
        },

        [theme.breakpoints.down('xs')]: { 
          '& svg':{
            display:'block'
          },
          borderRadius: 0, 
          backgroundColor: theme.white,

          '& h4':{
            backgroundColor: theme.palette.primary.main,
  
            [theme.breakpoints.down('xs')]: {
              width: '80%',
              fontSize: '1.5rem',
              margin: '0 auto',
              color: 'white',
              borderRadius: '5px',
              padding: '10px', 
            }
          },
     
        },
      },
      '& .content':{
        padding:'2%',
        background: theme.palette.primary.dark,
        borderRadius: '0 5px 5px 0',
        [theme.breakpoints.down('xs')]: {
          borderRadius: 0, 
        }, 
        '& .carousel-wrapper':{
          margin:0,
          minHeight:'200px'
        },
        '& .fa':{
          fontSize:'2rem'
        },
        '& .text':{
          paddingLeft:'8%',
          width:'100%',
          display:'flex',
          flexDirection:'column',
        }
      }
    },
    '& .academics':{

      '& .MuiCard-root':{
        backgroundSize:'contain',
        height:'100%',
      },
      '& .card-content':{
        position:'relative',
        backgroundColor:'#080808b8',
        color:theme.white,
        height:'400px',
        [theme.breakpoints.down('sm')]: {
          height:'300px',
        },
        '& p':{
          position: 'absolute',
          top: '40%',
        },
        '& span > i':{
          position:'absolute',
          fontSize:'3rem',
          top:'80%',
          left:'45%',
          transition: 'transform 250ms',
          color:theme.palette.primary.main,
        },   
      },
      '& .card-content:hover':{
        border:`3px solid ${theme.palette.secondary.main}`,
        '& span > i':{
          color:theme.palette.secondary.main,
          animation: '$slide 1s infinite alternate'
        },   
      }
    },
    '& .admin':{
      '& .MuiPaper-elevation1':{
        boxShadow:'none'
      },
      '& .card-content':{
        flexDirection:'row',
        display:'flex',
        flexWrap:'wrap',
        width:'100%',
        height:'45vh',
        padding: 0,
        [theme.breakpoints.down('sm')]: {
          height:'auto',
        },
        '& .img-wrapper':{
          width:'40%',
          [theme.breakpoints.down('sm')]: {
            width:'100%',
          },
        },
        '& .text':{
          width:'60%',
          display:'flex',
          color:theme.white,
          flexDirection:'column',
          backgroundColor:theme.palette.primary.dark,
          justifyContent:'center',
          alignItems:'center',
          height:'100%',
          [theme.breakpoints.down('sm')]: {
            width:'100%',
          },
  
          '& p':{
            lineHeight: 2,
            padding: '1% 3%',
          },
          '& a':{
            fontSize:'3rem',
            color:theme.white,
            transition: 'transform 250ms'
          },
          '& a:hover':{
            color:theme.palette.primary.main,
            transform: 'translateX(10px)'
          },  
        },
      },      
    },
    '& .why-vu':{
      '& .header':{
        marginTop:0,
      },
      '& .MuiCard-root':{
        height:'100%',
        '& h6':{
          color:theme.palette.primary.dark
        }
      } ,
      '& .MuiPaper-elevation1':{
        boxShadow:'none'
      },
     
    },
    '& .news':{
      backgroundColor:'white',
      padding:'10px',
      '& .MuiCardContent-root':{
        padding:0
      },
      '& .img-wrapper':{
        height:'250px'
      }
    },
    '& .welcome-video':{
      marginTop:'5rem',
      '& div':{
        width: 'auto !important',
        height: '500px !important'
      }

    },
    '& .overlay':{
      position: 'absolute',
      width: '40%',
      minHeight: '25%',
      backgroundColor: 'rgb(0 0 0 / 60%)',
      top: '37%',
      left: '30%',
      color:theme.white,
      borderRadius: '5px',
      padding: '10px',
      '& .buttons':{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      [theme.breakpoints.down('sm')]: {
        width: '50%'
      },
      [theme.breakpoints.down('xs')]: {
        top: '30%',
        left: '25%',
        '& .buttons':{
          flexDirection: 'column',
          '& button':{
            margin:'5px 0'
          }
        },
      },
    },
    '& .MuiPaper-elevation1':{
      boxShadow:'none'
    },
    '& .link':{
      margin:'0 auto',
      fontSize:'3rem',
      transition: 'transform 250ms'
    },
    '& .link:hover':{
      color:theme.palette.secondary.dark,
      transform: 'translateX(10px)'
    },
  },
  '@keyframes slide': {
    from: {  transform: 'translateX(0px)'},
    to: { transform: 'translateX(10px)'  }
  }
}));

const images  = [
  {
    url: building,
  },
  {
    url: admissions,
  },
  {
    url: succeeding,
  },
  {
    url: building2,
  },
  {
    url: compLab,
  },
  {
    url: graduation,
  },
]
 
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{position:'relative'}}>
        <CarouselComponent className="header-carousel" >
          {
            images.map( (item, i) => (
              <div key={i} className="image-wrapper">
                <img src={item.url}/>
              </div> 
            ))
          }
        </CarouselComponent>
        <div className="overlay">
          <Typography align="center" variant="h4" gutterBottom>
                Enroll Now
          </Typography>
          <Typography align="center" variant="h5" gutterBottom>
                Feb - March 2021 Intake    
          </Typography>
          <div className="buttons">
            <Button variant="contained" color="secondary">
                Apply Now
            </Button>
            <Button variant="contained" color="secondary">
                   Enquire Now
            </Button>
          </div>
        </div>
      </div> 
      <div style={{ padding: ' 16px' }}>
        <Grid container spacing={2} > 
          <Grid item md={9} > 
            <div className="main-content">
              <WhyVU/>
              <Admisions/>
              <Academics/>
              <Testmonials/>
              {/* <News/> */}
              <WelcomeVideo/>
            </div>
          </Grid>
          <Grid item md={3}  > 
            <div className="side-content">
              <News/>
              <div className="events">
                <Typography align="center" variant="h5" gutterBottom>
                Upcoming Events         
                </Typography>
                {events?.slice(0,3)?.map((res)=>(
                  <>
                    <Card key={res.title}>
                      <CardContent>
                        <Typography align="center"  color="primary" style={{}} variant="h6" gutterBottom>
                          {res.title}
                        </Typography>
                        <Typography  align="center"variant="subtitle1" gutterBottom>
                          {res.date}
                        </Typography>
                        <Typography  align="center" variant="body2" component="p">
                          {res.details.substr(0, 100)}...
                        </Typography>
                      </CardContent>
                    </Card>
                    <Divider/> 
                  </>
                ))}
                <Typography  align="center" variant="body2" >
                  <Link className='link' to="/"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></Link>
                </Typography>
              </div>
              <div className="tweets-wrapper">
                <TwitterTimelineEmbed sourceType="profile"   screenName="VUKampala" options={{height:600}}/>
              </div>     
            </div>        
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const WhyVU = ()=>{
  
  return <div className="why-vu">
    
    <div className="header">
      <Typography align="center" variant="h5" gutterBottom>
         Why Victoria University
      </Typography>
      <ArrowDropDownIcon />
    </div>
    <Grid container spacing={2}>
      {whyVuData?.slice(0,3)?.map((res)=>(
        <Grid item xs={12} sm={4} key={res.title}>
          <Card >
            <CardContent>
              <Typography align="center"  variant="h6" gutterBottom>
                {res.title}
              </Typography>
              <Typography  align="center" variant="body1" component="p">
                {res.details.substr(0, 130)}...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Link className='link' to="/"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></Link>

    </Grid>
  </div>
}

const Admisions = ()=>{
  
  return <div className="admin">
    <div className="header">
      <Typography align="center" variant="h5" gutterBottom>
         Admitions & Aid
      </Typography>
      <ArrowDropDownIcon />
    </div>  
    <Card >
      <CardContent 
        className='card-content'
      >        
        <Image url={adminAndAids}  />
        <div className="text">
          <Typography  align="center" variant="body1" component="p">
            {admissionsData.intro}
          </Typography>
          <Link to="/"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></Link>
        </div>      
      </CardContent>   
    </Card>
  </div>
}

const Academics = ()=>{
  return <div className="academics">
    <div className="header">
      <Typography align="center" variant="h5" gutterBottom>
          Academics
      </Typography>
      <ArrowDropDownIcon />
    </div>  
    <Grid container spacing={2}>
      {academicsData.map((res)=>(
        <Grid item xs={12} sm={6} md={3} key={res.title}>
          <Link to={res.path}>
            <Card style={{backgroundImage:res.imageUrl}} >
              <CardContent   className='card-content'>
                <Typography  align="center"  variant="h5" gutterBottom>
                  {res.title}
                </Typography>
                <Typography  align="center" variant="body1" component="p">
                  {res.details}
                </Typography>
                <span><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>
              </CardContent>
            </Card>
          </Link>  
        </Grid>
      ))}
    </Grid>
  </div>
}
const Testmonials = ()=>{
  return <div className="testmonials">
     
    <Grid container >
      <Grid  className="header" item xs={12} sm={6} >
        <Typography align="center" variant="h4" gutterBottom>
       What Our Students Say 
        </Typography>
        <ArrowDropDownIcon />

      </Grid>
      <Grid item  xs={12} sm={6} className="content"  >
        <CarouselComponent 
          navButtonsAlwaysVisible={false}
          className="carousel-wrapper"
          indicatorContainerProps={{
            style: {
              marginTop: '0',
              paddingBottom:'0'
            }
          }}
        >
          {
            testmonials.map((item)=>(
              <>
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                <div className="text">
                  <Typography   variant="body1" component="p" gutterBottom>
                    {item.details}
                  </Typography>
                  <Typography  style={{marginTop:'1%'}} variant="body2" >
                    {`~ ${item.name}, ${item.course}`}
                  </Typography>
                </div>
              </>
            ))
          }
        </CarouselComponent >  
      </Grid>
    </Grid>
  </div>
}

const News = ()=>{
  
  return <div className="news"> 
    <Typography align="center" variant="h6" gutterBottom>
         News 
    </Typography>  
    {/* <div className="header">
      <Typography align="center" variant="h5" gutterBottom>
         News 
      </Typography>
      <ArrowDropDownIcon />
    </div> */}
    <Grid  container spacing={2}>
      {newsData?.slice(0,3)?.map((res)=>(
        <Grid item xs={12} key={res.title}>
          <Card >
            <CardContent>
              <Image url={res.imageUrl}/>
              <Typography align="center"  variant="h6" gutterBottom>
                {res.title}
              </Typography>
              <Typography  align="center" variant="body2" component="p">
                {res.details.substr(0, 80)}...
              </Typography>
            </CardContent>
          </Card>
          <Divider style={{margin:'10px 0'}}/>
        </Grid>
      ))}
      <Link className='link' to="/"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></Link>
    </Grid>
  </div>
}

const WelcomeVideo = ()=>{
  return <div className="welcome-video">   
    <ReactPlayer url='https://youtu.be/tkSJ5bP1nu0' controls={true}/>
  </div>
}
