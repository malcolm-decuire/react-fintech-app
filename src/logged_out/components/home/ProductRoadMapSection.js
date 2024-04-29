import React from "react";
import { Grid, Typography } from "@mui/material";
import FlagIcon from '@mui/icons-material/Flag';
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import ProductRoadmapCard from "./ProductRoadmapCard";
import useWidth from "../../../shared/functions/useWidth";

const iconSize = 30;

const features = [
  {
    color: "#00802b",
    headline: "Q2-2024: Update 'UX'",
    text: "TBA",
    icon: <FlagIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#660080",
    headline: "Q2-2024: Update 'LOGIN'",
    text: "TBA",
    icon: <FlagIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#002080",
    headline: "Q2-2024: Update 'POSTS'",
    text: "TBA",
    icon: <FlagIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#00C853",
    headline: "Q2-2024: Real Estate API Integration",
    text: "TBA",
    icon: <FlagIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "Q3-2024: Financial Data API Integration",
    text: "TBA",
    icon: <FlagIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#0091EA",
    headline: "Q4-2024: Google SSO Integration",
    text: "TBA",
    icon: <FlagIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },

];

function ProductRoadmapSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Product Roadmap
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
                <ProductRoadmapCard
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

ProductRoadmapSection.propTypes = {};

export default withTheme(ProductRoadmapSection);
