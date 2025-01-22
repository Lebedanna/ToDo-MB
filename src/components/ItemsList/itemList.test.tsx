import {render, screen, fireEvent} from "@testing-library/react"
import {ItemsList} from "./ItemsList"
import {useTodo} from "../../context/TodoProvider"
import {vi} from "vitest"
import "@testing-library/jest-dom"

vi.mock("../../context/TodoProvider", () => ({
  useTodo: vi.fn(),
}))

describe("ItemsList", () => {
  const mockClearCompletedItems = vi.fn()

  beforeEach(() => {
    (useTodo as vi.Mock).mockReturnValue({
      items: [
        {id: "1", text: "Test Item 1", isDone: false},
        {id: "2", text: "Test Item 2", isDone: true},
        {id: "3", text: "Test Item 3", isDone: false},
      ],
      clearCompletedItems: mockClearCompletedItems,
    })
  })

  it("renders items", () => {
    render(<ItemsList />)
    expect(screen.getByText("Test Item 1")).toBeInTheDocument()
    expect(screen.getByText("Test Item 2")).toBeInTheDocument()
    expect(screen.getByText("Test Item 3")).toBeInTheDocument()
  })

  it('shows only active tasks on "active" tab', () => {
    ;(useTodo as vi.Mock).mockReturnValue({
      items: [
        {id: "1", text: "Test Item 1", isDone: false},
        {id: "3", text: "Test Item 3", isDone: false},
      ],
      clearCompletedItems: mockClearCompletedItems,
    })

    render(<ItemsList />)
    fireEvent.click(screen.getByText("Active"))
    expect(screen.getByText("Test Item 1")).toBeInTheDocument()
    expect(screen.getByText("Test Item 3")).toBeInTheDocument()
    expect(screen.queryByText("Test Item 2")).not.toBeInTheDocument()
  })

  it('shows only completed tasks on "completed" tab', () => {
    ;(useTodo as vi.Mock).mockReturnValue({
      items: [{id: "2", text: "Test Item 2", isDone: true}],
      clearCompletedItems: mockClearCompletedItems,
    })
    render(<ItemsList />)
    fireEvent.click(screen.getByText("Completed"))
    expect(screen.getByText("Test Item 2")).toBeInTheDocument()
    expect(screen.queryByText("Test Item 1")).not.toBeInTheDocument()
  })

  it('clears completed tasks when "Clear Completed" button is clicked', () => {
    render(<ItemsList />)
    fireEvent.click(screen.getByText("ClearCompleted"))
    expect(mockClearCompletedItems).toHaveBeenCalled()
  })

  it('shows "No tasks!" message when there are no items', () => {
    (useTodo as vi.Mock).mockReturnValue({
      items: [],
      clearCompletedItems: mockClearCompletedItems,
    })
    render(<ItemsList />)
    expect(screen.getByText("No tasks!")).toBeInTheDocument()
  })

  it("shows the correct counter when active tasks are available", () => {
    render(<ItemsList />)
    expect(screen.getByText("2 more to do!")).toBeInTheDocument() // 2 active tasks
  })

  it('doesn`t show counter on "completed" tab', () => {
    render(<ItemsList />)
    fireEvent.click(screen.getByText("Completed"))
    expect(screen.queryByText("2 more to do!")).not.toBeInTheDocument()
  })
})
