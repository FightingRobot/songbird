import React from 'react';

function App() {
  const btnClasses: string[] = ['btn', 'w-100'];
  if (true) {
    btnClasses.push('btn-success');
  } else {
    btnClasses.push('btn-danger');
  }

  return (
    <div className="container-fluid bg-dark">
      {/* <Header score={score} />
      <Navigation level={level} /> */}
      <div className="row">
        <div className="col-md-12">
          {/* {birdList.length > 0 ? (
            <BirdCard
              isSecret={true}
              isCorrect={isCorrect}
              birdName={birdList[correctAnswer].birdName}
              birdImage={birdList[correctAnswer].birdImage}
              birdSound={birdList[correctAnswer].birdSound}
            />
          ) : null} */}
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-6 col-sm-12 h-100 mb-3">
          {/* <AnswerList
            list={birdList}
            clickHandler={toggleAnswer}
            madeAnswers={madeAnswers}
            correctAnswer={correctAnswer}
          /> */}
        </div>
        <div className="col-md-6 col-sm-12">
          {/* {birdList.length > 0 && isAnswerMade ? (
            <BirdCard
              isSecret={false}
              birdName={birdList[currentAnswer].birdName}
              birdDescription={birdList[currentAnswer].birdDescription}
              birdImage={birdList[currentAnswer].birdImage}
              birdSound={birdList[currentAnswer].birdSound}
              birdNameLatin={birdList[currentAnswer].birdNameLatin}
            />
          ) : (
              <div className="text-white">Прослушайте плеер и выберите подходящий вариант</div>
            )} */}
        </div>
      </div>
      <div className="row pt-3 pb-3">
        <div className="col-md-12">
          <button type="button"
            className={btnClasses.join(' ')}
          // onClick={controlButtonClick}
          >
            Next Level
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
