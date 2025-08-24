import LightRays from "./Animation/LightRays";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SplitText from "./Animation/SplitText";
import ShinyText from "./Animation/ShinyText";
import Button from "@mui/material/Button";
import "./Test3.css";
import { useEffect, useState } from "react";
export default function Mobileapp() {
  const [add, setadd] = useState([]);
  const lis = add.map((l) => {
    return (
      <div id="subjects">
        <input id="inn" />
        <input id="inn" />
        <input id="inn" placeholder="ساعات المادة" />
      </div>
    );
  });
  return (
    <>
      <div id="container">
        <div className="light-rays">
          <LightRays
            raysOrigin="top-center"
            raysColor="white"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={30}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.05}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        <header id="header">
          <div className="logo-container">
            <div className="circle-icon"></div>

            <h1 className="logo-text">
              <SplitText
                style={{}}
                text="Softians"
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </h1>
          </div>
          <button className="home-btn">
            <span className="material-icons">
              <HomeRoundedIcon style={{ fontSize: "32px" }} />
            </span>
          </button>
        </header>
        <div id="content">
          <h1 className="welcome-text">
            <ShinyText
              text="Welcome To Softians Website"
              disabled={false}
              speed={3}
              className="custom-className"
            />
          </h1>
          <div className="App" id="Appp">
            <input placeholder="المعدل التراكمي السابق" />
            <br />
            <input placeholder="المعدل السابق" />
            <br />
            <h3 style={{ margin: "5px" }}>مواد الفصل</h3>
            <div id="subjects">
              <input id="inn" />
              <input id="inn" />
              <input id="inn" placeholder="ساعات المادة" />
            </div>
            {lis}

            <div id="foot">
              <Button
                variant="contained"
                id="but"
                onClick={(event) => {
                  setadd([...add, {}]);
                }}
              >
                Add
              </Button>
              <Button variant="contained" id="but">
                Calculate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
