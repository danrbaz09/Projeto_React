function Cardapio() {
  return (
    <main>
      <h2>Nosso cardápio</h2>

      <div className="cardapio">
        <div className="cafe">
          <h3>Espresso Clássico</h3>
          <p>Café forte e encorpado, preparado na hora.</p>
          <strong>R$ 7,00</strong>
        </div>

        <div className="cafe">
          <h3>Cappuccino Cremoso</h3>
          <p>Café com leite vaporizado e espuma cremosa.</p>
          <strong>R$ 12,00</strong>
        </div>

        <div className="cafe">
          <h3>Latte</h3>
          <p>Espresso com leite vaporizado.</p>
          <strong>R$ 10,00</strong>
        </div>

        <div className="cafe">
          <h3>Mocha</h3>
          <p>Café com leite e chocolate.</p>
          <strong>R$ 13,00</strong>
        </div>

        <div className="cafe">
          <h3>Chocolate Quente</h3>
          <p>Bebida cremosa de chocolate.</p>
          <strong>R$ 11,00</strong>
        </div>
      </div>
    </main>
  )
}

export default Cardapio
