import {render, screen, fireEvent} from "@testing-library/react"
import {vi} from "vitest"
import {Tabs} from "./Tabs"
import "@testing-library/jest-dom"

describe("Tabs Component", () => {
  const mockSetTab = vi.fn()

  beforeEach(() => {
    mockSetTab.mockClear()
  })

  it("renders all tabs", () => {
    render(<Tabs setTab={mockSetTab} />)
    expect(screen.getByText("All")).toBeInTheDocument()
    expect(screen.getByText("Active")).toBeInTheDocument()
    expect(screen.getByText("Completed")).toBeInTheDocument()
  })

  it("calls setTab with correct value", () => {
    render(<Tabs setTab={mockSetTab} />)
    fireEvent.click(screen.getByText("Active"))
    expect(mockSetTab).toHaveBeenCalledWith("active")
    fireEvent.click(screen.getByText("Completed"))
    expect(mockSetTab).toHaveBeenCalledWith("completed")
  })

  it("sets the correct tab as selected", () => {
    render(<Tabs setTab={mockSetTab} />)
    expect(screen.getByText("All")).toHaveStyle("border: 1px solid #969696")
    fireEvent.click(screen.getByText("Active"))
    expect(screen.getByText("Active")).toHaveStyle("border: 1px solid #969696")
    expect(screen.getByText("All")).not.toHaveStyle("border: 1px solid #969696")
  })

  it("updates the selected tab correctly", () => {
    render(<Tabs setTab={mockSetTab} />)
    fireEvent.click(screen.getByText("Completed"))
    expect(screen.getByText("Completed")).toHaveStyle("border: 1px solid #969696")
    fireEvent.click(screen.getByText("Active"))
    expect(screen.getByText("Active")).toHaveStyle("border: 1px solid #969696")
  })
})
