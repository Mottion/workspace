import { MainLayoutProps, MenusProps } from "./interfaces";
import Box from '@mui/material/Box';
import "./styles.css"
import { SimpleTreeView, SimpleTreeViewProps, SimpleTreeViewRoot, TreeItem } from "@mui/x-tree-view";
import { useState } from "react";

const menus: MenusProps[] = [
  {
    label: "Financeiro", 
    subMenus: [
      {label: "Dashboard"},
      {label: "Cadastro de valores"},
      {label: "@mui/x-data-grid-premium"},
    ]
  },
  {
    label: "Date and Time Pickers",
    subMenus: [
      {label: "@mui/x-date-pickers"},
      {label: "@mui/x-date-pickers-premium"},
    ]
  },
  {
    label: "Charts",
    subMenus: [
      {label: "@mui/x-charts"},
      {label: "@mui/x-charts-premium"},
    ]
  }
]

export const MainLayout: React.FC<MainLayoutProps> = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleItemExpansionToggle = (_: React.SyntheticEvent | null,itemId: string) => {
    if(expandedItems.includes(itemId)) setExpandedItems([])
    else setExpandedItems([itemId]);
  };

  return (
    <div className="screen">
      <div className="side_menu">
        <SimpleTreeView 
        expandedItems={expandedItems}
        onItemExpansionToggle={handleItemExpansionToggle}
        sx={{
          '& [data-selected]': {backgroundColor: "#2E184C !important"},
          '& [data-selected]:hover': {backgroundColor: "#3b1d63 !important"},
          '& [data-focused]': {backgroundColor: "#371A5E"},
          '[tabindex="0"]': {backgroundColor: "#1C162A"},
          '[tabindex="0"] .MuiTreeItem-root:hover': {backgroundColor: "#281f3d"},
        }}>
          {menus.map((menu, menuIndex) => (
            <TreeItem key={menuIndex} itemId={menu.label} label={menu.label}>
              {menu.subMenus.map(((subMenu, subMenuIndex) => (
                <TreeItem key={subMenuIndex}  itemId={subMenu.label} label={subMenu.label} />
              )))}
            </TreeItem>
          ))}
        </SimpleTreeView>
      </div>
      <div className="outlat_wrapper">
        <h2 className="outlat_title">Financeiro</h2>
      </div>
    </div>
  )
}