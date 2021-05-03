import React, { useState } from 'react';

function ListaForm(props) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput('');
  };

  return (
    <form className="lista-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione um item"
        value={input}
        name="text"
        className="lista-input"
        onChange={handleChange}
      />
      <button className="lista-button">Adicionar Item</button>
    </form>
  );
}

export default ListaForm;
