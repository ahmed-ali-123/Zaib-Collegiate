import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";
import htmlImg from "./images/html.png";
import cssImg from "./images/css.png";
import jsImg from "./images/js.png";
import reactImg from "./images/react.png";
import gsapImg from "./images/gsap.png";
import nextImg from "./images/next.png";
import nodeImg from "./images/node.png";
import expressImg from "./images/express.png";
import mongodbImg from "./images/mongodb.png";
import mongooseImg from "./images/mongoose.png";
import websocketsImg from "./images/websockets.png";
import jwtImg from "./images/jwt.png";
import psImg from "./images/ps.png";
import cImg from "./images/c.png";
import pyImg from "./images/py.png";
import wordImg from "./images/word.png";
import cppImg from "./images/cpp.png";
import excelImg from "./images/excel.png";
import logo from "./images/logo.jpeg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import wave from "./images/wave.png";
import aboutimage from "./images/about image.png";
import frontend from "./images/frontend.png";
import backend from "./images/backend.png";
import gd from "./images/gd.png";
import wordc from "./images/wordc.png";
import excelc from "./images/excelc.png";
import lang from "./images/lang.png";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    const paths = [
      "M27.9,-54.6C36.2,-43.5,43,-36.1,49.8,-27.7C56.5,-19.2,63.2,-9.6,65,1C66.7,11.6,63.6,23.3,56.8,31.6C50,40,39.5,45.2,29.5,49.3C19.4,53.5,9.7,56.6,-3.2,62.2C-16.2,67.8,-32.4,76,-43,72.1C-53.6,68.3,-58.6,52.5,-67.1,38.5C-75.6,24.5,-87.7,12.2,-89.7,-1.2C-91.8,-14.6,-83.9,-29.3,-71.7,-36.9C-59.5,-44.5,-42.9,-45.1,-30.3,-53.7C-17.6,-62.2,-8.8,-78.8,0.5,-79.6C9.8,-80.5,19.6,-65.7,27.9,-54.6Z",
      "M40.9,-66.7C52.5,-64.2,60.9,-52.1,68.8,-39.4C76.7,-26.7,84.1,-13.3,85.9,1C87.7,15.4,83.8,30.8,72.9,38.3C62,45.9,44.1,45.5,30.7,48.6C17.4,51.6,8.7,58.1,-2.5,62.4C-13.6,66.7,-27.3,68.8,-35.4,62.7C-43.6,56.7,-46.3,42.5,-52.8,30.7C-59.3,18.8,-69.6,9.4,-71.2,-0.9C-72.8,-11.3,-65.7,-22.6,-57.7,-31.8C-49.7,-40.9,-40.8,-48,-31,-51.6C-21.2,-55.2,-10.6,-55.3,2,-58.8C14.7,-62.4,29.4,-69.3,40.9,-66.7Z",
      "M41.3,-66C53.8,-64.3,64.5,-53.9,72.1,-41.4C79.6,-28.9,84,-14.5,85,0.5C85.9,15.6,83.4,31.1,74.5,41.2C65.6,51.3,50.2,55.9,36.8,64.7C23.3,73.5,11.6,86.5,-0.8,87.9C-13.2,89.3,-26.4,78.9,-33.9,66.7C-41.4,54.4,-43.3,40.2,-48,28.8C-52.7,17.4,-60.2,8.7,-64.6,-2.5C-68.9,-13.7,-69.9,-27.3,-64.3,-37.1C-58.6,-47,-46.3,-53,-34.5,-55.1C-22.7,-57.2,-11.3,-55.5,1.5,-58.2C14.4,-60.8,28.8,-67.8,41.3,-66Z",
      "M44.6,-70.2C58.9,-69,72.3,-59.3,73.9,-46.1C75.5,-33,65.3,-16.5,58.6,-3.9C51.9,8.8,48.7,17.5,46.7,29.9C44.6,42.2,43.7,58.2,36.1,66.1C28.5,74.1,14.3,74.1,1,72.3C-12.2,70.5,-24.4,67,-37,61.9C-49.6,56.8,-62.5,50.2,-69.9,39.6C-77.3,29,-79.2,14.5,-79.6,-0.2C-80,-14.9,-78.8,-29.9,-70.4,-38.7C-61.9,-47.5,-46.2,-50.1,-33.2,-52C-20.3,-54,-10.1,-55.2,2.5,-59.6C15.2,-63.9,30.3,-71.4,44.6,-70.2Z",
      "M26,-50.8C34.4,-40.1,42.5,-34.6,48.9,-27C55.3,-19.4,60,-9.7,61.8,1C63.6,11.8,62.4,23.6,57.8,34.4C53.3,45.2,45.4,55,35.2,60C25,64.9,12.5,65,-2,68.6C-16.6,72.1,-33.1,79.1,-42.1,73.4C-51.1,67.7,-52.5,49.4,-58.7,35.1C-64.9,20.7,-75.9,10.4,-77.5,-0.9C-79.1,-12.2,-71.2,-24.4,-64.3,-37.6C-57.5,-50.9,-51.7,-65.2,-41.2,-74.6C-30.6,-84.1,-15.3,-88.6,-3.3,-83C8.8,-77.3,17.6,-61.5,26,-50.8Z",
    ];

    const morphingPath = document.getElementById("morphingPath");
    let currentPathIndex = 0;

    function morph() {
      currentPathIndex = (currentPathIndex + 1) % paths.length;
      gsap.to(morphingPath, {
        duration: 1,
        attr: { d: paths[currentPathIndex] },
        ease: "linear",
        onComplete: morph,
      });
    }

    morph();

    gsap.to(".row", {
      delay: 0.5,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
    });
    const rows = document.querySelectorAll(".row");

    rows.forEach((row, index) => {
      // Clone the row content and append it to the row
      const rowContent = row.innerHTML;
      row.innerHTML += rowContent;

      // Calculate the width of the row (now doubled)
      const rowWidth = row.scrollWidth / 2;

      // If it's the second row, reverse the order of its children
      if (index === 1) {
        const children = Array.from(row.children);
        children.reverse().forEach((child) => {
          row.prepend(child.cloneNode(true));
        });
        row.innerHTML += row.innerHTML; // Append the reversed children again for seamless scrolling
      }

      // Determine the direction of scrolling
      const direction = index === 1 ? 1 : -1; // Reverse the second row

      // Set a random duration between 8 and 12 seconds for each row
      const duration = index !== 1 ? 20 + Math.random() * 4 : 50;

      // Create a seamless scrolling animation using GSAP
      gsap
        .timeline({ repeat: -1 })
        .set(row, { x: 0 })
        .to(row, {
          x: direction * rowWidth,
          duration: duration,
          ease: "none",
          snap: "x", // Try this for potential improvement
          force3D: true, // Try this for potential improvement
        });
    });

    const newtimeline = gsap.timeline();
    newtimeline.to(".paraword2", {
      transform: "translateY(0%)",
      opacity: 1,
      duration: 1,
      stagger: 0.04,
    });
    newtimeline.to(
      ".paraword",
      {
        opacity: "1",
        duration: 0.4,
        stagger: 0.04,
      },
      "-=1"
    );
    newtimeline.to(".buttonwrapper", {
      opacity: 1,
      duration: 1,
      stagger: 0.3,
    });
    newtimeline.to(
      ".cover",
      {
        x: "0",
        duration: 0.8,
        ease: "power1.inOut",
      },
      "-=0.4"
    );
    newtimeline.to(".leftSide h3", {
      color: "rgba(0, 0, 0, 0.425)",
      duration: 0.01,
    });
    newtimeline.to(".cover", {
      x: "100%",
      duration: 0.8,
      ease: "power1.inOut",
    });
    newtimeline.to(".aside", {
      opacity: 1,
      duration: 4,
      ease: "power1.inOut",
    });
    gsap.from(".logo", {
      opacity: 0,
      delay: 1,
      x: "-100%",
      duration: 1,
    });
    gsap.from(".menuicon", {
      opacity: 0,
      delay: 1,
      x: "100%",
      duration: 1,
    });
    const navtl = gsap.timeline();
    navtl.to(".links", {
      height: "350px",
      duration: 1,
      ease: "power1.inOut",
    });
    navtl.to(".links ul li", {
      width: "100%",
      duration: 0.7,
      ease: "power1.inOut",
      stagger: {
        each: 0.1,
        from: "start",
      },
    });
    navtl.pause();
    let navopen = false;
    document.getElementById("menuicon").addEventListener("click", () => {
      navopen = !navopen;
      if (navopen) {
        navtl.play();
        gsap.to(".menuicon .lineone", {
          rotate: 45,
          duration: 0.7,
          ease: "power1.inOut",
        });
        gsap.to(".menuicon .linetwo", {
          rotate: -45,
          y: "-11px",
          duration: 0.7,
          ease: "power1.inOut",
        });
      } else {
        navtl.reverse();
        gsap.to(".menuicon .lineone", {
          rotate: 0,
          duration: 0.7,
          ease: "power1.inOut",
        });
        gsap.to(".menuicon .linetwo", {
          rotate: 0,
          y: 0,
          duration: 0.7,
          ease: "power1.inOut",
        });
      }
    });
    gsap.from(".scrollsection h1 span", {
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      y: 10,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".scrollsection",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    const text2 =
      "Zaib Computer Center is your gateway to the digital world, located in Baldia Town, Karachi, Pakistan. We offer a comprehensive range of courses designed to equip you with the skills needed to excel in today's tech-driven environment.Whether you're aspiring to be a web developer, graphic designer, or office productivity expert, we've got you covered. Our curriculum includes web development (frontend and backend), Microsoft Office Suite (Word, Excel), graphic design tools (Photoshop, Canva), programming languages (Python), and much more. Join us to unlock your potential and build a successful career in the IT industry.";
    const words2 = text2.split(" ");
    const spanned2 = words2
      .map((word) =>
        word !== ""
          ? word !== "covered."
            ? `<span className="paraword3">${word}</span>`
            : `<span className="paraword3">${word}</span> <br/><br/>`
          : ""
      )
      .join(" ");
    navigator.clipboard.writeText(spanned2);

    const abouttl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top 60%",
        end: "bottom 100%",
        scrub: true,
      },
    });
    abouttl.to(".headingshadow ", {
      transform: "translate(150%, -50%)",
      duration: 5,
      ease: "power1.inOut",
    });
    abouttl.from(".paraword3", {
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      y: 10,
      ease: "power1.inOut",
    });
  });
  return (
    <>
      <nav className="navbar">
        <section className="abovediv">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="menuicon" id="menuicon">
            <div className="lineone"></div>
            <div className="linetwo"></div>
          </div>
        </section>
        <section className="links">
          <ul>
            <li className="link">
              <a>Home</a>
            </li>
            <li className="link">
              <a>About</a>
            </li>
            <li className="link">
              <a>Courses</a>
            </li>
            <li className="link">
              <a>Projects Code</a>
            </li>
            <li className="link">
              <a>Contact</a>
            </li>
          </ul>
        </section>
      </nav>
      <main className="mainpage">
        <div className="leftSide">
          <h3>
            Learn Skills that matter.
            <div className="cover"></div>
          </h3>
          <h1 className="title">
            <span className="wordwrapper">
              <span className="paraword2">Z</span>
              <span className="paraword2">a</span>
              <span className="paraword2">i</span>
              <span className="paraword2">b</span>
            </span>{" "}
            <span className="wordwrapper">
              <span className="paraword2">C</span>
              <span className="paraword2">o</span>
              <span className="paraword2">m</span>
              <span className="paraword2">p</span>
              <span className="paraword2">u</span>
              <span className="paraword2">t</span>
              <span className="paraword2">e</span>
              <span className="paraword2">r</span>
            </span>{" "}
            <span className="wordwrapper">
              <span className="paraword2">C</span>
              <span className="paraword2">e</span>
              <span className="paraword2">n</span>
              <span className="paraword2">t</span>
              <span className="paraword2">e</span>
              <span className="paraword2">r</span>
            </span>
          </h1>
          <p className="description" id="description">
            <span className="paraword">Welcome</span>{" "}
            <span className="paraword">to</span>{" "}
            <span className="paraword">zaib</span>{" "}
            <span className="paraword">compter</span>{" "}
            <span className="paraword">center.</span>{" "}
            <span className="paraword">Where</span>{" "}
            <span className="paraword">we</span>{" "}
            <span className="paraword">are</span>{" "}
            <span className="paraword">dedicated</span>{" "}
            <span className="paraword">to</span>{" "}
            <span className="paraword">providing</span>{" "}
            <span className="paraword">quality</span>{" "}
            <span className="paraword">computer</span>{" "}
            <span className="paraword">skills</span>{" "}
            <span className="paraword">to</span>{" "}
            <span className="paraword">the</span>{" "}
            <span className="paraword">coming</span>{" "}
            <span className="paraword">generation</span>{" "}
            <span className="paraword">for</span>{" "}
            <span className="paraword">the</span>{" "}
            <span className="paraword">better</span>{" "}
            <span className="paraword">future</span>{" "}
            <span className="paraword">of</span>{" "}
            <span className="paraword">our</span>{" "}
            <span className="paraword">society</span>{" "}
            <span className="paraword">in</span>{" "}
            <span className="paraword">the</span>{" "}
            <span className="paraword">field</span>{" "}
            <span className="paraword">of</span>{" "}
            <span className="paraword">computer</span>{" "}
            <span className="paraword">engineering.</span>
          </p>
          <div className="buttons">
            <div className="buttonwrapper">
              <button>Browse Courses</button>
            </div>
            <div className="buttonwrapper">
              <button>Learn More</button>
            </div>
          </div>
          <aside className="aside">
            <svg
              id="morphingSVG"
              width="600"
              height="600"
              viewBox="0 0 200 200"
            >
              <path
                id="morphingPath"
                fill="#F1C21B"
                d="M32.2,-56.2C42.8,-49.8,53,-43.1,62.2,-33.7C71.5,-24.3,79.8,-12.2,83.6,2.2C87.4,16.5,86.7,33.1,77.3,42.3C68,51.5,50,53.4,35.6,60.2C21.3,67.1,10.6,78.8,-2.1,82.5C-14.9,86.2,-29.8,81.8,-41.3,73.3C-52.7,64.9,-60.8,52.3,-65.6,39.4C-70.5,26.5,-72.1,13.2,-71.3,0.5C-70.5,-12.3,-67.2,-24.6,-60.5,-34.3C-53.8,-43.9,-43.6,-50.9,-32.9,-57.2C-22.3,-63.5,-11.1,-69.2,-0.1,-69C10.9,-68.7,21.7,-62.6,32.2,-56.2Z"
              ></path>
            </svg>
          </aside>
        </div>

        <div className="rightSide">
          <div className="row rowone">
            <div
              className="rowimage"
              style={{ backgroundColor: "rgb(255, 116, 66)" }}
            >
              <img src={htmlImg} className="html" alt="html" />
            </div>
            <div
              className="rowimage"
              style={{ backgroundColor: "rgb(27, 190, 255)" }}
            >
              <img src={cssImg} alt="css" />
            </div>
            <div
              className="rowimage"
              style={{ backgroundColor: "rgb(242, 255, 59)" }}
            >
              <img src={jsImg} alt="javascript" />
            </div>
            <div className="rowimage" style={{ backgroundColor: "#222222" }}>
              <img src={reactImg} alt="React" />
            </div>
            <div className="rowimage" style={{ backgroundColor: "chartreuse" }}>
              <img src={gsapImg} className="gsap" alt="GSAP" />
            </div>
            <div
              className="rowimage"
              style={{ backgroundColor: "rgb(214, 214, 214)" }}
            >
              <img src={nextImg} alt="Next JS" />
            </div>
          </div>
          <div className="rowtwowrapper">
            <div className="row rowtwo">
              <div
                className="rowimage"
                style={{ backgroundColor: "rgb(149, 231, 67)" }}
              >
                <img src={nodeImg} alt="Node JS" />
              </div>
              <div
                className="rowimage"
                style={{ backgroundColor: "rgb(214, 214, 214)" }}
              >
                <img src={expressImg} className="express" alt="Express JS" />
              </div>
              <div
                className="rowimage"
                style={{ backgroundColor: "rgb(0, 214, 36)" }}
              >
                <img src={mongodbImg} alt="Mongo DB" />
              </div>
              <div
                className="rowimage"
                style={{ backgroundColor: "rgb(255, 50, 43)" }}
              >
                <img src={mongooseImg} alt="Mongoose" />
              </div>
              <div
                className="rowimage"
                style={{ backgroundColor: "rgb(214, 214, 214)" }}
              >
                <img src={websocketsImg} alt="Web Sockets" />
              </div>
              <div
                className="rowimage"
                style={{ backgroundColor: "rgb(23, 164, 219)" }}
              >
                <img src={jwtImg} alt="JWT" />
              </div>
            </div>
          </div>
          <div className="row rowthree">
            <div className="rowimage" style={{ backgroundColor: "#003d6e" }}>
              <img src={psImg} alt="Photoshop" />
            </div>
            <div className="rowimage" style={{ backgroundColor: "#3070fa" }}>
              <img src={cImg} alt="C" />
            </div>
            <div
              className="rowimage"
              style={{ backgroundColor: "rgb(27, 81, 126)" }}
            >
              <img src={pyImg} alt="Python" />
            </div>
            <div
              className="rowimage"
              style={{ backgroundColor: "rgb(214, 214, 214)" }}
            >
              <img src={wordImg} alt="MS Word" />
            </div>
            <div className="rowimage" style={{ backgroundColor: "#3070fa" }}>
              <img src={cppImg} alt="C++" />
            </div>
            <div className="rowimage" style={{ backgroundColor: "#0c9248" }}>
              <img src={excelImg} alt="MS Excel" />
            </div>
          </div>
        </div>
      </main>
      <section className="scrollsection">
        <img src={wave} alt="wave" className="wave" />
        <h1>
          <span>Success</span> <span>is</span> <span>the</span> <span>sum</span>{" "}
          <span>of</span> <span>small</span> <span>efforts</span>{" "}
          <span>repeated</span> <span>day</span> <span>in</span>{" "}
          <span>and</span> <span>day</span> <span>out.</span>
        </h1>
        <img src={wave} alt="wave" className="wave2" />
      </section>
      <section className="about magicpattern">
        <div className="aboutleftSide">
          <h1 className="aboutheading">
            About Zaib Computer Center
            <div className="headingshadow"></div>
          </h1>
          <p className="aboutpara" id="aboutpara">
            <span className="paraword3">Zaib</span>{" "}
            <span className="paraword3">Computer</span>{" "}
            <span className="paraword3">Center</span>{" "}
            <span className="paraword3">is</span>{" "}
            <span className="paraword3">your</span>{" "}
            <span className="paraword3">gateway</span>{" "}
            <span className="paraword3">to</span>{" "}
            <span className="paraword3">the</span>{" "}
            <span className="paraword3">digital</span>{" "}
            <span className="paraword3">world,</span>{" "}
            <span className="paraword3">located</span>{" "}
            <span className="paraword3">in</span>{" "}
            <span className="paraword3">Baldia</span>{" "}
            <span className="paraword3">Town,</span>{" "}
            <span className="paraword3">Karachi,</span>{" "}
            <span className="paraword3">Pakistan.</span>{" "}
            <span className="paraword3">We</span>{" "}
            <span className="paraword3">offer</span>{" "}
            <span className="paraword3">a</span>{" "}
            <span className="paraword3">comprehensive</span>{" "}
            <span className="paraword3">range</span>{" "}
            <span className="paraword3">of</span>{" "}
            <span className="paraword3">courses</span>{" "}
            <span className="paraword3">designed</span>{" "}
            <span className="paraword3">to</span>{" "}
            <span className="paraword3">equip</span>{" "}
            <span className="paraword3">you</span>{" "}
            <span className="paraword3">with</span>{" "}
            <span className="paraword3">the</span>{" "}
            <span className="paraword3">skills</span>{" "}
            <span className="paraword3">needed</span>{" "}
            <span className="paraword3">to</span>{" "}
            <span className="paraword3">excel</span>{" "}
            <span className="paraword3">in</span>{" "}
            <span className="paraword3">today's</span>{" "}
            <span className="paraword3">tech-driven</span>{" "}
            <span className="paraword3">environment.Whether</span>{" "}
            <span className="paraword3">you're</span>{" "}
            <span className="paraword3">aspiring</span>{" "}
            <span className="paraword3">to</span>{" "}
            <span className="paraword3">be</span>{" "}
            <span className="paraword3">a</span>{" "}
            <span className="paraword3">web</span>{" "}
            <span className="paraword3">developer,</span>{" "}
            <span className="paraword3">graphic</span>{" "}
            <span className="paraword3">designer,</span>{" "}
            <span className="paraword3">or</span>{" "}
            <span className="paraword3">office</span>{" "}
            <span className="paraword3">productivity</span>{" "}
            <span className="paraword3">expert,</span>{" "}
            <span className="paraword3">we've</span>{" "}
            <span className="paraword3">got</span>{" "}
            <span className="paraword3">you</span>{" "}
            <span className="paraword3">covered.</span> <br />
            <br /> <span className="paraword3">Our</span>{" "}
            <span className="paraword3">curriculum</span>{" "}
            <span className="paraword3">includes</span>{" "}
            <span className="paraword3">web</span>{" "}
            <span className="paraword3">development</span>{" "}
            <span className="paraword3">(frontend</span>{" "}
            <span className="paraword3">and</span>{" "}
            <span className="paraword3">backend),</span>{" "}
            <span className="paraword3">Microsoft</span>{" "}
            <span className="paraword3">Office</span>{" "}
            <span className="paraword3">Suite</span>{" "}
            <span className="paraword3">(Word,</span>{" "}
            <span className="paraword3">Excel),</span>{" "}
            <span className="paraword3">graphic</span>{" "}
            <span className="paraword3">design</span>{" "}
            <span className="paraword3">tools</span>{" "}
            <span className="paraword3">(Photoshop,</span>{" "}
            <span className="paraword3">Canva),</span>{" "}
            <span className="paraword3">programming</span>{" "}
            <span className="paraword3">languages</span>{" "}
            <span className="paraword3">(Python),</span>{" "}
            <span className="paraword3">and</span>{" "}
            <span className="paraword3">much</span>{" "}
            <span className="paraword3">more.</span>{" "}
            <span className="paraword3">Join</span>{" "}
            <span className="paraword3">us</span>{" "}
            <span className="paraword3">to</span>{" "}
            <span className="paraword3">unlock</span>{" "}
            <span className="paraword3">your</span>{" "}
            <span className="paraword3">potential</span>{" "}
            <span className="paraword3">and</span>{" "}
            <span className="paraword3">build</span>{" "}
            <span className="paraword3">a</span>{" "}
            <span className="paraword3">successful</span>{" "}
            <span className="paraword3">career</span>{" "}
            <span className="paraword3">in</span>{" "}
            <span className="paraword3">the</span>{" "}
            <span className="paraword3">IT</span>{" "}
            <span className="paraword3">industry.</span>
          </p>

          <div className="buttons inabout">
            <div className="buttonwrapper">
              <button>Browse Courses</button>
            </div>
          </div>
        </div>
        <div className="aboutRightSide">
          <img src={aboutimage} className="aboutimage" alt="About us image" />
        </div>
      </section>
      <section className="courses">
        <h1>Courses</h1>
        <div className="coursesCards">
          <div class="card">
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="content">
              <div className="imagesdiv">
                <img src={frontend} alt="frontend" />
              </div>
              <h2 class="titleOfCard">Frontend</h2>
              <p className="courseDesc">
                Learn the basics of web development with HTML, CSS, and
                JavaScript. Build dynamic and interactive user interfaces with
                React. And learn to add complex animations using GSAP.
              </p>
              <span class="sub-title">4 Months</span>
            </div>
          </div>
          <div class="card">
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="content">
              <div className="imagesdiv">
                <img src={backend} alt="backend" />
              </div>
              <h2 class="titleOfCard">Backend</h2>
              <p className="courseDesc">
                Learn backend development with Node.js, Express, and MongoDB.
                Build RESTful APIs with JWT Authentication. And learn to create
                real time applications with Socket.io.
              </p>
              <span class="sub-title">6 Months</span>
            </div>
          </div>
          <div class="card">
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="content">
              <div className="imagesdiv">
                <img src={gd} alt="Grapic Design" />
              </div>
              <h2 class="titleOfCard">Graphic Design</h2>
              <p className="courseDesc">
                Learn Graphic Design with Adobe Photoshop and Canva. Create
                stunning looking Designs with Unique techniques and Design
                principles.
              </p>
              <span class="sub-title">3 Months</span>
            </div>
          </div>
          <div class="card">
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="content">
              <div className="imagesdiv">
                <img src={lang} alt="bProgramming" />
              </div>
              <h2 class="titleOfCard">Programming</h2>
              <p className="courseDesc">
                Explore the fundamentals of programming with C, C++, and Python.
                Develop problem-solving skills and write efficient code. Build
                real-world applications across multiple platforms.
              </p>
              <span class="sub-title">2 Months (per language)</span>
            </div>
          </div>
          <div class="card">
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="content">
              <div className="imagesdiv">
                <img src={wordc} alt="MS Word" />
              </div>
              <h2 class="titleOfCard">MS Word</h2>
              <p className="courseDesc">
                Master document creation with Microsoft Word. Learn advanced
                formatting, templates, and collaboration tools. Enhance your
                productivity with tips and tricks.
              </p>
              <span class="sub-title">3 Months</span>
            </div>
          </div>
          <div class="card">
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="wave3"></div>
            <div class="content">
              <div className="imagesdiv">
                <img src={excelc} alt="MS Excel" />
              </div>
              <h2 class="titleOfCard">MS Excel</h2>
              <p className="courseDesc">
                Dive into data management with Microsoft Excel. Understand
                formulas, pivot tables, and data visualization. And make
                informed decisions using advanced features.
              </p>
              <span class="sub-title">3 Months</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
