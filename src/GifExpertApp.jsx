import React, { useState } from "react";
import { AddCategorie } from "./components/AddCategorie";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categorie, setCategorie] = useState([ 'One Punch' ]);

  const onAddCategory = (newCategory) => {
    if (categorie.includes(newCategory)) return;

    setCategorie([ newCategory, ...categorie]);
  };

  return (
    <>
      <h1 className="title">GifExpertApp</h1>

      <AddCategorie onNewCategorie ={(value) => onAddCategory(value)} />

      {categorie.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
