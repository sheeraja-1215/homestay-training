import React from "react";
import Feedback from "./Feedback";
import ChatBox from "./ChatBox";
import Templates from "./Templates";
import Modules from "./Modules";

const Home = () => {
  return (
    <div className="p-6">

      {/* Templates Section */}
      <div id="templates" className="mt-8">
        <Templates />
      </div>

      {/* Training Modules Section */}
      <div id="modules" className="mt-8">
        <Modules />
      </div>

      {/* Feedback */}
      <Feedback />

      {/* Peer-to-Peer Chatbox */}
      <ChatBox />
    </div>
  );
};

export default Home;

