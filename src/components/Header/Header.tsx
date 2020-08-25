import React from 'react';

interface HeaderProps {
  score: number;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <div className="row p-3">
      <div className="col-md-10 text-white">Guess the meme</div>
      <div className="col-md-2 text-white">Score: {props.score}</div>
    </div>
  );
};

export default Header;
