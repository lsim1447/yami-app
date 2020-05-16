import styled from 'styled-components';

export interface IListItem
{
  eventKey: string,
  type: string
}

export const ListItem = styled.div `
  border-top: 2px solid #343a40;
  border-bottom: 2px solid #343a40;
  color: #ffffff;
  font-weight: bold;
  padding-top: 12px;
  padding-bottom: 12px;
  
  &:hover {
    color: #05f29b;
    border-top: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
  }
`;

export const SandwichBtnContainer = styled.div `
  color: white;
  position: fixed;
`;

export const SideBarCloseIcon = styled.div `
  float: right;
`;

export const SideBarContainer = styled.div `
  background-color: #343a40;
  display: block;
  width: 16.66%;
  min-width: 200px;
`;

export const SideBarHeaderText = styled.strong `
  text-align: center;
`;

export const hidden_sidebar = () => {
  const sideBarElement = document.getElementById("mySidebar");
  if (sideBarElement) {
    sideBarElement.style.display = "none";
  }
}

export const show_sidebar = () => {
  const sideBarElement = document.getElementById("mySidebar");
  if (sideBarElement) {
    sideBarElement.style.display = "block";
  }
}