import React, { useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { DATA_LINK } from '../../helpers/constants';

interface CardProps {
  isSecret: boolean;
  name: string;
  image: string;
  sound: string;
  isCorrect?: boolean;
  nameLatin?: string;
  description?: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  let name = props.name;
  let image = props.image;
  const sound = props.sound;
  let imgClass = '';

  const audioRef = useRef<any>();

  if (props.isSecret) {
    imgClass = 'w-75';

    if (!props.isCorrect) {
      name = '******';
      image = 'placeholder.png';
    } else {
      const audio = audioRef.current.audio.current;
      audio.pause();
      audio.currentTime = 0;
    }
  }

  return (
    <div className="card border border-light bg-dark p-2">
      <div className="row no-gutters">
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img src={`${DATA_LINK}${image}`} alt="Birdy" className={'card-img ' + imgClass} />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            {props.isSecret ? null : (<small className='text-muted'>Исполнитель</small>)}
            <div className="card-title text-white">{name}</div>
            {props.nameLatin ? (
              <>
                <small className='text-muted'>Название</small>
                <div className="card-title text-white">{props.nameLatin}</div>
              </>
            ) : null}
            <hr className="bg-light" />
            <AudioPlayer
              className="bg-dark border border-light"
              // layout='horizontal'
              ref={audioRef}
              autoPlay={false}
              autoPlayAfterSrcChange={false}
              showJumpControls={false}
              src={`${DATA_LINK}${sound}`}
            />
          </div>
        </div>
        <p className="text-white">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;