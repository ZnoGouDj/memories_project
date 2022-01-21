import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

import memories from './images/memories.png';

const App = () => {
  return (
    <div>
      <Container maxwidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">
            Memories
          </Typography>
          <img src={memories} alt="memories" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default App;
