import React from "react";
import "./App.css";
import {
  Typography,
  Link,
  Container,
  Fab,
  Card,
  CardActions,
  CardContent,
  Button,
  CardMedia,
  CardActionArea
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandMore } from "@material-ui/icons";
import Typist from "react-typist";
import * as Scroll from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import codeImage from "./markus-spiske-1LLh8k2_YFk-unsplash.jpg";
import boatImage from "./matteo-vistocco-Dph00R2SwFo-unsplash.jpg";
import logo from "./Logo.png";

function About() {
  return (
    <div className="App2">
      <Container className="Navigation">
      <Link href="/" className="logoImageContainer">
            <img src={logo} className="logoImage"></img>
          </Link>
        
        <Link href="robots.txt" className="NavLink" download>
          Resume
        </Link>
        <Link href="/about" className="NavLink">
          About
        </Link>
      </Container>
      <Container className='description'>
        <div className='descriptionText'>
          <p>
            {" "}
            I am a high school student who enjoys using new technology to build
            things that impact others, whether with artificial intelligence,
            full-stack web developement, or Wordpress.
          </p>
          <p>
            {" "}
            In my free time, I enjoy coming up with business ideas and trying to turn them into real products,
            as well as using and building things with web technologies like Firebase, Rust, and AWS. You can find an
            article about IPFS I wrote for Monta Vista High School's student technology newspaper, Res Novae, here. 
          </p>
        </div>
        <div>
          <img src={codeImage} className="aboutImage"></img>
        </div>
      </Container >
      <Container className='description'>
      <div className='descriptionText'>
         <img src = {boatImage} className = "aboutImage"></img>
      </div>
      <div className='descriptionText'>
        <p>I am also frequently involved in student organizations like FBLA to try to expand my own knowledge of
           entrepreneurship as well as share my experience with leadership and programming with other high school students. 
        </p>
      </div>

      </Container>
    </div>
  );
}

export default About;
