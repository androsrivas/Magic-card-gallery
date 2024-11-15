import Card from "./components/molecules/Card/Card"
import CardProvider from "./context/CardContext/CardProvider"

function App() {

  return (
    <>
      <CardProvider>
        <Card />
      </CardProvider>
    </>
  )
}

export default App
