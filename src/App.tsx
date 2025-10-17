import FAQ from "./components/FAQ.tsx";
import desktop_background from '../assets/images/background-pattern-desktop.svg';
import mobile_background from '../assets/images/background-pattern-mobile.svg';


const App = () => {
  return (
    <main>
        <img style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: -1,
    }} src={window.innerWidth > 600 ? desktop_background : mobile_background} alt="background"/>
        <FAQ/>
    </main>
  )
}

export default App