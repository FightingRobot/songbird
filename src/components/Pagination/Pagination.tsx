import React from 'react';
import { LEVEL_NAME } from '../../helpers/constants';

interface IProps {
  level: number;
}

const Pagination: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="row p-3">
      <ul className="pagination w-100 d-flex flex-wrap">
        {LEVEL_NAME.map((item, index) => {
          const classes: string[] = [
            'w-100',
            'bg-secondary',
            'text-white',
            'border-0',
            'page-link',
            'text-center',
          ];
          if (index === props.level) {
            classes.push('bg-success');
          }

          return (
            <li key={item} className={'d-flex flex-grow-1 page-item'}>
              <a className={classes.join(' ')} href="#">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
