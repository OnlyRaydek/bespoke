import React, { } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

import greenLivingRoom from '../../../assets/img/about.jpg';

import useStyles from './styles';

export default function About() {
  const classes = useStyles();

  return (
    <section className="about" id="about">
      <div className="about__bg section">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md" component="main" className={classes.typography}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
              Quickly build an effective pricing table for your potential customers with this layout.
              It&apos;s built with default Material-UI components with little customization.
            </Typography>
          </Container>

          <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="center" justifyContent="center">
              <Grid item xs={12} sm={6} md={10}>
                {/* <div className="home__info-overlay"> */}
                  <img src={greenLivingRoom} alt=""/>
                {/* </div> */}
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
      </div>
    </section>
  );
}
