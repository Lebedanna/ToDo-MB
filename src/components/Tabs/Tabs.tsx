import {useState} from "react"
import {Tab, TabsContainer} from "./styles"

export type TTab = "all" | "active" | "completed"

type TTabsProps = {
  setTab: (tab: TTab) => void
}

export function Tabs({setTab}: TTabsProps) {
  const [selectedTab, setSelectedTab] = useState<TTab>("all")

  const handleClick = (tab: TTab) => {
    setTab(tab)
    setSelectedTab(tab)
  }
  return (
    <TabsContainer>
      <Tab
        onClick={() => handleClick("all")}
        isSelected={selectedTab === "all"}
      >
        All
      </Tab>
      <Tab
        onClick={() => handleClick("active")}
        isSelected={selectedTab === "active"}
      >
        Active
      </Tab>
      <Tab
        onClick={() => handleClick("completed")}
        isSelected={selectedTab === "completed"}
      >
        Completed
      </Tab>
    </TabsContainer>
  )
}
