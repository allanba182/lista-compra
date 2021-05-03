import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListaForm from './ListaForm';

function AdicionaItem() {
  const navigate = useNavigate();

  const addLista = (lista) => {
    if (!lista.text || /^\s*$/.test(lista.text)) {
      return;
    }

    if (typeof Storage !== 'undefined') {
      let itenslista = localStorage.getItem('Lista');
      if (itenslista == null) itenslista = [];
      else itenslista = JSON.parse(itenslista);

      itenslista.push(lista); // Adiciona um novo item na lista
      localStorage.setItem('Lista', JSON.stringify(itenslista));
    } else
      alert(
        'A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação',
      );
    navigate('/');
  };

  return (
    <div className="lista-app">
      <h1>Adicionar Item</h1>
      <ListaForm onSubmit={addLista} />
    </div>
  );
}

export default AdicionaItem;
