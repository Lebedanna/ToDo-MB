import {KeyboardEvent, useState} from "react"
import {AddButton, Panel, PanelContainter} from "./styles"
import {useTodo} from "../../context/TodoProvider"

export function AddPanel() {
  const {addItem} = useTodo()
  const [label, setLabel] = useState("")

  const handleAdd = () => {
    if (label !== "") {
      addItem(label)
      setLabel("")
    }
  }

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAdd()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setLabel(e.target.value)
  }

  return (
    <PanelContainter>
      <Panel
        onChange={handleChange}
        placeholder="What needs to be done?"
        value={label}
        onKeyUp={handleKeyUp}
      />
      <AddButton onClick={handleAdd}>ADD</AddButton>
    </PanelContainter>
  )
}
