import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import building2 from '../../assets/images/carousel/Victoria University - Building Slider (3).jpeg'
import anthem from '../../assets/anthem.mp3'
import {  Button,Typography,Card,CardContent ,CardHeader,Grid,CardActions} from '@material-ui/core'
import { Link } from 'react-router-dom';
import HeaderImage from '../../components/headerImage';
import { objectives,values } from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%' ,
    '& .page-content':{
      [theme.breakpoints.down('sm')]: {
        '& .about-text,.leadership':{
          textAlign:'center',
          padding:'2rem 1rem',
        },
        '& .values':{
          '& .vu-card':{
            '& .MuiCardContent-root':{
              padding:'1rem 1rem',
              borderBottom: '1px solid grey'
            }
          },
        },
        '& .objectives':{
          padding:'1rem 1rem',
        },
        '& .anthem':{
          '& .MuiCardContent-root':{
            '& audio':{
              width:'90% !important'
            }
          }
        },
      }
    },
    '& .about-text':{
      backgroundColor:theme.white,
      padding:'2rem 5rem',
      '& p':{
        margin:'1rem 0'
      }
    },
    '& .values':{
      backgroundColor:theme.palette.primary.dark,
      '& .vu-card':{
        color:theme.grey.light,
        '& .MuiCardHeader-content':{
          textAlign:'center',
          color:theme.white,
        },
        '& .MuiCardContent-root':{
          padding:'2rem 5rem'
        }
      },
    },
    '& .objectives':{
      backgroundColor:theme.grey.main,
      padding:'2rem 5rem',
      '& .vu-card':{
        color:'black',
        '& .MuiCardHeader-content':{
          textAlign:'center',
          color:'black',
        }
      }
    },
    '& .leadership':{
      backgroundColor:theme.white,
      padding:'2rem 5rem'
    },
    '& .anthem':{
      backgroundColor:theme.white,   
      '& .MuiCardContent-root':{
        backgroundColor:theme.palette.secondary.dark,   
        color:theme.grey.light
      }
    },
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderImage title="Who We Are" subtitle="About Us" url={building2}/>
      <div  className="page-content">
        <Grid container  className="about-text" >
          <Grid item xs={12}>
            <Typography   variant="body1" gutterBottom component="p">
        Victoria University is one of the leading universities in Uganda and stands out as a center for academic excellence. It offers a fresh and intellectually stimulating environment that nurtures critical thinkers.
            </Typography>
            <Typography  variant="body1" component="p" gutterBottom >
              The University was opened in August 2013 and has the capacity, the facilities and determination to revitalize higher education in Uganda and in the region. We are committed to playing a leading role in bringing and developing high quality education, student centered learning opportunities based in standards of excellence that are unique, innovative and difficult to match.
            </Typography>
          </Grid>
          <Typography  variant="body1" component="p" gutterBottom >
        The University is centrally located in the heart of Kampala City and on the main public transportation routes coupled with ample parking space.
          </Typography>
          <Typography  variant="body1" component="p" gutterBottom >
Victoria University is part of the Ruparelia Group of Companies, which has a strong presence in the education sector in Uganda and has under its portfolio, Kampala Parents School and Delhi Public School International.
          </Typography>
          <Typography  variant="body1" component="p" gutterBottom >
Victoria University is a cosmopolitan university, accredited by the National Council for Higher Education with a wide range of nationalities. With a reputation as the best private, forward thinking and modern university in East Africa, Victoria University offers a vibrant and stimulating environment to further your studies. Our programmes are designed to meet all of your needs, study or research a subject in greater depth, or aiming to extend your knowledge and skills in pursuit of your career ambitions.</Typography>
  
        </Grid>
        <Grid item container className="values">
          {values.map((res)=>(
            <Grid item xs={12} md={4} key={res.title} >
              <Card   className="vu-card">
                <CardHeader
                  title={res.title}
                />
                <CardContent>
                  <Typography  align="center" variant="body1" component="p">
                    {res.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid item container className="objectives">
          {objectives.map((res)=>(
            <Grid item xs={12} md={6} key={res.title} >
              <Card   className="vu-card">
                <CardHeader
                  title={res.title}
                />
                <CardContent>
                  <Typography  align="center" variant="body1" component="p">
                    {res.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} className="leadership" >
          <Card   className="vu-card">
            <CardHeader
              title="Our Leadership"
              align="center"
            />
            <CardContent>
              <Typography   variant="body1" component="p">
                  Victoria University looks to lead by example in everything we do. Our aim is to set the standard as the world-class university of the future by combining knowledge, research, and innovation to create solutions that few institutions have the depth and breadth to achieve.
              </Typography>
            </CardContent>
            <CardActions style={{justifyContent:'center'}}> 
              <Link to="/">
                <Button size="small" variant="outlined" color="primary">
                University Council                </Button>
              </Link>
              <Link to="/">
                <Button size="small" variant="outlined" color="secondary">
                Board of Directors
                </Button>
              </Link>
            </CardActions>
          </Card>  
        </Grid>
        <Grid item xs={12} className="anthem" >
          <Card   className="vu-card">
            <CardHeader
              title="Victoria University Anthem"
              align="center"
            />
            <CardContent>
              <Typography align="center" variant="body1" style={{marginBottom:'1rem'}}>
                <audio controls style={{width:'50%'}}>
                  <source src={anthem} type="audio/ogg"/>
                  <source src={anthem} type="audio/mpeg"/>
Your browser does not support the audio element.
                </audio>              
              </Typography>
              <Typography  align="center" variant="body1" component="p">
              When you come to Victoria University,
              </Typography>
              <Typography align="center"  variant="body1" component="p">
              Its a thriving environment of many cultures  
              </Typography>
              <Typography align="center"  variant="body1" component="p">
              To share and support,to motivate one another        
              </Typography>
              <Typography  align="center" variant="body1" component="p" style={{marginBottom:'1.5rem'}}>
              Come prepared to learn, leave prepared to  succeed.              
              </Typography>
              <Typography align="center"  variant="h6" >
              Chorus   X2         
              </Typography>
              <Typography align="center" variant="body1" component="p">
             Victoria University is a tower of academic excellence              
              </Typography>
              <Typography align="center" variant="body1" component="p">
         Together we motivate and support Lord God bless our Victoria.             
              </Typography>
              <Typography align="center" variant="body1" component="p" style={{marginBottom:'1.5rem'}}>
        Lord God bless our Victoria.            
              </Typography>
              <Typography align="center" variant="body1" component="p">
             Our vision as you see is to nature talent in you.         
              </Typography>
              <Typography align="center" variant="body1" component="p">
                 Together we can change the World for the better,
              </Typography>
              <Typography align="center" variant="body1" component="p">
              We will light up the Nation empowering motivating        
              </Typography>
              <Typography align="center" variant="body1" component="p">
           Come prepared to learn leave prepared to succeed.        
              </Typography>
              <Typography align="center" variant="body1" component="p">
           Come prepared to learn leave prepared to succeed.        
              </Typography>

            </CardContent>
            {/* <CardActions style={{justifyContent:'center'}}> 
              <Link to="/">
                <Button size="small" variant="outlined" color="primary">
                University Council                </Button>
              </Link>
              <Link to="/">
                <Button size="small" variant="outlined" color="secondary">
                Board of Directors
                </Button>
              </Link>
            </CardActions> */}
          </Card>  
        </Grid>
      </div>
    </div>
  );
}

