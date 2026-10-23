import './Header.css'
function Header({ setPagina }: { setPagina: (pagina: string) => void }) {
  return (
    <header>
      <h1>Cafeteria</h1>

<nav>
  <a
    href="#"
    onClick={(event) => {
      event.preventDefault()
      setPagina('inicio')
    }}
  >
    Início
  </a>

  <a
    href="#"
    onClick={(event) => {
      event.preventDefault()
      setPagina('cardapio')
    }}
  >
    Cardápio
  </a>

  <a href="#" onClick={(event) => event.preventDefault()}>
    Contato
  </a>
</nav>

    </header>
  )
}

export default Header