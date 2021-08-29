import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import sponsors1 from '../../assets/img/sponsors1.png';
import sponsors2 from '../../assets/img/sponsors2.png';
import sponsors3 from '../../assets/img/sponsors3.png';
import sponsors4 from '../../assets/img/sponsors4.png';
import sponsors5 from '../../assets/img/sponsors5.png';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 6),
  },
  heroContentTitle: {
    // backgroundColor: theme.palette.background.paper,
    color: '#ffffff',
  },
  heroContentText: {
    // backgroundColor: theme.palette.background.paper,
    color: '#ffffff',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [1, 2, 3, 4, 5, 6];

export default function Contacts() {
  const classes = useStyles();

  return (
    <section className="album" id="album">
      <div className="album__bg section section__shadow-bottom">
        <React.Fragment>
          <CssBaseline />
          <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography className={classes.heroContentTitle} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Contacts layout
                </Typography>
                <Typography className={classes.heroContentText} variant="h5" align="left" color="textSecondary" paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br />
                  <br />
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
            <section className="partners" id="partners">
              <div className="partners__bg">
                <h2 className="partners__title">Our Partners</h2>

                <div className="partners__container container grid">
                  <div className="partners__content">
                    <img src={sponsors1} alt="" className="partners__img" />
                  </div>
                  <div className="partners__content">
                    <img src={sponsors2} alt="" className="partners__img" />
                  </div>
                  <div className="partners__content">
                    <img src={sponsors3} alt="" className="partners__img" />
                  </div>
                  <div className="partners__content">
                    <img src={sponsors4} alt="" className="partners__img" />
                  </div>
                  <div className="partners__content">
                    <img src={sponsors5} alt="" className="partners__img" />
                  </div>
                </div>
              </div>
            </section>
            </Container>
          </main>
        </React.Fragment>
      </div>
    </section>
  );
}