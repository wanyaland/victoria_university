import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import building from '../assets/images/carousel/vu-front.jpeg'
import admissions from '../assets/images/carousel/admission-at-victoria-university.jpeg'
import succeeding from '../assets/images/carousel/succeeding-after-vu.jpeg'
import building2 from '../assets/images/carousel/Victoria University - Building Slider (3).jpeg'
import compLab from '../assets/images/carousel/Victoria University - Computer -Lab.jpeg'
import graduation from '../assets/images/carousel/victoria-university-5th-graduation-ceremony.jpeg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
    marginTop:'-3vh',
    '& .image-wrapper':{
      width:'100%',
      height:'82vh',
      '& img':{
        height:'100%',
        objectFit: 'cover',
        width: '100%'
      }
    },
  },
  carousel:{
    margin:'0 -10px'
  }



}));

export default function Home() {
  const classes = useStyles();
  var items = [
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
  return (
    <div className={classes.root}>
       <Carousel
       navButtonsAlwaysVisible={true}
       className={classes.carousel}
      indicatorContainerProps={{
        style: {
            marginTop: '-5vh',
            paddingBottom:'2rem'
        }

    }}
    navButtonsProps={{ 
      style: {
           backgroundColor: '#49494987',
      }
  }} 
    activeIndicatorIconButtonProps = {{
      style:{
        color:'#62A7DB'
      }
    }}
    indicatorIconButtonProps={{
      style:{
         color:'#1563b35e'
      }
    }}
  
       >
            {
              items.map( (item, i) => (
                <div key={i} className="image-wrapper">
                  <img src={item.url}/>
                </div> 
            ))
            }
        </Carousel>
      <p>home page</p>
    </div>
  );
}