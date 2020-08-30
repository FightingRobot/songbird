import React, { useState, useEffect, useRef } from 'react';
import { ICardInfo } from './helpers/interfaces';

import { generateCorrectAnswer, shuffleAnswers } from './helpers/functions';
import { DATA_LINK, MAX_LEVELS } from './helpers/constants';

import data from './assets/data';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import AnswerList from './components/AnswerList/AnswerList';
import Pagination from './components/Pagination/Pagination';
import EndScreen from './components/EndScreen/EndScreen';

const App: React.FC = () => {
  const [score, changeScore] = useState<number>(0);
  const [level, changeLevel] = useState<number>(0);
  const [cardList, changeCardList] = useState<ICardInfo[]>([]);
  const [correctAnswer, changeCorrectAnswer] = useState<number>(0);
  const [currentAnswer, changeCurrentAnswer] = useState<number>(0);
  const [isCorrect, toggleCorrect] = useState<boolean>(false);
  const [clickedAnswers, changeClickedAnswers] = useState<number[]>([]);
  const [awardedPoints, decrementAwardedPoints] = useState<number>(5);
  const [isGameFinished, toggleFinished] = useState<boolean>(false);

  const successAudio = useRef<HTMLAudioElement>(new Audio(`${DATA_LINK}right.wav`));
  const failureAudio = useRef<HTMLAudioElement>(new Audio(`${DATA_LINK}wrong.mp3`));

  useEffect(() => {
    changeCardList(shuffleAnswers<ICardInfo>(data[level]))

    changeCorrectAnswer(generateCorrectAnswer());
    toggleCorrect(false);
    toggleFinished(false);
    changeClickedAnswers([]);
  }, [level]);

  useEffect(() => {
    if (isCorrect) {
      changeClickedAnswers(cardList.map((item, index) => index));
    }
  }, [isCorrect]);

  useEffect(() => {
    console.log('Правильный ответ:' + correctAnswer)
  }, [cardList]);

  const onAnswerClick = (index: number): void => {
    if (index === correctAnswer) {
      if (!isCorrect) {
        successAudio.current.play();
      }

      toggleCorrect(true);

      if (!clickedAnswers.includes(index)) {
        changeScore(score + awardedPoints);
        decrementAwardedPoints(5);
      }
    } else {
      if (!clickedAnswers.includes(index)) {
        decrementAwardedPoints(awardedPoints - 1);
        failureAudio.current.play();
      }
    }

    if (!clickedAnswers.includes(index)) {
      changeClickedAnswers([...clickedAnswers, index]);
    }

    changeCurrentAnswer(index);
  }

  const nextLevelSwitch = (): void => {
    if (isCorrect) {
      if (level === MAX_LEVELS) {
        toggleFinished(true);
      } else {
        changeLevel(level + 1);
      }
    }
  }

  const btnClasses: string[] = ['btn', 'w-100'];
  if (isCorrect) {
    btnClasses.push('btn-success');
  } else {
    btnClasses.push('btn-danger');
  }

  const restart = () => {
    changeCardList(data[level])

    changeCorrectAnswer(generateCorrectAnswer());
    toggleCorrect(false);
    toggleFinished(false);
    changeClickedAnswers([]);
    changeScore(0);
    changeLevel(0);
  }

  if (isGameFinished) {
    return <EndScreen score={score} btnHander={restart} />;
  }

  return (
    <div className="container-fluid bg-dark">
      <Header score={score} />
      <Pagination level={level} />
      <div className="row">
        <div className="col-md-12">
          {cardList.length > 0 ? (
            <Card
              isSecret={true}
              isCorrect={isCorrect}
              name={cardList[correctAnswer].name}
              image={cardList[correctAnswer].image}
              sound={cardList[correctAnswer].sound}
            />
          ) : null}
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-6 col-sm-12 h-100 mb-3">
          <AnswerList
            list={cardList}
            clickHandler={onAnswerClick}
            clickedAnswers={clickedAnswers}
            correctAnswer={correctAnswer}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          {cardList.length > 0 && clickedAnswers.length !== 0 ? (
            <Card
              isSecret={false}
              name={cardList[currentAnswer].name}
              description={cardList[currentAnswer].description}
              image={cardList[currentAnswer].image}
              sound={cardList[currentAnswer].sound}
              nameLatin={cardList[currentAnswer].nameLatin}
            />
          ) : (
              <div className="text-white">Прослушайте плеер и выберите подходящий вариант</div>
            )}
        </div>
      </div>
      <div className="row pt-3 pb-3">
        <div className="col-md-12">
          <button type="button"
            className={btnClasses.join(' ')}
            onClick={nextLevelSwitch}
          >
            Next Level
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
