import React from 'react';
import { ICardInfo } from '../../helpers/interfaces';

interface IProps {
  list: ICardInfo[];
  clickedAnswers: number[];
  correctAnswer: number;
  clickHandler: (index: number) => void;
}

const AnswerList: React.FC<IProps> = ({ list, clickHandler, clickedAnswers, correctAnswer }) => {
  return (
    <div className="list-group">
      {list.map((item, index) => {
        const classes: string[] = ['list-group-item', 'list-group-item-action', 'p-3'];
        if (clickedAnswers.includes(index)) {
          if (index === correctAnswer) {
            classes.push('list-group-item-success');
          } else {
            classes.push('list-group-item-danger');
          }
        } else {
          classes.push('list-group-item-dark');
        }
        return (
          <li key={item.name} className={classes.join(' ')} onClick={() => clickHandler(index)}>
            {item.name}
          </li>
        );
      })}
    </div>
  );
};

export default AnswerList;
