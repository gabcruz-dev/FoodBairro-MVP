import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Items from "./Items/Items";
import axios from "axios";


function Estabelecimentos() {
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
      <section>
        <h1 className="capa-filmes">ESTABELECIMENTOS</h1>
        <Items lista={lista} />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Estabelecimentos;
