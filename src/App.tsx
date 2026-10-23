import { useState } from 'react'
import Cardapio from './cardapio'
import Header from './componentes/Header'
import Footer from './componentes/footer'
import './App.css'

function App() {
  const [pagina, setPagina] = useState('inicio')
  return (
    <div className="app">
     <Header setPagina={setPagina} />
<main>
    
<main>
  {pagina === 'inicio' ? (
    <>
      <h2>Bem-vindo ao Cafézo!</h2>
      <p>
        Somos uma cafeteria feita para quem gosta de um bom café,
        de um ambiente aconchegante e de momentos especiais.
      </p>
      <h2>Aqui na Cafézo você encontra o conforto que o café dos melhores grãos podem te oferecer.
        comum sabor reconfortante e com aromas que despertam os sentidos. Venha nos visitar e descubra o prazer de saborear um café de qualidade em um ambiente acolhedor.
      </h2>
    </>
  ) : (
    <Cardapio />
  )}
</main>

</main>

      <Footer/>
    </div>
  );
}
export default App;
