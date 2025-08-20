import "./Test3.css";
import LightRays from "./Animation/LightRays";
import SplitText from "./Animation/SplitText";
import ShinyText from "./Animation/ShinyText";
import ClickSpark from "./Animation/ClickSpark";
import SpotlightCard from "./Animation/SpotlightCard";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Magnet from "./Animation/Magent";
import BlurText from "./Animation/BlurText";
import StickerPeel from "./Animation/StickerPeel";
import logo from "./Jordan.gif";
export default function Test3() {
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
            <div className="circle-icon">S</div>
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
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            <h1>
              {" "}
              <ClickSpark
                sparkColor="#fff"
                sparkSize={20}
                sparkRadius={30}
                sparkCount={8}
                duration={400}
              >
                <BlurText
                  text="About US"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-2xl mb-8"
                />{" "}
              </ClickSpark>{" "}
            </h1>
          </div>
          <section className="majors-section">
            <h2 className="section-title">
              {" "}
              <p style={{ fontSize: "16px" }}>
                {" "}
                The First Service Team For Sofware Engineering at the Hashemite
                Uneversity , Established in 2025{" "}
              </p>
            </h2>

            <div className="majors-grid">
              <div className="major-card">
                <h3>
                  {" "}
                  <SpotlightCard
                    style={{ alignSelf: "center", width: "30vw" }}
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    Software
                  </SpotlightCard>
                </h3>
                <p>
                  Learn to design, develop, and maintain software systems using
                  engineering principles and best practices.
                </p>
              </div>
            </div>
          </section>

          <section className="additional-content">
            <h2>About Softians</h2>
            <p>
              Softians is a leading educational platform dedicated to providing
              high-quality resources and learning experiences for aspiring
              software professionals and computer scientists.
            </p>
            <p>
              Our mission is to bridge the gap between academic knowledge and
              industry requirements, empowering students with practical skills
              and cutting-edge technologies.
            </p>
            <p>
              With expert instructors and a comprehensive curriculum, we help
              you build a successful career in the ever-evolving tech industry.
            </p>
          </section>

          <section className="additional-content">
            <h1>
              <BlurText
                text="Why Choose Us?"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
              />{" "}
            </h1>
            <p>
              • Industry-relevant curriculum designed with input from tech
              leaders
            </p>
            <p>• Hands-on projects and real-world applications</p>
            <p>• Flexible learning paths tailored to your career goals</p>
            <p>• Supportive community of learners and mentors</p>
            <p>• Career guidance and job placement assistance</p>
          </section>
          <StickerPeel
            imageSrc={logo}
            width={200}
            rotate={30}
            peelBackHoverPct={20}
            peelBackActivePct={40}
            shadowIntensity={0.6}
            lightingIntensity={0.1}
            initialPosition={{ x: -100, y: 100 }}
          />
        </main>

        <footer id="footer">
          <div className="social-links">
            <button className="social-btn">
              <span className="material-icons">
                <Magnet padding={50} disabled={false} magnetStrength={5}>
                  <FacebookRoundedIcon />
                </Magnet>
              </span>
            </button>
            <button className="social-btn">
              <span className="material-icons">
                <Magnet padding={50} disabled={false} magnetStrength={5}>
                  <YouTubeIcon />
                </Magnet>
              </span>
            </button>
            <button className="social-btn">
              <span className="material-icons">
                <Magnet padding={50} disabled={false} magnetStrength={5}>
                  <LinkedInIcon />
                </Magnet>
              </span>
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
