import React from "react";
import { Typography, Grid, Box, Divider } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import BusinessIcon from '@mui/icons-material/Business';

const iconSize = 140; // Adjust the size of icons as needed

const iconSlides = [
  {
    icon: <EmojiEmotionsIcon style={{ fontSize: iconSize, animation: "bounce 2s infinite" }} />,
    text: "Business Humor",
  },
  {
    icon: <HomeIcon style={{ fontSize: iconSize, animation: "bounce 2s infinite" }} />,
    text: "Residential Analysis",
  },
  {
    icon: <ApartmentIcon style={{ fontSize: iconSize, animation: "bounce 2s infinite" }} />,
    text: "Commercial Analysis",
  },
  {
    icon: <BusinessIcon style={{ fontSize: iconSize, animation: "bounce 2s infinite" }} />,
    text: "Tech Updates",
  },
];

const bounceAnimation = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

function MidSection() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <style>
        {bounceAnimation}
      </style>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Content Coverage
        </Typography>
        <Divider variant="middle" style={{ margin: '20px 0' }} />
        <div className="container-fluid">
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Carousel 
                animation="slide" 
                indicators={false} 
                timeout={500} 
                autoPlay={true}
                interval={3000}
                cycleNavigation={true}
              >
                {iconSlides.map((slide, index) => (
                  <Box 
                    key={index} 
                    display="flex" 
                    flexDirection="column" 
                    alignItems="center" 
                    justifyContent="center"
                    height="100%"
                  >
                    {slide.icon}
                    <Typography variant="h6" align="center" className="lg-mg-top" style={{ fontSize: '1.5rem', marginTop: '8px' }}>
                      {slide.text}
                    </Typography>
                  </Box>
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default MidSection;
