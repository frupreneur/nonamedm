import React from "react";
import { ShareButtons } from "@/ui";
export default function Share() {
 
  return (
    <div className="container">
      <h2>Hi, Your link has been generated Successfully </h2>
      <p>Now share your link with your friends:</p>

      <ShareButtons  />
    </div>
  );
}
