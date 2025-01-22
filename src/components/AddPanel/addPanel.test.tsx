import {render, screen, fireEvent} from "@testing-library/react"
import {vi} from "vitest"
import {AddPanel} from "./AddPanel"
import {useTodo} from "../../context/TodoProvider"
import "@testing-library/jest-dom"
vi.mock("../../context/TodoProvider", () => ({
  useTodo: vi.fn(),
}))

describe("AddPanel Component", () => {
  const mockAddItem = vi.fn()

  beforeEach(() => {
    mockAddItem.mockClear()
    ;(useTodo as vi.Mock).mockReturnValue({
      addItem: mockAddItem,
    })
  })

  it("renders input field and Add button", () => {
    render(<AddPanel />)
    expect(
      screen.getByPlaceholderText("What needs to be done?")
    ).toBeInTheDocument()
    expect(screen.getByText("ADD")).toBeInTheDocument()
  })

  it("updates label state when typing in the input field", () => {
    render(<AddPanel />)

    const input = screen.getByPlaceholderText("What needs to be done?")
    fireEvent.change(input, {target: {value: "New Todo Item"}})
    expect(input).toHaveValue("New Todo Item")
  })

  it("calls addItem when ADD button is clicked", () => {
    render(<AddPanel />)

    const input = screen.getByPlaceholderText("What needs to be done?")
    fireEvent.change(input, {target: {value: "New Todo Item"}})
    fireEvent.click(screen.getByText("ADD"))
    expect(mockAddItem).toHaveBeenCalledWith("New Todo Item")
    expect(input).toHaveValue("")
  })

  it("calls addItem when Enter key is pressed", () => {
    render(<AddPanel />)

    const input = screen.getByPlaceholderText("What needs to be done?")
    fireEvent.change(input, {target: {value: "New Todo Item"}})
    fireEvent.keyUp(input, {key: "Enter"})
    expect(mockAddItem).toHaveBeenCalledWith("New Todo Item")
    expect(input).toHaveValue("")
  })

  it("does not call addItem if the input is empty", () => {
    render(<AddPanel />)
    fireEvent.click(screen.getByText("ADD"))
    expect(mockAddItem).not.toHaveBeenCalled()
  })
})
