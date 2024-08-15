"use client";
import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

export default function repro() {
  const ReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=""><ReactPlayer
        url="https://www.youtube.com/watch?v=he_dPEEWeLY&t=302s"
        controls={false}
        config={{
          youtube: {
            playerVars: { showinfo: 0 },
          },
          facebook: {
            appId: "12345",
          },
        }}
      /></div>
      
    </main>
  );
}
