import './App.css'
import { Bevezeto } from './components/Bevezeto'
import { Card } from './components/Card'
import { Fontos } from './components/Fontos'
import { Footer, Header } from './components/Header_footer'
import { Kepek } from './components/Kepek'
import { ListakOl, ListakUl } from './components/Lista'
import { TablazatProps } from './components/Tablazat'
import { cardData } from './data/allatok'
import { kepekData } from './data/kepek'
import { listaData } from './data/lista'

function App() {
  return (
    <>
      <div className="container">
        <Header/>
        <Bevezeto/>
        <div className="row mb-2">
          {listaData.map((lista) => (
            lista.ordered?
            <ListakOl
              name = {lista.name}
              ordered = {lista.ordered}
              list= {lista.list}
            />
            :
            <ListakUl
              name = {lista.name}
              ordered = {lista.ordered}
              list= {lista.list}           
            />
          ))}
        </div>
        <TablazatProps/>
        <div className="row mb-1">
          {cardData.map((card) => (
            <Card
              name = {card.name}
              age = {card.age}
              weight = {card.weight}
              type = {card.type}
              endangered = {card.endangered}
              food = {card.food}
            />
          ))}
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h2>Az állatok kedvenc ételei</h2>  
          </div>          
        </div>
        <div className="row">
          {kepekData.map((kep) => (
            <Kepek
              name = {kep.name}
              src = {kep.src}
            />
          ))}
        </div>
        <Fontos/>
      </div>
      <Footer/>
    </>
  )
}

export default App
