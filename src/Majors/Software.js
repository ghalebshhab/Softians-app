import LightRays from "../Animation/LightRays";
import SplitText from "../Animation/SplitText";
import "../Test.css";
import ShinyText from "../Animation/ShinyText";
import ClickSpark from "../Animation/ClickSpark";
import SpotlightCard from "../Animation/SpotlightCard";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Magnet from "../Animation/Magent";
import BlurText from "../Animation/BlurText";
import StickerPeel from "../Animation/StickerPeel";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import Sapp from "../Sapp";
export default function Software() {
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

        <main id="content">
          <h1 className="welcome-text">
            <ShinyText
              text="Welcome To Softians Website"
              disabled={false}
              speed={3}
              className="custom-className"
            />
          </h1>
          <h3 style={{ textAlign: "center" }}>Software Page</h3>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
          </div>
          <div className="majors-grid">
            <div className="major-card">
              <h3>
                {" "}
                <a
                  href="https://drive.google.com/drive/folders/106XG-xMtFvzHlOmAQ2zvFiZhx6ArJc8k"
                  target="blank"
                  title="Go To Sotware Materials"
                >
                  {" "}
                  <SpotlightCard
                    style={{ alignSelf: "center", width: "30vw" }}
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    Software Materilas
                  </SpotlightCard>
                </a>
              </h3>
            </div>
          </div>
        </main>

        <footer id="footer">
          <div className="social-links">
            <button className="social-btn">
              <span className="material-icons">
                <a
                  href="https://www.facebook.com/share/g/17GrEYsQpL/"
                  target="blank"
                  title="Our Facebook"
                >
                  {" "}
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <FacebookRoundedIcon />
                  </Magnet>
                </a>
              </span>
            </button>
            <button className="social-btn">
              <span className="material-icons">
                <a
                  href="https://www.youtube.com/@SOFTIANS_Channel"
                  target="blank"
                  title="Our YouTube"
                >
                  {" "}
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <YouTubeIcon />
                  </Magnet>
                </a>
              </span>
            </button>
            <button className="social-btn">
              <span className="material-icons">
                <a
                  href="https://www.linkedin.com/company/softinas-hu/"
                  target="blank"
                  title="Our LinkedIn"
                >
                  {" "}
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <LinkedInIcon />
                  </Magnet>
                </a>
              </span>
            </button>
            <button className="social-btn">
              <span className="material-icons">
                <a
                  href="https://www.instagram.com/softians.hu/"
                  target="blank"
                  title="Our Instagram"
                >
                  {" "}
                  <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <InstagramIcon />
                  </Magnet>
                </a>
              </span>
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
