import {useTodo} from "../../context/TodoProvider"
import {Item} from "../Item"
import {
  ClearButton,
  Counter,
  Header,
  InfoMessage,
  ItemsContainer,
} from "./styles"
import Clear from "../../assets/clear.svg?react"
import {Tabs, TTab} from "../Tabs"
import {useMemo, useState} from "react"

export function ItemsList() {
  const [tab, setTab] = useState<TTab>("all")

  const {items, clearCompletedItems} = useTodo()
  console.log(items)

  const completedItems = items.filter((item) => item.isDone)
  const activeItems = items.filter((item) => !item.isDone)

  const visibleItems = useMemo(() => {
    if (tab === "active") {
      return activeItems
    }
    if (tab === "completed") {
      return completedItems
    }
    if (tab === "all") {
      return items
    }
  }, [tab, completedItems, activeItems, items])

  return (
    <ItemsContainer>
      {items.length > 0 && (
        <Header>
          <Counter
            style={{
              visibility:
                activeItems.length > 0 && tab !== "completed"
                  ? "visible"
                  : "hidden",
            }}
          >
            {activeItems.length > 0 && tab !== "completed"
              ? `${activeItems.length} more to do!`
              : " "}
          </Counter>
          <Tabs setTab={setTab} />
          {completedItems.length > 0 && (
            <ClearButton
              onClick={clearCompletedItems}
              disabled={items.length === 0}
            >
              <Clear />
              ClearCompleted
            </ClearButton>
          )}
        </Header>
      )}
      {visibleItems && visibleItems.length > 0 ? (
        visibleItems.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))
      ) : (
        <InfoMessage>No tasks!</InfoMessage>
      )}
    </ItemsContainer>
  )
}
