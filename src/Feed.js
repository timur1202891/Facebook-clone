import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import Post from "./Post";
import MessageSender from "./MessageSender";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://images.squarespace-cdn.com/content/v1/5ad77a37b40b9d311bfbdb76/1526404809371-6NT43LO3SJVZ7666CL3C/shutterstock_370707923.jpg?format=1500w"
        message="WOW this works!"
        timestamp="This is a timestamp"
        username="Timur"
        image="https://pbs.twimg.com/media/EUlrUO-U4AAGJ8D.png"
      />
      <Post
        profilePic="https://images.squarespace-cdn.com/content/v1/5ad77a37b40b9d311bfbdb76/1526404809371-6NT43LO3SJVZ7666CL3C/shutterstock_370707923.jpg?format=1500w"
        message="WOW this works!"
        timestamp="This is a timestamp"
        username="Timur"
        image="https://ico.org.uk/media/4017813/childrens-code-website-blue.jpg"
      />
      <Post
        profilePic="https://images.squarespace-cdn.com/content/v1/5ad77a37b40b9d311bfbdb76/1526404809371-6NT43LO3SJVZ7666CL3C/shutterstock_370707923.jpg?format=1500w"
        message="WOW this works!"
        timestamp="This is a timestamp"
        username="Timur"
        image="https://sm.pcmag.com/pcmag_au/guide/t/the-best-p/the-best-programs-for-learning-to-code_tk9b.jpg"
      />
    </div>
  );
};

export default Feed;
