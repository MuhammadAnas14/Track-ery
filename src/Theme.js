/*
  Global theme for Material Ui
*/
import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: { main: '#008080' },
    secondary: { main: '#df9191' },
    background: { default: '#212121' }
  },
  spacing: 20,
  typography: {
    fontSize: 15,
    color: "white"
    
  },
  overrides: {
    MuiInputLabel: {
      input: {
        marginLeft: 8,
        flex: 1,
        "& ::-webkit-input-placeholder": {
          color: "white !important"
        }
      }
    },
  },
  
});
