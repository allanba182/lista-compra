import React, { useState } from 'react';
import Lista from './Lista';
import { useNavigate } from 'react-router-dom';

function ListaList() {
  const [listas, setListas] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/adicionaItem');
  };

  const removeLista = (id) => {
    var jsonList = JSON.parse(localStorage.getItem('Lista'));
    var index;
    var itensLista = [];

    jsonList.forEach((item, index) => {
      itensLista.push(item);
    });

    itensLista.forEach((item, indice) => {
      if (item.id === id) index = indice;
    });
    console.log('Index: ' + index);
    if (index !== undefined) {
      itensLista.splice(index, 1);
      console.log(itensLista);
      localStorage.setItem('Lista', JSON.stringify(itensLista));
      setListas(itensLista);
    }
  };

  const completeLista = (id) => {
    const jsonList = JSON.parse(localStorage.getItem('Lista'));
    let updatedListas = [];

    updatedListas = jsonList.map((lista) => {
      if (lista.id === id) {
        lista.isComplete = !lista.isComplete;
      }
      return lista;
    });

    localStorage.setItem('Lista', JSON.stringify(updatedListas));
    setListas(updatedListas);
  };

  return (
    <div className="lista-app">
      <h1>Lista de Compra</h1>
      <button className="add-button" onClick={handleClick}>
        {' '}
        Cadastrar Item{' '}
      </button>
      <Lista
        listas={listas}
        completeLista={completeLista}
        removeLista={removeLista}
      />
    </div>
  );
}

export default ListaList;
