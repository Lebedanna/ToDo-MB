import styled from "styled-components"

export const ItemsContainer = styled.ul`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  max-height: 71vh;
  min-height: 71vh;
  margin: 0;
  padding: 0px;
  box-sizing: border-box;
  overflow: auto;
  background-color: white;
  list-style: none;
`

export const ClearButton = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  height: 76px;
  padding: 16px 24px;
  color: #d98326;
  font-size: 24px;
`

export const Header = styled.div`
  position: relative;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 76px;
  padding: 16px 24px;
  background-color: white;
`

export const Counter = styled.div`
  position: absolute;
  left: 0;
  padding: 16px 24px;
`

export const InfoMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
`
