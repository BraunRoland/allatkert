import './App.css'
import { Bevezeto } from './components/Bevezeto'
import { Footer, Header } from './components/Header_footer'

function App() {
  return (
    <>
      <div className="container">
        <Header/>
        <Bevezeto/>
      </div>
      <Footer/>
    </>
  )
}

export default App
