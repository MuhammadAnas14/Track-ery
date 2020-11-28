import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  homeRoot:{
    width: '100%',
    height:'100%',
    padding: theme.spacing(2)
  },
  homeTop:{
    width: '100%',
    height: '100%',
  },
  header:{
    fontSize: '30px',
    color: 'white',
    fontWeight:500,
    display: 'absolute',
    marginLeft:0,
    marginRight:0,
    textAlign: 'center',
    marginBottom: '15px',
  },
  topCard: {
    backgroundSize: '90%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '7px',
    transition: 'all 0.3s ease',
    position: 'relative',
    '&:hover': {
      boxShadow: theme.shadows[8],
      backgroundSize: '70%',
      cursor: 'pointer',
    },
    [theme.breakpoints.up('md')]: {
      height: theme.spacing(20)
    },
    [theme.breakpoints.up('lg')]: {
      height: theme.spacing(25)
    },
    [theme.breakpoints.up('xl')]: {
      height: theme.spacing(30)
    }
  }
}));

export default useStyles;
