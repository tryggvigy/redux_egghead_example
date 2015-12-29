import React from 'react';
require('./Link.scss');

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href="#"
      className="Link"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;
