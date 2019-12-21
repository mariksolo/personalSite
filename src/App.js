import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Typography, Link, Container, Box } from "@material-ui/core";
import Typist from "react-typist";
import Typing from "react-typing-animation";

function App() {
  return (
    <div className="App">
      <Container className="Navigation">
        <Link href="#" className="NavLink">
          Resume
        </Link>
        <Link href="#" className="NavLink">
          Skills
        </Link>
        <Link href="#" className="NavLink">
          About
        </Link>
      </Container>

      <Container className="App-header">
        <Typist cursor={{ show: false }} avgTypingDelay={20}>
          {" "}
          <h1 className="MainText">
            Hello, my name is <span className="name">Mark Solomonik</span>.
          </h1>
          <br />
          <h1 className="MainText">
            I am a self-taught <span className="programmer">programmer
            <Typist.Backspace count={10} delay={3000} />
             designer
            <Typist.Backspace count={8} delay={2000} />
             co-founder
            <Typist.Backspace count={10} delay={2000} />
             leader
             </span>
          </h1>
          
          
        </Typist>


        <Typist cursor={{ show: false }} avgTypingDelay={20} startDelay={2200}>
          <h1 className="MainText">
            with experience in <span className="leadership">leadership
            <Typist.Backspace count={10} delay={4000} />
            non-profits
            <Typist.Backspace count={11} delay={2000} />
            data science
            <Typist.Backspace count={12} delay={2000} />
            web design
            
            </span>
          </h1>
          </Typist>
          <Typist cursor={{ show: false }} avgTypingDelay={20} startDelay={3100}>
          <h1 className="MainText">located in Fresno, California.</h1>
        </Typist>
      </Container>
    </div>
  );
}

export default App;
