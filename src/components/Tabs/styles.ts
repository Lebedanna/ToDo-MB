import styled from "styled-components"

export const TabsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
`
export const Tab = styled.button<{isSelected: boolean}>`
  padding: 16px;
  font-size: 38px;
  color: black;
  border: ${({isSelected}) => (isSelected ? "1px solid #969696" : "none")};
`
