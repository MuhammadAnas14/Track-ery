import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // root
  mapRoot: {
    padding: theme.spacing(2),
    height: '100%',
    width: '100%',
    display: 'grid',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      gridTemplateRows: 'auto 1fr',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '6fr 5fr',
      gridGap: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '4fr 6fr',
    },
  },
  // left side on big device
  locationSettings: {
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateRows: 'auto auto 1fr',
      height: '100%',
      overflowX: 'hidden',
      padding: '0 0.3rem',
    },
  },
  // map
  googleMap: {
    width: '100%',
    height: '100%',
    display: 'flex',
    // justifyContent: 'center',
    overflowY: 'hidden',
    borderRadius: theme.shape.borderRadius,
  },

  // location auto complete
  locationSelection: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '30% 70%',
    alignItems: 'center',
    marginBottom: theme.spacing(0.5),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(1),
      
    },
  },
  locationBtnGroup: {
    display: 'flex',
    justifyContent: 'center',
    paddingRight: theme.spacing(0.5),
    
  },
  locationFilterAutoComplete: {
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(0.5),
      color: 'white'
    },
  },

  // location filter section
  distanceSlider: {
    paddingLeft: theme.spacing(0.3),
    paddingRight: theme.spacing(0.3),
    color:'white',
  },
  sliderTitle: {
    display: 'flex',
    marginBottom: theme.spacing(-0.5),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(0),
      color:'white',
    },
  },
  sliderTitleCaption: {
    paddingLeft: theme.spacing(0.5),
    color:'white',
  },
  sliderSearchOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(0.5),
    marginTop: theme.spacing(-1),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(1),
      color:'white',
    },
  },

  // map markers
  centerMarker: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  },
  markerDetail: {
    position: 'absolute',
    transform: 'translate(-50%, -140%)',
    background: '#414141',
    border: '1px solid #414141',
    boxShadow: '0 0 1px 1px #000',
    borderRadius: '3px',
    width: '14rem',
    fontSize: '0.7rem',
    color: 'white',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 'calc(50% - 6px)',
      width: 0,
      height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: '6px solid white',
    },
  },
  markerName: {
    fontSize: '1rem',
    textAlign: 'center',
  },
  markerRatingRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerRatingStar: {
    fontSize: '1rem',
  },
  markerPrice: {
    textAlign: 'center',
  },

  // detail modal
  detailModalBackDrop: {
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 1,
      background: 'white',
      opacity: '0.5',
      transition: 'opacity 0.3s',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  detailModalWrapper: {
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '100%',
      position: 'relative',
    },
  },
  detailModalRoot: {
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      top: '20%',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2,
      background: theme.palette.background.default,
      borderRadius: '5px',
      border: '1px solid black',
      transition: 'transform 0.5s',
      overflowY: 'scroll',
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: theme.shape.borderRadius,
      overflowY: 'scroll',
    },
  },
  detailModalCloseBtn: {
    [theme.breakpoints.down('sm')]: {
      position: 'sticky',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        background: '#ccc',
        cursor: 'pointer',
        borderRadius: '5px 5px 0 0',
      },
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  detailModalDial: {
    position: 'sticky',
    bottom: theme.spacing(1),
    marginLeft: '80%',
    zIndex: 1,
  },
  detailModalCard: {
    display: 'Grid',
    gridTemplateColumns: '35% 65%',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  cardDescriptions: {
    width: '100%',
    padding: theme.spacing(0.5),
    borderBottom: '1px solid #414141',
    color: 'white',
  },

  //individualModal
  indModalRoot: {
    marginBottom: '-65px',
    height: '80%',
    width: '70%',
    background: '#313131',
    color:'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '3px 2px 7px 0px #000',
    borderRadius: '7px',
    overflowY: 'auto',
    position: 'relative',
    maxWidth: '25rem',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      maxHeight: theme.spacing(40),
      marginTop: theme.spacing(0),
    },
  },
  indModalCloseBtn: {
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
    zIndex: 1,
  },
  indModalDetails: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',  
  },
  indModalGalleryRoot: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    borderRadius: '5px 5px 0 0',
  },
  indThumb: {
    width: '100%',
    height: '100%',
    flexWrap: 'nowrap',
  },
  // title
  indTitle: {
    marginBottom: theme.spacing(0),
  },
  indName: {
    textAlign: 'center',
    display: '-webkit-box',
    lineClamp: 1,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    boxOrient: 'vertical',
  },
  listDetails: {
    display: '-webkit-box',
    lineClamp: 1,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    boxOrient: 'vertical',
    [theme.breakpoints.up('sm')]: {
      lineClamp: 2,
    },
  },
  nameClamp: {
    [theme.breakpoints.down('sm')]: {
      display: '-webkit-box',
      lineClamp: 3,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      boxOrient: 'vertical',
    },
  },
}));

export default useStyles;
