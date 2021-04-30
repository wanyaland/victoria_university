import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageComponent from './ImageComponent'
import { Button,Typography,Grid} from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    position:'relative',
    height:'300px',
    '& .overlay':{
      alignItems:'center',       
      position:'absolute',
      top:0,
      left:0,
      height:'100%',
      width:'100%',
      backgroundColor:'rgb(0 0 0 / 58%)',
      '& .MuiButton-contained':{
        color:theme.palette.primary.dark,
        backgroundColor:theme.grey.light
      },
      '& .MuiButton-contained:hover':{
        color:theme.palette.secondary.main,
      }
    }
  }
}));

export default function HeaderImage({title, subtitle,url}) {
  const classes = useStyles();

  return (
    <div className= {`${classes.root } header-image`}>
      <ImageComponent url={url}/>
      <Grid container className="overlay">
        <Grid  item xs={12} md={4}> 
          <Typography align="center"  color="primary" style={{color:'white'}} variant="h4" gutterBottom>
            <Link to="/">
              <Button variant="contained" >
                Apply Now
              </Button>
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography align="center"  color="primary" style={{color:'white'}} variant="h4" gutterBottom>
            {subtitle}
          </Typography>
          <Typography  align="center" style={{color:'white'}}variant="h3"  gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}  md={4}>
          <Link to="/">
            <Typography align="center"  color="primary" style={{color:'white'}} variant="h4" gutterBottom>
              <Button variant="contained" >
                   Enquire Now
              </Button> 
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

