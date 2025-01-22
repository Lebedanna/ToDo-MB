import styled from "styled-components"

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 88px;
  padding: 16px 0;
  border-bottom: 1px solid #76b7cd;
`

export const ActionButton = styled.button`
  width: 46px;
  height: 46px;
  margin-left: 38px;
  border: none;
  background: none;
  cursor: pointer;
`

export const DeleteButton = styled.button`
  padding-right: 24px;
`
export const TextContainer = styled.div<{isDone: boolean}>`
  align-items: start;
  flex-grow: 2;
  overflow: auto;
  text-decoration: ${({isDone}) => (isDone ? "line-through" : "none")};
  color: ${({isDone}) => isDone && "#C2C2C2"};
`
