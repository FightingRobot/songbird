import React from 'react';
import { MAX_SCORE } from '../../helpers/constants';

interface EndScreenProps {
  score: number;
  btnHander: () => void;
}

const EndScreen: React.FC<EndScreenProps> = (props: EndScreenProps) => {
  return (
    <div className="jumbotron jumbotron-fluid d-flex flex-column align-items-center bg-dark p-3 m-3 border rounded border-success">
      <div className="container bg-dark">
        {props.score === MAX_SCORE ? (
          <h3 className="display-4 text-white">
            Белиссимо! {MAX_SCORE} из {MAX_SCORE}! Идеальное знание всех треков!
          </h3>
        ) : (
            <h3 className="display-4 text-white">Поздравляю! Вы знаете треки на {props.score} из {MAX_SCORE}!</h3>
          )}
      </div>
      <button className="btn-success border rounded border-success" onClick={props.btnHander}>
        Заново
      </button>
    </div>
  );
}

export default EndScreen