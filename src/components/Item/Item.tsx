import {TTodoItem} from "../../context/types"
import {ActionButton, DeleteButton, ItemContainer, TextContainer} from "./styles"
import Circle from "../../assets/circle.svg?react"
import Check from "../../assets/check.svg?react"
import Delete from "../../assets/delete.svg?react"
import {useTodo} from "../../context/TodoProvider"

type TItemProps = {
  item: TTodoItem
}
export function Item({item}: TItemProps) {
  const {setItemStatus, deleteItem} = useTodo()

  return (
    <ItemContainer>
      <ActionButton onClick={() => setItemStatus(item.id, !item.isDone)} data-testid="action-button">
        {item.isDone ? <Check data-testid="check-icon"/> : <Circle data-testid="circle-icon"/>}
      </ActionButton>
      <TextContainer isDone={item.isDone}>{item.text}</TextContainer>
      <DeleteButton onClick={() => deleteItem(item.id)} data-testid="delete-button">
        <Delete />
      </DeleteButton>
    </ItemContainer>
  )
}