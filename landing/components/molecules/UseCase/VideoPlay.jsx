import assets from "assets";
import Image from "next/image";
import React from "react";

const VideoPlay = () => {
  return (
    <button className="outline-none col-span-8 relative h-[28.75rem] rounded-l-md">
      <img
        src="/images/multicloud-whiteboard.jpg"
        alt="multicloud whiteboard"
        className="h-full w-full object-cover absolute top-0 left-0 right-0 rounded-l-md"
      />
      <div className="absolute top-0 left-0 right-0 h-full w-full bg-black/40 transition-colors ease-in hover:bg-black/30 rounded-l-md py-24 px-8 flex items-center justify-center">
        <Image src={assets.icons.VIDEO_PLAY} height={96} width={96} />
      </div>
    </button>
  );
};

export default VideoPlay;
