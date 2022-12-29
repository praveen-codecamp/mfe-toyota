import React from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(() => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: 1,
  },
  heroContent: {
    padding: 6,
  },
  footer: {
    borderTop: `1px solid`,
    marginTop: 8,
    paddingTop: 3,
    paddingBottom: 3,
  },
}));

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource',
    ],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={2}>        
        <Grid item xs={10}>
          {/* Hero unit */}
          <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Meet All of Your Banking And Financial Needs 
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              component="p"
            >
              Our internet banking portal provides personal banking services that gives you complete control over all your banking demands online.
            </Typography>
          </Container>
          {/* End hero unit */}
        </Grid>
      </Grid>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography 
                variant="h6" 
                color="textPrimary" 
                gutterBottom
              >
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link 
                      href="#" 
                      variant="subtitle1" 
                      color="textSecondary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
