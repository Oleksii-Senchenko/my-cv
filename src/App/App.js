import MainSection from "../Components/MainSection/MainSection";
import SideSection from "../Components/SideSection/SideSection";
import css from './App.module.css'
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div className={css.main}>
        <SideSection />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
