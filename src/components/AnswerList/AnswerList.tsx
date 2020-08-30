import React from 'react';
import { ICardInfo } from '../../helpers/interfaces';
import './AnswerList.scss';

interface IProps {
  list: ICardInfo[];
  clickedAnswers: number[];
  correctAnswer: number;
  clickHandler: (index: number) => void;
}

const AnswerList: React.FC<IProps> = ({ list, clickHandler, clickedAnswers, correctAnswer }) => {
  return (
    <ul className="list-group">
      {list.map((item, index) => {
        const classes: string[] = ['list-group-item', 'list-group-item-action', 'p-3', 'border-bottom', 'border-light'];
        if (clickedAnswers.includes(index)) {
          if (index === correctAnswer) {
            classes.push('indicator_success');
          } else {
            classes.push('indicator_danger');
          }
        }
        return (
          <li key={item.name} className={classes.join(' ')} onClick={() => clickHandler(index)}>
            {<div className="indicator"></div>}{item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default AnswerList;
