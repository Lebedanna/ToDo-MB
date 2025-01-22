export type TTodoItem = {
  id: string
  text: string
  isDone: boolean
}

export type TTodoContext = {
  items: TTodoItem[]
  addItem: (text: string) => void
  setItemStatus: (id: string, isDone: boolean) => void
  deleteItem: (id: string) => void
  clearCompletedItems: VoidFunction
}
