import React from "react";
import PhoneShowcase from "../components/PhoneShowcase";

const Showcase = () => {
  const sites = {
    egwebdev: {
      url: "https://www.egwebdev.com/showcase/dealer",
      title: "Dealer Website",
    },
    agpgraphx: {
      url: "https://www.agpgraphx.com",
      title: "AgpGraphx HomePage",
    },
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-8" onClick={()=>console.log("testing")}>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <PhoneShowcase
          src={sites.egwebdev.url}
          title={sites.egwebdev.title}
          phoneWidth={360} // optional, defaults to 200
        />

        {/* Add more PhoneShowcase components as needed */}
        <PhoneShowcase
          src={sites.agpgraphx.url}
          title={sites.agpgraphx.title}
          phoneWidth={360} // optional, defaults to 200
        />
      </div>
    </div>
  );
};

export default Showcase;
