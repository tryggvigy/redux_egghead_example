import React from 'react';

export default function Header({
  name
}) {
  return (
    <header className="Header">
      <h1 className="Header__title">{name}</h1>
    </header>
  );
}
