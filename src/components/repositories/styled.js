import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
  
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
  border-color: black;
  
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 20%;
  border: 2px solid rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  padding: 16px;
  font-family: Lucida Console;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "rgb(204, 0, 0)";
  margin: 8px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 9px solid "rgba(0, 0, 0, 0.2)";
  display: none;
  margin-top: -5px;
  font-family: Lucida Console;
 

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
