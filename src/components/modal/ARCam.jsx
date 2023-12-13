import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import { useRef } from "react";
import { drawHand } from "../../utilities.js";

const ARCam = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      console.log(hand);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  runHandpose();
  return (
    <>
      <div className="relative">
        <Webcam
          className="rounded-lg left-0 right-0 text-center z-10 w-full h-full"
          ref={webcamRef}
        />
        <canvas
          ref={canvasRef}
          className="rounded-lg left-0 right-0 text-center z-20 absolute top-0 w-full h-full"
        />
      </div>
    </>
  );
};

export default ARCam;
