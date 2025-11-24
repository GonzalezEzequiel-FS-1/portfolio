import React from "react";

const PhoneShowcase = ({
  src,
  title = "Website Showcase",
  phoneWidth = 200,
}) => {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: `${phoneWidth}px`,
        aspectRatio: "9/16",
      }}
    >
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[36px] border-8 border-stone-950 shadow-lg overflow-hidden">
        <iframe
          title={title}
          src={src}
          className="absolute top-0 left-0 w-full h-full border-0"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        ></iframe>
      </div>

      {/* Phone notch */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-stone-950 rounded-full z-10"></div>

      <style jsx>{`
        iframe::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};

export default PhoneShowcase;
