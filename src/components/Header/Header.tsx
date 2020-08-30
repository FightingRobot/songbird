import React from 'react';
import { DATA_LINK } from '../../helpers/constants';

interface HeaderProps {
  score: number;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <div className="row p-1 pt-3 pb-3">
      <div className="col-md-10 text-white"><img src={`${DATA_LINK}logo.png`} alt="" /></div>
      <div className="col-md-2 text-white">Score: {props.score}</div>
    </div>
  );
};

export default Header;
