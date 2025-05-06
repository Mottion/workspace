import "./styles.css"

import { Link, Outlet } from "react-router";
import { MainLayoutProps, MenusProps } from "./interfaces";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import { useState } from "react";

const menus: MenusProps[] = [
  {
    label: "Financeiro", 
    subMenus: [
      {label: "Dashboard", link: "financial/dashboard"},
      {label: "Cadastro de valores", link: "financial/register_of_values"},
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
    if(expandedItems.includes(itemId)) 
      setExpandedItems([])
    else 
      setExpandedItems([itemId]);
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
                <Link to={subMenu.link || ""}>
                  <TreeItem key={subMenuIndex}  itemId={subMenu.label} label={subMenu.label} />
                </Link>
              )))}
            </TreeItem>
          ))}
        </SimpleTreeView>
      </div>
      <div className="outlat_wrapper">
        <Outlet />
      </div>
    </div>
  )
}