import { createMuiTheme } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';

export const theme = createMuiTheme({
    palette: {
      primary: indigo,
      secondary: {
        main: '#2196f3',
      },
    },
    typography: { useNextVariants: true, textPrimary:  '#4e4d4d' },
  });