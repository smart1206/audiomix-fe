import Layout from "components/layout/Layout";

import { Container, Grid, Link, Button, Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  img: {
    width: "100%",
    height: "auto",
    boxShadow: "0px 2px 20px rgba(0,0,0,0.4)",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Layout
      // type your page title and page description.
      title="Template - Next.js and Material-UI with Header and Footer"
      description="This is a Template using Next.js and Material-UI with Header and Footer."
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={12}>
            <form className={classes.root} noValidate={false} autoComplete="off">
              <Box mb={2}>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
              </Box>
              <Box mb={2}>
                <TextField type="password" id="outlined-basic" label="Password" variant="outlined" />
              </Box>
              <Button variant="contained" color="primary">
                Login(Primary Button)
              </Button>
              <Box display='flex' mt={3}>
                <Link href="#" underline='always' style={{ color: '#2d5b99', marginRight: '16px' }} onClick={(e) => e.preventDefault()}>
                  Register an account
                </Link>
                <Link href="#" underline='always' onClick={(e) => e.preventDefault()}>
                  Forgot your password?
                </Link>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default About;
