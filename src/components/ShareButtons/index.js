import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  TumblrShareButton,
  RedditShareButton,
  EmailShareButton,  
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
  TumblrIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';

function ShareButtons ({eventName, eventType, eventDescription}) {
    const shareUrl = 'https://www.pakkamarwadi.tk/';

    return (
      <Container maxWidth="lg">
        <Grid container direction="column" display="flex" justifyContent="center"  alignItems="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Share This Page On:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container direction="row" spacing={1}>
              <Grid item>
                <LinkedinShareButton
                  url={shareUrl}
                  source={shareUrl}
                  hashtag={`#${eventType}`}
                  summary={`#${eventDescription}`}
                >
                  <LinkedinIcon size={40} round={true}/>
                </LinkedinShareButton>
              </Grid>
              <Grid item>
                <FacebookShareButton
                  url={shareUrl}
                  quote={eventName}
                  hashtag={`#${eventType}`}
                >
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
              </Grid>
              <Grid item>
                <TwitterShareButton
                  url={shareUrl}
                  title={eventName}
                  hashtags={[ `#${eventType}`, `#${eventName}`]}
                >
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
              </Grid>
              <Grid item>
                <WhatsappShareButton
                  url={shareUrl}
                  title={eventName}
                >
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
              </Grid>
              <Grid item>
                <TelegramShareButton
                  url={shareUrl}
                  title={eventName}
                >
                  <TelegramIcon size={40} round={true} />
                </TelegramShareButton>
              </Grid>
              <Grid item>
                <TumblrShareButton
                  url={shareUrl}
                  title={eventName}
                  caption={eventDescription}
                  tags={[eventType, eventName]}
                >
                  <TumblrIcon size={40} round={true} />
                </TumblrShareButton>
              </Grid>
              <Grid item>
                <RedditShareButton
                  url={shareUrl}
                  title={eventName}
                >
                  <RedditIcon size={40} round={true} />
                </RedditShareButton>
              </Grid>
              <Grid item>
                <EmailShareButton
                  url={shareUrl}
                  subject={eventName}
                >
                  <EmailIcon size={40} round={true}/>
                </EmailShareButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
}

export default ShareButtons;