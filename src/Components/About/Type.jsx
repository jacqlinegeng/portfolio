import React from "react";
import TypeWriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <TypeWriter
        options={{
          strings: ["Full Stack Web Developer", "Consultant", "CPA", "YouTuber", "Writer"],
          autoStart: true,
          loop: true,
          delay: 80,
          deleteSpeed: 20
        }}
        />
    </>
  );
};