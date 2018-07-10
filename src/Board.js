import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Knight from './Knight';
import BoardSquare from './BoardSquare';
import { moveKnight, canMoveKnight } from './Game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Board extends Component {
    renderSquare(i) {
        const x = i % 30;
        const y = Math.floor(i / 30);
        return (
            <div key={i}
                style={{ width: '40px', height: '30px' }}>
                <BoardSquare x={x}
                    y={y}>
                    {this.renderPiece(x, y)}
                </BoardSquare>
            </div>
        );
    }

    renderPiece(x, y) {
        const [knightX, knightY] = this.props.knightPosition;
        if (x === knightX && y === knightY) {
            return <Knight />;
        }
    }

    handleSquareClick(toX, toY) {
        if (canMoveKnight(toX, toY)) {
            moveKnight(toX, toY);
        }
    }

    render() {
        const squares = [];
        for (let i = 0; i < 360; i++) {
            squares.push(this.renderSquare(i));
        }

        return (
            <div style={{
                width: '1200px',
                height: '360px',
                display: 'flex',
                flexWrap: 'wrap',
            }}>
                {squares}
            </div>
        );
    }
}

Board.propTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired
};

export default DragDropContext(HTML5Backend)(Board);