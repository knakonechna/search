import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  classes: {
    container: string;
  };
}
const Layout = ({ children, classes }: LayoutProps): JSX.Element => (
  <Grid
    container
    className={classes.container}
    direction="column"
    justify="flex-start"
  >
    {children}
  </Grid>
);

const styles = ({ breakpoints }) =>
  createStyles({
    container: {
      padding: '41px 19px',
      margin: 'auto',
      minHeight: '100vh',
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
