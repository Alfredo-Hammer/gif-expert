import React, { useState } from "react";

export const AddCategorie = ({ onNewCategorie }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 2) return;
    onNewCategorie(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
