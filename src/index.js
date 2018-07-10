import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { observe } from './Game';
import Board from './Board';

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
);

registerServiceWorker();
