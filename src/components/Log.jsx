
const Log = ({turns}) => {
  return (
    <ol id="log">
        {turns.map(turn => {
            const {square, player} = turn;
            const {rowIndex, colIndex} = square;
            return (
                <li key={`${rowIndex}-${colIndex}`} className="turn">
                    <span>{`${player} `}</span>
                    placed an <span className="color-marker" style={{color: player === "X" ? "crimson" : "mediumblue"}}>{player}</span> in row <span className="bold">{rowIndex + 1}</span>, column <span className="bold">{colIndex + 1}</span>
                </li>
            )
        })}
    </ol>
  )
};

export default Log;
