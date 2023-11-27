import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about grid-container">
      <h1>About App</h1>
      <p>DigiLoader is an app that contains some information about Digimon Card. This app was made as my Final Assignment of Mobile Device Programming Practical. That was created using React JS and a Digimon TCG API.</p>
      <h2>About Author</h2>
      <img src="https://avatars.githubusercontent.com/u/102032965?v=4" alt="foto.png" />
      <p>The initial name is Vincent, a.k.a Vincent Gregory Ginting. By the time I made this app I am on my 5th semester in Computer Engineering, Diponegoro University.</p>
    </div>
  );
}
