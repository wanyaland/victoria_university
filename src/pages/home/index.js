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
import { whyVuData, admissionsData,academicsData,testmonials,newsData ,events,howVuWorks,offers} from './data';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import adminAndAids from '../../assets/images/admissions.jpeg'
import Image from '../../components/ImageComponent'
import ReactPlayer from 'react-player'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import CountUp from 'react-countup';
import ImageComponent from '../../components/ImageComponent';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
   
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
      padding:'0 7rem',
      '& .header':{
        marginTop:0,
      },
      '& .MuiCard-root':{
        height:'100%',
        '& h6':{
          // color:theme.palette.primary.dark
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
      '& .video':{
        width: 'auto !important',
      },
      '& .tweets-wrapper':{
        height:'100%',
        '& div':{
          height:'100%',
          '& iframe':{
            width:'100%',
            height:'100% !important'
          }
        }
      },
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
    '& .offers':{
      '& .icon':{
        height:'150px',
        width:'80%',
        margin:'0 auto',
        border: `15px solid ${theme.palette.primary.dark}`,
        borderRadius: '50px',
        '& .img-wrapper':{
          padding:'10px',
          '& img':{
            objectFit:'contain'
          }
        },
      },
      '& a':{
        color:theme.palette.primary.dark
      },
      '& a:hover':{
        color:theme.palette.secondary.dark
      }
   
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
    '& .page-content':{
      [theme.breakpoints.down('md')]: {
        '& .why-vu':{
          padding:'0',
        },
      },
      [theme.breakpoints.down('sm')]: {
        '& .welcome-video':{
          marginTop:'3rem',
          '& .tweets-wrapper':{
            marginTop:'1%',
            // height:'500px',
            '& div':{
              // height:'100%',
              '& iframe':{
                // width:'100%',
                height:'300px !important'
              }
            }
          },
        },
      }
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
      <div className="page-content">
        <WhyVU/>
        <Academics/>
        <Offers />

        {/* <Admisions/> */}
        <Testmonials/>
        <News title="News"/>
        <News title ="Upcomming Events"/>
        <WelcomeVideo/>
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
    <Grid container spacing={2} >
      {howVuWorks.map((res)=>(
        <Grid item xs={12} sm={4} key={res.title}>
          <Card >
            <CardContent>
              <Typography  align="center" variant="h6"  color="secondary">
           
  more than
              </Typography>
              <Typography  align="center" variant="h1" color="primary">
                <CountUp
                  start={0}
                  end={res.count}
                  duration={5}
                  suffix="%"

                />
              </Typography>
              <Typography  align="center" variant="body1" component="p">
                {res.details}
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
         Admissions & Aid
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

const News = ({title})=>{
  
  return <div className="news"> 
    <div className="header">
      <Typography align="center" variant="h5" gutterBottom>
        {title} 
      </Typography>
      <ArrowDropDownIcon />
    </div>
    <Grid  container spacing={2}>
      {newsData?.slice(0,3)?.map((res)=>(
        <Grid item xs={12} sm={4}  key={res.title}>
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
        </Grid>
      ))}
      <Link className='link' to="/"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></Link>
    </Grid>
  </div>
}

const WelcomeVideo = ()=>{
  return <Grid  container spacing={2} className="welcome-video">
    <Grid  item xs={12} sm={8} >
      <ReactPlayer url='https://youtu.be/tkSJ5bP1nu0' controls={true} className="video"/>
    </Grid>
    <Grid  item xs={12} sm={4} >
      <div className="tweets-wrapper">
        <TwitterTimelineEmbed sourceType="profile"   screenName="VUKampala" />
      </div>
    </Grid>
  </Grid>
}

const Offers = ()=>{
  
  return <div className="offers">
    
    <div className="header">
      <Typography align="center" variant="h5" gutterBottom>
         What Vu Offers
      </Typography>
      <ArrowDropDownIcon />
    </div>
    <Grid container spacing={2} >
      {offers.map((res)=>(
        <Grid item xs={12} sm={6} lg={3} key={res.title}>
          <Card >       
            <CardContent>
              <Typography  align="center" variant="h5"  className="icon">
                <ImageComponent url={res.imageUrl}/>
              </Typography>
              <Typography  align="center" variant="h5">
                <PlayForWorkIcon style={{fontSize:'3rem', color:'#D9232B' }} />
              </Typography>
              <Typography  align="center" variant="h4" >
                {res.title}
              </Typography>
              <Typography  align="center" variant="body1" component="p">
                {res.details.map((e)=><div key={e.title}><Link to={e.path} >{e.title}</Link></div>)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
}
