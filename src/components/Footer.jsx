import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube
} from "react-icons/ai";
import logo from "../assets/ShopNest Cropped logo(punchy).jpg";

const Footer = () => {
  return (
    <footer>
      <section>
        <img src={logo} alt="ShopNest" />
        <h2>ShopNest</h2>
      </section>

      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/95078278?v=4"}
          alt="Founder"
        />
        <h2>Sandeep Kumar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social media</h2>

        <article>
          <a href="https://youtube.com" target="blank">
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com" target="blank">
            <AiFillInstagram />
          </a>
          <a href="https://github.com" target="blank">
            <AiFillGithub />
          </a>
        </article>
      </aside>
    </footer>
  );
};

export default Footer;
