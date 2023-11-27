import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import "./Artikeldetail.css";
import axios from "axios";

export default function Artikeldetail() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { title } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
  
      try {
        const results = await axios(`http://localhost:3001/articles?title=${title}`);
        setData(results.data);
        console.log(data);
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }
      setIsLoading(false);
    };
  
    fetchData();
  }, []);


  return (
    <div className="detail-page">
      <h1 className="txt">Article Details</h1>
      {data === undefined ? (
        "Loading..."
      ) : (
        <>
          {data.map((item, index)=> {
            return (
              <div className="article-detail" key={index}>
          <div>
            <NavLink to="/artikel">
              <img src="/icon-40.png" alt="" />
            </NavLink>
          </div>
          <div className="column1">
            <img className="article-img" src={item.gambar} alt="" />
          </div>
          <div className="column2">
            <div className="article-title">
              <p> {item.title} </p>
            </div>
            <div className="article-description">{item.description}</div>
            <div className="article-user">{item.user}</div>
            <div className="article-link">
              <a href={item.halaman} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        </div>
            )
          })}
        </>
        
      )}
    </div>
  );
}
