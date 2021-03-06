export const styles = theme => ({
  cardGrid: {
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  layout: {
    width: 'auto',
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
});