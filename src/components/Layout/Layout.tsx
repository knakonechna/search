import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  classes: {
    container: string;
  };
}
const Layout = ({ children, classes }: LayoutProps): JSX.Element => (
  <Grid container className={classes.container} direction="column">
    {children}
  </Grid>
);

const styles = ({ breakpoints }) => ({
  container: {
    padding: '41px 19px',
    margin: 'auto',
    [breakpoints.up('md')]: {
      padding: '40px 20px',
      maxWidth: '1024px',
    },
    [breakpoints.up('lg')]: {
      padding: '40px',
      maxWidth: '1440px',
    },
  },
});

export default withStyles(styles)(Layout);
