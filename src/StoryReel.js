import React from "react";
import Story from "./Story";
import "./StoryReel.css";
const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://itforce.ua/wp-content/uploads/5_890.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5EY2oL43EcR8bEs4fMoaA6eRoP8ZikE6Tg&usqp=CAU"
        title="Abdulin B"
      />
      <Story
        image="https://crello-wordpress.s3.eu-west-1.amazonaws.com/create/wp-content/uploads/2021/03/instagram-posts-supernew.png"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRB9g8pLH0enr6TeCFjnWQjknIHCi-1Nh6vA&usqp=CAU"
        title="Agalenova Z"
      />
      <Story
        image="https://live.staticflickr.com/65535/48625608907_e02eb18348_o.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ebqTYrQHdYD_gm1rElRM-Srz6cYytsnrVA&usqp=CAU"
        title="Kachiev T"
      />
      <Story
        image="https://cs1.livemaster.ru/storage/27/db/6d60b29e2b493da85a1596030b0w--dizajn-i-reklama-shablony-dlya-postov-v-instagram.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGeDVq5cFHlS4-w_GNafEU5beBI8qZsyTUQ&usqp=CAU"
        title="Kazakbaev N"
      />
      <Story
        image="https://i.pinimg.com/564x/5e/6e/1c/5e6e1c4c624f1ba8fab3aa7615949890.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUaPPbfA4ORV8nPVzFxkAGrNsYvwHky-_e-g&usqp=CAU"
        title="Asher S"
      />
    </div>
  );
};

export default StoryReel;
