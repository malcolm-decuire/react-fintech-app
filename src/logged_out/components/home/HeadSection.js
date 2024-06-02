import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Box, Typography, Grid, Card } from "@mui/material";
import { withStyles, useTheme } from "@mui/styles"; // Correct import statement
import WaveBorder from "../../../shared/components/WaveBorder";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  card: {
    boxShadow: theme.shadows[4],
    margin: theme.spacing(2),
    padding: theme.spacing(2),
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
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
    backgroundColor: "#333333", // Dark grey background for the card
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
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
    [theme.breakpoints.down("sm")]: {
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
    backgroundColor: "#333333", // Dark grey for wave border
  },
  label: {
    textAlign: "center",
    color: theme.palette.secondary.main,
    fontStyle: theme.typography.fontStyle,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  videoContainer: {
    position: "relative",
    paddingBottom: "56.25%", // 16:9 aspect ratio
    height: 0,
    overflow: "hidden",
    maxWidth: "100%",
    background: "#000",
    marginBottom: theme.spacing(2),
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
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
                    <Grid item xs={12}>
                      <div className={classes.videoContainer}>
                        <iframe
                          src="https://www.youtube.com/embed/iyOq8DhaMYw?autoplay=1&mute=1"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="YouTube video"
                          className={classes.iframe}
                        />
                      </div>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="100%"
                      >
                        <Box mb={2}>
                          <Typography variant={isWidthUpLg ? "h4" : "h5"} className={classes.label}>
                            Decure Solutions 🏃 on Bloomberg 
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Box>
                </div>
              </Card>
            </Box>
          </div>
        </div>
        <WaveBorder
          upperColor={theme.palette.secondary.main}
          lowerColor="#333333" // Dark grey for lower wave border
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

function YouTubeEmbed() {
  return <StyledHeadSection />;
}

export default YouTubeEmbed