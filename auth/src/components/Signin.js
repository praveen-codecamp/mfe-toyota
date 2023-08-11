import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © ${new Date().getFullYear()} Assurant. All rights reserved.`}
    </Typography>
  );
}

export default function SignIn({ onSignIn }) {
  const [email, setEmail] = useState("");
  const handleSignin = () => {
    onSignIn({ email: email });
  };
  return (
    <Grid
      container
      justifyContent="center"
      className="login-wrapper"
      style={{ marginTop: 100, minHeight: window.innerHeight - 100 }}
    >
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardContent>
            <Grid container justifyContent={"center"}>
              <Grid
                item
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                <Avatar style={{ textAlign: "center", margin: "auto" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
              </Grid>

              <form onSubmit={(e) => e.preventDefault()} noValidate>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={
                    <Checkbox size="small" value="remember" color="primary" />
                  }
                  label="Remember me"
                />
                <Button fullWidth variant="contained" onClick={handleSignin}>
                  Sign In
                </Button>
                <Grid container style={{ marginTop: 30 }}>
                  <Grid item>
                    <Typography variant="body2">
                      <Link to="/auth/signup">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </CardContent>
        </Card>

        <Box mt={8}>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}
