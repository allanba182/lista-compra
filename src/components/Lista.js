import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { RiCheckboxCircleLine } from 'react-icons/ri';

function Lista({ listas, completeLista, removeLista }) {
  (() => {
    listas = [];
    if (typeof Storage !== 'undefined') {
      let itensLista = JSON.parse(localStorage.getItem('Lista'));
      if (itensLista == null) {
      } else {
        itensLista.forEach((item, index) => {
          listas.push(item);
        });
      }
    } else
      alert(
        'A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!',
      );
  })();

  return listas.map((lista, index) => (
    <div
      className={lista.isComplete ? 'lista-row complete' : 'lista-row'}
      key={index}
    >
      <div key={lista.id}> {lista.text}</div>

      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeLista(lista.id)}
          className="delete-icon"
        />
        <RiCheckboxCircleLine
          onClick={() => completeLista(lista.id)}
          className="complete-icon"
        />
      </div>
    </div>
  ));
}

export default Lista;
