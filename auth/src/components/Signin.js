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
      style={{ minHeight: window.innerHeight - 80 }}
    >
      <Grid item xs={12} md={6} lg={4}>
        <Card style={{ marginTop: 80 }}>
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
                  label="User Id"
                  name="email"
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

                <Button
                  sx={{ mt: "1rem" }}
                  fullWidth
                  variant="contained"
                  onClick={handleSignin}
                >
                  Sign In
                </Button>
              </form>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
