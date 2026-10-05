import './App.css'
import { Bevezeto } from './components/Bevezeto'
import { Footer, Header } from './components/Header_footer'
import { TablazatProps } from './components/Tablazat'

function App() {
  return (
    <>
      <div className="container">
        <Header/>
        <Bevezeto/>
        <TablazatProps/>
        
      </div>
      <Footer/>
    </>
  )
}

export default App
