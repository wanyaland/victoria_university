import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageComponent from '../../components/ImageComponent'
import building2 from '../../assets/images/carousel/Victoria University - Building Slider (3).jpeg'
import { Paper, Button,Typography,Card,CardContent ,CardMedia,Divider,Grid} from '@material-ui/core'
import { Link } from 'react-router-dom';
import HeaderImage from '../../components/headerImage';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%' 
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderImage title="Who We Are" subtitle="About Us" url={building2}/>
      <div  className="page-content">
        <Grid container style={{backgroundColor:'white', padding:'50px'}} >
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
          <Grid item container>
            <Grid item>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

