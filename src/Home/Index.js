import {
  Box, Grid, Typography, Avatar
} from "@material-ui/core";

import listVideoJSON from './ListVideo.json';

import { join } from 'path';

/**
 * @param {String} text 
 * @param {Number} maxLength 
 */
function showLess(text, maxLength) {
  return (text.length > maxLength) ? `${text.substring(0, maxLength)}...` : text;
}

function Home() {
  return (
    <Box padding={4}>
      <Typography component="h2" variant="h5" color="textPrimary" style={{ fontWeight: 'bold' }}>Recomendados</Typography>
      <Grid container spacing={4}>
        {listVideoJSON.video.map((item, index) => (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <img
                style={{ width: '100%' }}
                alt={item.title}
                src={join('images', item.thumb)}
              />
              <Box>
                <Typography
                  style={{ fontWeight: 600 }}
                  gutterBottom
                  variant='body1'
                  color='textPrimary'
                >
                  {showLess(item.title, 60)}
                </Typography>
                <Box display="flex" flexDirection="row">
                  <Box pr={1}>
                    <Avatar
                      alt={'Avatar do canal ' + item.channel}
                      src={join('images', item.avatar)}
                    />
                  </Box>
                  <Box>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} visualizações • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;