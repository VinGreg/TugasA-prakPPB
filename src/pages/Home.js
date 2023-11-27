import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="menu-flex">
      <div className="">
        <h2 className="title-cat">Welcome to DigiLoader, one of the best Digimon TCG Database </h2>
        <div className="leftside">
          <Link to="/cards">
            <div className="item">
              <img src="https://th.bing.com/th/id/OIG.8qTG8UJs0sn4MR3ebNgG?pid=ImgGn" alt="list.jpg" />
              <p>Card List</p>
            </div>
          </Link>
          <Link to="/search">
            <div className="item">
              <img src="https://th.bing.com/th/id/OIG.sVqW4ynsOZRRFPlYDaQF?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn" alt="" />
              <p>Search</p>
            </div>
          </Link>
          <Link to="/artikel">
            <div className="item">
              <img src="https://th.bing.com/th/id/OIG.n4_sf56LAjI0qBS1g068?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn" alt="" />
              <p>Artikel</p>
            </div>
          </Link>
          <Link to="/about">
            <div className="item">
              <img src="https://th.bing.com/th/id/OIG.4h2T6BDv4FIAwVtHm7XE?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn" alt="" />
              <p>About</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
