import {AppContainer, Header} from "./styles"
import AppLogo from "./assets/to-do-logo.png"
import {AddPanel, ItemsList} from "./components"

export default function App() {
  return (
    <AppContainer>
      <Header>
        <img src={AppLogo} />
      </Header>
      <AddPanel />
      <ItemsList />
    </AppContainer>
  )
}
