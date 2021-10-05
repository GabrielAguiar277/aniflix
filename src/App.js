import Menu from './components/Menu';
import Wallpaper from './components/Wallpaper';
import MainBoard from './components/MainBoard';

function App() {

  document.title = "Aniflix"

  return (
    <div className="app">
      <Menu/>
      <Wallpaper/>
      <MainBoard/>
    </div>
  )
}

export default App;
