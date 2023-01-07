import React from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff" align="center">
      {`Copyright © ${new Date().getFullYear()} ADCB. All rights reserved.`}
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
    // borderTop: `1px solid`,
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
      <Box maxWidth="maxWidthXl" sx={{marginTop: "64px"}}>
        <Container maxWidth="maxWidthXl" component="main" sx={{padding: "0 !important"}}>
          <Grid 
            container 
            sx={{
              minHeight:(window.innerHeight - 64),
              backgroundColor: "#e4e4e4 !important"
            }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            > 
                
            <Grid item xs={10}>
              {/* Hero unit */}
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
              {/* End hero unit */}
            </Grid>
            
          </Grid>

            
            
        </Container>
      {/* Footer */}
      <Container maxWidth="maxWidthXl" component="footer" sx={{padding: "0 !important", backgroundColor: "#cd2026"}}>
        <Grid container 
        spacing={4}
        sx={{
          minHeight: window.innerHeight - 84,
          width: "100% !important",
          margin: "0 !important"
        }}
        justify="space-evenly"
        >
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography 
                variant="h6" 
                color="#ffffff" 
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
                      color="#ffffff"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright />
      </Container>
      {/* End footer */}
      </Box>
    </React.Fragment>
  );
}
