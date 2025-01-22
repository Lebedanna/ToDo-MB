import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react"
import {TTodoContext, TTodoItem} from "./types"
import {v4} from "uuid"

export const TodoContext = createContext<TTodoContext | undefined>(undefined)
TodoContext.displayName = "TodoContext"

export const useTodo = () => {
  const context = useContext(TodoContext)
  if (context === undefined) {
    throw new Error("useTodo must be used within TodoProvider")
  }
  return context
}
export function TodoProvider({children}: PropsWithChildren) {
  const [items, setItems] = useState<TTodoItem[]>(() => {
    const savedItems = localStorage.getItem("todoItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const addItem = (text: string) =>
    setItems([
      ...items,
      {
        text,
        isDone: false,
        id: v4(),
      },
    ])

  const setItemStatus = (id: string, isDone: boolean) => {
    setItems(items.map((i) => (i.id === id ? {...i, isDone} : i)))
  }

  const deleteItem = (id: string) => setItems(items.filter((i) => i.id !== id))

  const clearCompletedItems = () => setItems(items.filter((i) => !i.isDone))

  return (
    <TodoContext.Provider value={{items, addItem, setItemStatus, deleteItem, clearCompletedItems}}>
      {children}
    </TodoContext.Provider>
  )
}
