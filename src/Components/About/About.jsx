import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about_name">Jacqline Geng</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative self-taught developer with proficiency in React and Javascript.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/jacqlinegeng"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:jacqlinegeng@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/jacqlinegeng/"
            aria-label="linkedin"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/inthecosmicdust"
            aria-label="twitter"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <TwitterIcon />
          </a>
        </div>
        <button
          className="btnResume"
          onClick={() => {
            window.open(
              ""
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};