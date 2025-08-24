import LightRays from "../Animation/LightRays";
import SplitText from "../Animation/SplitText";
export default function Computers() {
  return (
    <>
      <div
        id="container"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "90vh",
            position: "relative",
            zIndex: "-1",
            color: "white",
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
        <div
          style={{
            color: "white",
            position: "absolute",
            zIndex: "1000",
            alignSelf: "center",
          }}
        >
          {" "}
          <h1 style={{ display: "flex", alignSelf: "center", color: "white" }}>
            <SplitText
              style={{}}
              text="Welcome to Computer Science Page"
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
      </div>
    </>
  );
}
