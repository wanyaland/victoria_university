import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'

import HeaderImage from '../../components/headerImage'
import nursing from '../../assets/images/whyvu/nursing.jpg'
import { whyVuData } from '../home/data'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& .container': {
      padding:20,
      '& .container-header': {

        margin: '2rem',
      },
      ' & .card': {
        '& .whyvu-title': {
          display: 'flex',
          alignItems: 'center',
          color: theme.palette.primary.dark,
          marginBottom: '1rem',
        },
        '& .whyvu-details': {
          fontSize: 15,
        },
      },
    },
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(3),
    marginRight: '1rem',
    fontSize: '1rem',
    backgroundColor: 'rgba(232,112,146,1)',

    
  }
}))

export default function WhyVU() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HeaderImage title='Why VU'  url={nursing}/>
      <div className='container'>
        <Typography variant='subtitle1' gutterBottom className='container-header'>
          Victoria University is one of Uganda’s most popular universities, receiving more undergraduate applicants every year. Here are a few reasons why we’re the right the choice for Uganda’s brightest and best.
        </Typography>
        <Grid container spacing={2} className='grid'>
          {whyVuData.map((item, i) => (
            <Grid item key={item.title} xs={12} sm={6}>
              <Card className='card' >
                <CardContent>
                  <Typography
                    className='whyvu-title'
                    variant='h6'
                    component='p'
                  >
                    <Avatar aria-label='index' className={classes.avatar}>
                      {i + 1}
                    </Avatar>
                    {item.title}
                  </Typography>
                  <Typography
                    className='whyvu-details'
                    variant='body2'
                    component='p'
                  >
                    {item.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}
