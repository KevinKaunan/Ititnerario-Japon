import monteFuji from "./monteFuji.jpg";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  const THREE_DAYS_IN_MS = 97 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={monteFuji} className='App-logo' alt='logo' />
        <div className='contador'>
          <h4>Tiempo restante para ir a japón</h4>
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
      </header>
      <div></div>
    </div>
  );
}

export default App;
