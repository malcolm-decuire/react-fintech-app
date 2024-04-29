import React from "react";
import { Grid, Typography } from "@mui/material";
import ScheduleIcon from '@mui/icons-material/Schedule';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GavelIcon from '@mui/icons-material/Gavel';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "Real Estate History",
    text: "Learn more about US property laws and their impact on today",
    icon: <ScheduleIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "Direct Real Estate Analysis",
    text: "Leverage our platform to conduct real estate analysis across all asset types",
    icon: <QueryStatsIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#0091EA",
    headline: "REIT Analysis",
    text: "Join our team as we cover the largest REIT players in the market",
    icon: <ShowChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#d50000",
    headline: "Real Estate Legislation ",
    text: "Tune-in to get the inside scope on upcoming property legislation",
    icon: <GavelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#DD2C00",
    headline: "Maintenance Analysis",
    text: "Follow our team as we discuss best practices for cost-management",
    icon: <EngineeringIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#64DD17",
    headline: "Building Material Innovations",
    text: "We’re following industry leaders & scientist as they develop the buildings of the future",
    icon: <HomeWorkIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200",
  },

];

function FeatureSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Features
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width, theme)}>
            {features.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);
