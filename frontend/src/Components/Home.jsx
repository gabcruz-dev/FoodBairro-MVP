import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import Items from "./Items/Items";
import axios from "axios";

function Home() {
  let [lista, setLista] = useState([]);

  useEffect(() => {
    let url = "https://foodbairro.onrender.com/";

    const getPosts = async () => {
      const { data: res } = await axios.get(url);
      setLista(res);
    };
    getPosts();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="capa-filmes">ESTABELECIMENTOS</h1>
      <Items lista={lista} />
      <Footer />
    </div>
  );
}

export default Home;
