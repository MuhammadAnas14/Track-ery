import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  signUpInput: {
    margin: theme.spacing(0.3, 3),
    fontFamily: 'Montserrat',
  },
  signUpButton: {
    margin: theme.spacing(0.4, 7),
    height: theme.spacing(2.5),
    fontFamily: 'Montserrat',
   },
   input: {
    '&::placeholder': {
      color: '#fff'
    },
  },
  // ,
  // signUpLinks: {
  //   textAlign: 'center',
  //   margin: theme.spacing(0.5, 0)
  // }
}));

export default useStyles;
