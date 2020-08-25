import React, { useState, useEffect, useRef } from 'react';

import Header from './components/Header/Header'
import Pagination from './components/Pagination/Pagination'

const App: React.FC = () => {
  const [score, changeScore] = useState(0);
  const [level, changeLevel] = useState(0);

  const btnClasses: string[] = ['btn', 'w-100'];
  if (true) {
    btnClasses.push('btn-success');
  } else {
    btnClasses.push('btn-danger');
  }

  return (
    <div className="container-fluid bg-dark">
      <Header score={score} />
      <Pagination level={level} />
      <div className="row">
        <div className="col-md-12">

        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-6 col-sm-12 h-100 mb-3">

        </div>
        <div className="col-md-6 col-sm-12">

        </div>
      </div>
      <div className="row pt-3 pb-3">
        <div className="col-md-12">
          <button type="button"
            className={btnClasses.join(' ')}

          >
            Next Level
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
