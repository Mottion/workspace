export interface MainLayoutProps {
  
}

export interface MenusProps {
  label: string,
  subMenus: {
    label: string,
    link?: string,
  }[]
}