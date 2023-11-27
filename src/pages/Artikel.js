import { useEffect, useState } from "react";
import "./Artikel.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Artikel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
  
      try {
        const results = await axios("http://localhost:3001/articles");
        console.log(results.data);
        setData(results.data.filter((i, limit) => limit < 36));
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }
      setIsLoading(false);
    };
  
    fetchData();
  }, []);

  const renderList = () => {
    return (
      <div className="item-container">
        {data.map((artikel, index) => (
          <div className="box" key={index}>
            <NavLink to={`/artikel/${artikel.title}`}>
              <div className="name-list">
                <h3>{artikel.title}</h3>
                <img className="img-list" src={artikel.gambar} alt={artikel.title} />
                <p>{artikel.description}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    );
  };
  

  const renderError = () => {
    if (isError) {
      return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          Gagal mengambil data. Silakan coba lagi nanti.
        </div>
      );
    }
  };

  return (
    <div className="random-page d-flex flex-column align-items-center">
      {renderError()}
      <h1 className="txt">Daftar Artikel</h1>
      {isLoading ? (
        <div className="text-white text-center mb-3">Sedang memuat...</div>
      ) : (
        <div className="container gifs mb-3">{renderList()}</div>
      )}
    </div>
  );
}

export default Artikel;
