import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
    '& .image-wrapper':{
      width:'100%',
      height:'85vh',
      '& img':{
        height:'100%',
        objectFit: 'cover',
        width: '100%'
      }
    },
  }
}));

export default function CarouselComponent({activeIndicatorIconButtonProps,indicatorIconButtonProps,navButtonsAlwaysVisible,children,className,indicatorContainerProps}) {
  const classes = useStyles();

  return (
    <Carousel
      autoPlay={true}
      navButtonsAlwaysVisible={navButtonsAlwaysVisible}
      className={`${classes.root} ${className}`}
      indicatorContainerProps={indicatorContainerProps}
      navButtonsProps={{ 
        style: {
          backgroundColor: '#49494987',
        }
      }} 
      activeIndicatorIconButtonProps = {activeIndicatorIconButtonProps}
      indicatorIconButtonProps={indicatorIconButtonProps}
    >
      {children}
    </Carousel>
  );
}

CarouselComponent.defaultProps = {
  activeIndicatorIconButtonProps:{
    style:{
      color:'#62A7DB'
    }
  },
  indicatorIconButtonProps:{
    style:{
      color:'#1563b35e'
    }
  },
  navButtonsAlwaysVisible:true,
  indicatorContainerProps:{
    style: {
      marginTop: '-5vh',
      paddingBottom:'2rem',
    }
  }
}
