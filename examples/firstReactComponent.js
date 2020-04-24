function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment);
    return (
      <button onClick={handleClick}>
        +{props.increment}
      </button>
    );
  }
  
  // Display
  function Display(props) {
    return (
      <div>{props.message}</div>
    );
  }
  
  // App
  function App() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
    return (
      <div>
        <Button onClickFunction={incrementCounter} increment={1} />
        <Button onClickFunction={incrementCounter} increment={5} />
        <Button onClickFunction={incrementCounter} increment={10} />
        <Button onClickFunction={incrementCounter} increment={100} />
        <Display message={counter}/>
      </div>
    );
  }
  
  ReactDOM.render(
      <App />,
      document.getElementById('mountNode'),
  );
// challenge

/*

function Button() {
  const [counter, setCounter] = useState(5);  
  return <button onClick={() => setCounter(counter*2)}>{counter}</button>
}

ReactDOM.render(
    <Button />,
    document.getElementById('mountNode'),
);

*/