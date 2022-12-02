import { Column } from "./Column"
import { AppContainer } from "./styles"
import { AddNewItem } from './AddNewItem'

export const App = () =>  {
  return (
    <AppContainer>
      <Column text="Build the future"/>
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={() => console.log("Item created")}
      />
    </AppContainer>
  )
}