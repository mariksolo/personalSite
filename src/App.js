import React from "react";
import logo from "./Logo.png";
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
  CardActionArea,
  Box,
  Tab,
  Tabs,
  AppBar,
  IconButton,
  
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandMore } from "@material-ui/icons";
import Typist from "react-typist";
import * as Scroll from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    minWidth: 275,
    background: "main"
  },
  media: {
    height: 140
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function DownScroll() {
  scroll.scrollMore(900);
}
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      {/* <div className="Header"> */}
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
      {/* </div> */}

      <Container className="App-header">
        <Typist cursor={{ show: false }} avgTypingDelay={20}>
          {" "}
          <h1 className="MainText">
            Hello, my name is <span className="name">Mark Solomonik</span>.
          </h1>
          <br />
          <h1 className="MainText">
            I am a self-taught{" "}
            <span className="programmer">
              programmer
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
            with experience in{" "}
            <span className="leadership">
              leadership
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

      <Container className="DownButton">
        <Fab onClick={DownScroll}>
          <ExpandMore />
        </Fab>
      </Container>

      {/* <Container className="SubText">
        <h2>
          {" "}
          I am a high school student who enjoys using new technology to build things that impact others,
          whether with artificial intelligence, full-stack web developement, or
          Wordpress.
        </h2>
      </Container> */}

      <Container className="ProjectDisplay">
        <h2>Projects</h2>
        <Container className="Projects">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Container>
      <Container className="ProjectDisplay">
        <h2>Publications</h2>
        <Container className="Projects">
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://resnovaemv.files.wordpress.com/2019/02/technology-1587673_1920.jpg?w=1080"
            />
            <CardContent>
              <Typography gutterBottom variant="body1">
                Monta Vista Res Novae
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The InterPlanetary File System: The New “Permanent Web”
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                <Link href="https://mvresnovae.org/2018/11/22/the-interplanetary-file-system-the-new-permanent-web/">
                  Read
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Container>
      <Container className="ProjectDisplay">
        <h2>Awards</h2>
        <Container className="Projects">
          <Card className={classes.card} background="primary">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                FBLA
              </Typography>
              <Typography variant="body1">Business Financial Plan</Typography>

              <Typography variant="body2">1st Place - State Level</Typography>
              <Typography variant="body2">
                5th Place - National Level
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Container>
      </Container>
    </div>
  );
}

export default App;
