import Home from './pages/Home'

const home = {
  path:'/',
  name:'Home',
  component:Home
}

export const about = [
  {
    path:'/about',
    name:'Who we Are',
    component:Home
  },
  {
    path:'/about/uni-council',
    name:'University Council',
    component:Home

  },
  {
    path:'/about/virtual-tour',
    name:'Virtual Tour',
    component:Home

  },
  {
    path:'/about/partners',
    name:'Partners and collaborators',
    component:Home

  },
  {
    path:'/about/partners',
    name:'Partners and collaborators',
    component:Home

  },
  {
    path:'/about/contactus',
    name:'Contact Us',
    component:Home

  },

]

const paths = [home,...about]

export default paths 