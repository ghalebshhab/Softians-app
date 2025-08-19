import CircleIcon from "@mui/icons-material/Circle";
import TuneIcon from "@mui/icons-material/Tune";
import SplitText from "./Animation/SplitText";
import LightRays from "./Animation/LightRays";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShinyText from "./Animation/ShinyText";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ClickSpark from "./Animation/ClickSpark";
import ShapeBlur from "./Animation/ShapeBlur";
import SpotlightCard from "./Animation/SpotlightCard";
export default function Test2() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <>
      <div
        id="Container"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "100vh",
          overflowX: "hidden",
          position: "relative",
          backgroundColor: "#000", // optional: background
        }}
      >
        {/* Light Rays Section */}
        <div
          style={{
            width: "100%",
            height: "90vh",
            position: "relative",
          }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="white"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        {/* Header */}
        <div
          id="Header"
          style={{
            display: "flex",
            flexDirection: "row",
            position: "fixed",
            width: "100%",
            top: 0,
            zIndex: 1000,
            justifyContent: "space-between",
            padding: "10px 5%",
            boxSizing: "border-box",
          }}
        >
          <div
            id="name"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CircleIcon style={{ color: "white", fontSize: "32px" }} />
            <SplitText
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
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>

          <div id="threeicon" style={{ display: "flex", alignItems: "center" }}>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              <HomeRoundedIcon style={{ color: "white", fontSize: "32px" }} />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div
          id="content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: "calc(90vh + 20px)", // push below light rays
            padding: "0 5%",
            boxSizing: "border-box",
          }}
        >
          <div style={{ marginBottom: "40px", textAlign: "center" }}>
            <ShinyText
              text="Welcome To Softians Website"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </div>

          <div
            id="Majors"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              width: "100%",
              maxWidth: "800px",
            }}
          >
            <ClickSpark
              sparkColor="#fff"
              sparkSize={20}
              sparkRadius={30}
              sparkCount={8}
              duration={400}
            >
              <div style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                Majors
              </div>
            </ClickSpark>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "100%",
                alignItems: "center",
              }}
            >
              {[
                "Software",
                "Computer Science",
                "Artificial Intelligence",
                "Cyber Security",
              ].map((major, idx) => (
                <SpotlightCard
                  key={idx}
                  style={{ width: "80%", maxWidth: "400px" }}
                  className="custom-spotlight-card"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  {major}
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div
          id="Bottom"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "10px 0",
            zIndex: 1000,
            backgroundColor: "transparent",
          }}
        >
          <div
            id="Links"
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              <FacebookRoundedIcon
                style={{ color: "white", fontSize: "32px" }}
              />
            </button>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              <YouTubeIcon style={{ color: "white", fontSize: "32px" }} />
            </button>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              <LinkedInIcon style={{ color: "white", fontSize: "32px" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
