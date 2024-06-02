import React, { Fragment } from "react";
import { Typography } from "@mui/material";

const content = (
  <Fragment>
    <Typography variant="h6" paragraph>
    Decure Solutions a passion project by Malcolm Decuire blending finance & technology for fun 
    </Typography>
    <Typography variant="h4" paragraph>
     ⏰ Thank You For Your Time! 
    </Typography>
    <Typography paragraph>
      Decure Solutions is an example of a fintech app made w/ React + Material UI
    </Typography>
    <Typography paragraph>
    🚩 In this example, Decure Solutions is a one-stop shop for all things real estate news & analysis (e.g. research, deals, laws, etc.)
    </Typography>
    <Typography paragraph>
    🗞️ Folks pay for a subscription to get news & analysis about direct real-estate opportunities like duplexes & real-estate security analysis for REITs all while delivering a simple web application that’s device agnostic. 
    </Typography>
    <Typography variant="h4" paragraph>
     ⏭️ Call To Actions
    </Typography>
    <Typography paragraph>
     📺 First, watch live YouTube of Bloomberg on the 'Home' tab.  I think they're a great example of blending tech & finance.
    </Typography>
    <Typography paragraph>
     🚙 Second, test drive the 'Login' tab. use the login to see a successful sign up 
    </Typography>
    <Typography paragraph>
     🙋‍♂️ Third, connect on LinkedIn if you're also interested in finance & technology as well. 
     <Typography paragraph>
     </Typography>
     📌 Fourth, check every 6 months for new features & the roadmap 
    </Typography>
    <Typography variant="h4" paragraph>
     📕 About Malcolm Decuire
    </Typography>
    <Typography paragraph>
     💰 I’m a GTM expert with 10 years of experience blending finance, software, and business development to help bring $8M+ in pipeline.
    </Typography>
    <Typography paragraph>
     🏈 I’m a cross-functional team player that’s worked w/ engineering, product, marketing, and executive teams to bring proof-of-concepts to life.
    </Typography>
    <Typography paragraph>
     🏢 I’ve worked at early to mid-stage, late-stage, and Fortune100 companies supporting sales & product teammates to deliver on complex ETL/ELT solutions
    </Typography>
  </Fragment>
);

const posts = [
  {
    title: "US Real Estate Trends",
    id: 1,
    date: 1576281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost1.jpg`,
    snippet:
      "Recent US rental trends include rising rates at slower rates",
    content: content,
  },
  {
    title: "California Rental Trends",
    id: 2,
    date: 1576391600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost2.jpg`,
    snippet:
      "Recent CA rental trends include moderated rent growth & sustained high-mortgages.",
    content: content,
  },
  {
    title: "California Deal Analysis",
    id: 3,
    date: 1577391600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost3.jpg`,
    snippet:
      "4-unit property investment opportunity in SFCA with a cash-on-cash return of 3.74 & cap rate of 5.53%",
    content: content,
  },
  {
    title: "Texas Deal Analysis",
    id: 4,
    date: 1572281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost4.jpg`,
    snippet:
      "4-unit property investment opportunity in HTX with a cap rate of 4.61% & cash-on-cash return of 0.17% ",
    content: content,
  },
  {
    title: "California Legislative Update",
    id: 5,
    date: 1573281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost5.jpg`,
    snippet:
      "SB 1079 represents California's ongoing efforts to enhance housing affordability and protect community interests via auction restructuring.",
    content: content,
  },
  {
    title: "Texas Legislative Update",
    id: 6,
    date: 1575281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost6.jpg`,
    snippet:
      "Senate Bill 2 is Texas’ property tax law designed to improve property law.",
    content: content,
  },
];

export default posts;