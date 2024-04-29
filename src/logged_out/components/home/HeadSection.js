//////////////////////////////////////////////////////////////
//20240428 Update
/////////////////////////////////////////////////////////////
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Box, Typography, Button, Grid, Card, MobileStepper, Hidden } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { withStyles, useTheme } from "@mui/styles"; // Correct import statement
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import useMediaQuery from "@mui/material/useMediaQuery";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  
const images = [
  {
    label: 'START HERE',
    imgPath:
      'https://images.unsplash.com/photo-1635144432103-47f3a18bae38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'RESOURCES',
    imgPath:
      'https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'LOGIN',
    imgPath:
      'https://images.unsplash.com/photo-1529539795054-3c162aab037a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'CONNECT',
    imgPath:
      'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&h=250',
  },

];

function SwipeableTextMobileStepper() {
  const theme = useTheme(); // Assuming useTheme is imported
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const styles = (theme) => ({
    extraLargeButtonLabel: {
      fontSize: theme.typography.body1.fontSize,
      [theme.breakpoints.up("sm")]: {
        fontSize: theme.typography.h6.fontSize,
      },
    },
    extraLargeButton: {
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
      [theme.breakpoints.up("xs")]: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      [theme.breakpoints.up("lg")]: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      },
    },
    card: {
      boxShadow: theme.shadows[4],
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("xs")]: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
      },
      [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
      [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(5.5),
        paddingBottom: theme.spacing(5.5),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
      },
      [theme.breakpoints.up("lg")]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
      },
      [theme.breakpoints.down("xl")]: {
        width: "auto",
      },
    },
    wrapper: {
      position: "relative",
      backgroundColor: theme.palette.secondary.main,
      paddingBottom: theme.spacing(2),
    },
    image: {
      maxWidth: "100%",
      verticalAlign: "middle",
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[4],
    },
    container: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(12),
      [theme.breakpoints.down("lg")]: {
        marginBottom: theme.spacing(9),
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(6),
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(3),
      },
    },
    containerFix: {
      [theme.breakpoints.up("md")]: {
        maxWidth: "none !important",
      },
    },
    waveBorder: {
      paddingTop: theme.spacing(4),
    },
    label: {
      textAlign: "center",
      color: theme.palette.secondary.main,
      fontStyle: theme.typography.fontStyle,
    },
  });
  
  const StyledHeadSection = withStyles(styles, { withTheme: true })(
    function HeadSection(props) {
      const { classes, theme } = props;
      const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

      return (
        <Fragment>
          <div className={classNames("lg-p-top", classes.wrapper)}>
            <div className={classNames("container-fluid", classes.container)}>
              <Box display="flex" justifyContent="center" className="row">
                <Card
                  className={classes.card}
                  data-aos-delay="200"
                  data-aos="zoom-in"
                >
                  <div className={classNames(classes.containerFix, "container")}>
                    <Box justifyContent="space-between" className="row">
                      <Grid item xs={20} md={20}>
                      <Hidden mdDown>
                        <Grid item md={20}>
                          <ZoomImage
                            src={images[activeStep].imgPath}
                            className={classes.image}
                            alt={images[activeStep].label}
                          />
                        </Grid>
                      </Hidden>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="space-between"
                          height="100%"
                        >
                          <Box mb={15}>
                            <Typography variant={isWidthUpLg ? "h4" : "h5"} className={classes.label}>
                              {images[activeStep].label}
                            </Typography>
                          </Box>
                          <div>
                          </div>
                        </Box>
                      </Grid>
                    </Box>
                    <MobileStepper
                        variant="progress"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                          <Grid item style={{ flexGrow: 0 }}>
                            <Button size="small" onClick={handleNext}>
                              Next
                              <KeyboardArrowRight />
                            </Button>
                          </Grid>
                        }
                        backButton={
                          <Grid item style={{ flexGrow: 0 }}>
                            <Button size="small" onClick={handleBack}>
                              <KeyboardArrowLeft />
                              Back
                            </Button>
                          </Grid>
                        }
                    />
                  </div>
                </Card>
              </Box>
            </div>
          </div>
          <WaveBorder
            upperColor={theme.palette.secondary.main}
            lowerColor="#FFFFFF"
            className={classes.waveBorder}
            animationNegativeDelay={2}
          />
        </Fragment>
      );
    }
  );

  StyledHeadSection.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
  };

  return <StyledHeadSection />;
}
export default SwipeableTextMobileStepper;
