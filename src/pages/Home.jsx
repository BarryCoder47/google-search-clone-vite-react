import GoogleSearch from "../components/GoogleSearch";
import React from "react";

const Home = () => (
  <div className="flex flex-col items-center justify-center h-[60vh]">
    <h1 className="text-4xl mb-6 font-bold text-blue-600">Google Clone 2.0</h1>
    <GoogleSearch></GoogleSearch>
  </div>
);

export default Home;
