import './App.css'

function App() {
  const blackCell = {
    backgroundColor: "#000"
  }

  const whiteCell = {
    backgroundColor: "#fff"
  }

  const rows = []

  for (let i = 0; i < 8; i++) {
    const cells= []
    for (let j = 0; j < 8; j++) {
      const isBlack = (i + j) % 2 === 1
      cells.push(
        <div
          style={isBlack ? blackCell : whiteCell}
          className='box'
        ></div>)
    }
    rows.push(<div>{cells}</div>)
  }

  return (
    <>
      <h1>Chessboard Exercise</h1>
      <div className="chessboard">{rows}</div>
    </>
  )
}

export default App
