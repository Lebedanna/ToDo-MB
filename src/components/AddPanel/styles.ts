import styled from "styled-components"

export const PanelContainter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 78px;
  box-sizing: border-box;
`

export const Panel = styled.input`
  flex-grow: 2;
  box-sizing: border-box;
  min-width: 200px;
  height: 100%;
  padding-left: 38px;
  overflow: hidden;
  border: none;
  font-size: 38px;
  background-color: white;
  color: #323232;
  &::placeholder {
    color: #969696;
  }
  &:hover {
    border: none;
  }
  &:focus {
    outline: 0.5px #d98326 solid;
  }
`
export const AddButton = styled.button`
  height: 78px;
  padding: 0 24px 0 24px;
  box-sizing: border-box;
  border: none;
  background-color: #d98326;
  font-size: 38px;
  color: #f3f3f3;
  cursor: pointer;
  &:hover {
    background-color: rgb(84, 160, 185);
  }
  &:active {
    background-color: rgb(54, 132, 158);
  }
`
