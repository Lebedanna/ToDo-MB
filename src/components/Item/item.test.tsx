import { render, screen, fireEvent } from '@testing-library/react'
import {vi} from 'vitest'
import { Item } from './Item'
import { useTodo } from "../../context/TodoProvider"
import '@testing-library/jest-dom'

vi.mock('../../context/TodoProvider', () => ({
  useTodo: vi.fn(),
}))

describe('Item Component', () => {
  const mockSetItemStatus = vi.fn()
  const mockDeleteItem = vi.fn()

  beforeEach(() => {
    (useTodo as vi.Mock).mockReturnValue({
      setItemStatus: mockSetItemStatus,
      deleteItem: mockDeleteItem,
    })
  })

  const mockItem = {
    id: '1',
    text: 'Test Todo Item',
    isDone: false,
  }

  it('renders Circle icon when not isDone ', () => {
    render(<Item item={mockItem} />)
    expect(screen.getByTestId('circle-icon')).toBeInTheDocument()
  })

  it('renders Check icon when isDone', () => {
    const completedItem = { ...mockItem, isDone: true }
    render(<Item item={completedItem} />)
    expect(screen.getByTestId('check-icon')).toBeInTheDocument()
  })

  it('calls setItemStatus when the action button is clicked', () => {
    render(<Item item={mockItem} />)
    fireEvent.click(screen.getByTestId('action-button'))
    expect(mockSetItemStatus).toHaveBeenCalledWith('1', true)
  })

  it('calls deleteItem when the delete button is clicked', () => {
    render(<Item item={mockItem} />)
    fireEvent.click(screen.getByTestId('delete-button'))
    expect(mockDeleteItem).toHaveBeenCalledWith('1')
  })
})
