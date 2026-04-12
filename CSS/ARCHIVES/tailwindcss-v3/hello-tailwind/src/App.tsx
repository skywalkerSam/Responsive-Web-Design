// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import appLogo from "/favicon.svg";
import PWABadge from "./PWABadge.tsx";
import "./App.css";
import interstellar1 from "./assets/interstellar1.png";
import interstellar2 from "./assets/interstellar2.png";
import interstellar3 from "./assets/interstellar3.png";
import interstellar4 from "./assets/interstellar4.png";
import idk from "./assets/idk.jpg";
import starboyLogo from "/logo.png";

function App() {
  return (
    <>
      <div>
        <a href="https://skywalkerSam.dev" target="_blank">
          <img
            src={starboyLogo}
            className="starboyLogo inline-block"
            alt="Starboy logo"
          />
        </a>
      </div>
      <h1 className="font-sans font-extralight mt-3">
        Picture Gallery with <em>Tailwind CSS</em>
      </h1>
      <div>
        <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 mt-12">
          <div className="transform scale-110 -rotate-6">
            <img src={interstellar1} alt="" loading="lazy"></img>
          </div>
          <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
            <img src={interstellar3} alt="" loading="lazy"></img>
          </div>
          <div className="transform scale-150 translate-y-11">
            <img src={interstellar2} alt="" loading="lazy"></img>
          </div>
          <div className="transform translate-y-24">
            <img src={interstellar4} alt="" loading="lazy"></img>
          </div>
          <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
            <img src={idk} alt="" loading="lazy"></img>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={appLogo} className="logo inline-block" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="logo react inline-block"
              alt="React logo"
            />
          </a>
          <br />
          <small>&copy; Copyright 12024, Starboy Inc.</small>
        </div>
      </footer>
      <PWABadge />
    </>
  );
}

export default App;
