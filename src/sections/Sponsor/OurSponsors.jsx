import React from "react";
import "./OurSponsors.scss";

import toyota from "../../resources/images/sponsors/toyota.png";
import scotiabank from "../../resources/images/sponsors/scotiabank.jpeg";
import cockroach from "../../resources/images/sponsors/cockroach-labs.png";
import uplift from "../../resources/images/sponsors/uplift.png";
import google from "../../resources/images/sponsors/google.png";
import microsoft from "../../resources/images/sponsors/microsoft.png";
import meta from "../../resources/images/sponsors/meta.png";
import sps from "../../resources/images/sponsors/sps.png";
import otto from "../../resources/images/sponsors/otto.png";
import cloudflare from "../../resources/images/sponsors/cloudflare.jpg";
import d2l from "../../resources/images/sponsors/d2l.png";

const gold = [
  {
    logo: cockroach,
    alt: "Cockroach Labs",
    link: "https://www.cockroachlabs.com/careers/",
  },
  {
    logo: microsoft,
    alt: "Microsoft",
    link: "https://careers.microsoft.com/us/en",
  },
  {
    logo: sps,
    alt: "sps",
    link: "https://jobs.spscommerce.com/",
  },
];

const silver = [
  {
    logo: scotiabank,
    alt: "Scotiabank",
    link: "https://www.scotiabank.com/ca/en/about.html",
  },
  { 
    logo: google, 
    alt: "Google", 
    link: "https://careers.google.com/students/" 
  },
];

const bronze = [
  {
    logo: toyota,
    alt: "Toyota",
    link: "https://tmmc.ca/en/toyota-canada-careers/",
  },
  { 
    logo: meta, 
    alt: "Meta", 
    link: "https://www.metacareers.com/" 
  },
  { 
    logo: otto, 
    alt: "Clearpath", 
    link: "" 
  },
  {
    logo: cloudflare,
    alt: "Cloudflare",
    link: "https://www.cloudflare.com/careers/"
  },
  {
    logo: d2l,
    alt: "D2L",
    link: "https://www.d2l.com/careers/early-talent/"
  },
];

const startup = [
  { 
    logo: uplift, 
    alt: "Uplift", 
    link: "https://uplift.com/careers" 
  },
];

const OurSponsors = () => (
  <div className="our-sponsors-container">
    <h2 className="our-sponsors-title">Our Sponsors</h2>
    <div className="our-sponsors-logos">
      <div className="our-sponsors-gold">
        {gold.map((sponsor) => {
          return (
            <a href={sponsor.link}>
              <img src={sponsor.logo} alt={sponsor.alt} />
            </a>
          );
        })}
      </div>
      <div className="our-sponsors-silver">
        {silver.map((sponsor) => {
          return (
            <a href={sponsor.link}>
              <img src={sponsor.logo} alt={sponsor.alt} />
            </a>
          );
        })}
      </div>
      <div className="our-sponsors-bronze">
        {bronze.map((sponsor) => {
          return (
            <a href={sponsor.link}>
              <img src={sponsor.logo} alt={sponsor.alt} />
            </a>
          );
        })}
      </div>
      <div className="our-sponsors-startup">
        {startup.map((sponsor) => {
          return (
            <a href={sponsor.link}>
              <img src={sponsor.logo} alt={sponsor.alt} />
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

export default OurSponsors;