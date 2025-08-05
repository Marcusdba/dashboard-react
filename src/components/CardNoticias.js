import React, { useEffect, useState } from "react";
import { buscarNoticias } from "../services/noticiasService";

function CardNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarNoticias() {
      const dados = await buscarNoticias();
      if (dados) setNoticias(dados);
      setLoading(false);
    }
    carregarNoticias();
  }, []);

  if (loading) {
    return (
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Últimas Notícias</h5>
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  if (!noticias.length) {
    return (
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Últimas Notícias</h5>
          <p>Nenhuma notícia encontrada.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Últimas Notícias de Tecnologia</h5>
        <ul className="list-group">
          {noticias.map((noticia, index) => (
            <li key={index} className="list-group-item">
              <a href={noticia.url} target="_blank" rel="noopener noreferrer">
                {noticia.title}
              </a>
              <br />
              <small>{noticia.source.name}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardNoticias;
