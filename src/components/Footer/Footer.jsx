import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="footer-container">
        <div>
          Made with ❤️ by{" "}
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="not-link"
          >
            {" "}
            Arpit Gupta
          </a>
        </div>
        <div className="footer-links">
          <div>
            <a
              className="not-link"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
          <div>
            <a
              className="not-link"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>
          <div>
            <a
              className="not-link"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div>&#169; 2023 | GymExpress</div>
      </div>
    </div>
  );
};

export default Footer;
