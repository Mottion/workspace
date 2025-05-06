import "./styles.css"

import { RegisterOfValuesProps } from "./interfaces";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router";

const breadcrumbsLinks = [
  {label: "Financeiro", link: "#"},
  {label: "Cadastro de Valores", link: "/financial/register_of_values"},
]

export const RegisterOfValues: React.FC<RegisterOfValuesProps> = () => {
  return (
    <div className="container_wrapper">
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbsLinks.map(e => (
          <Link className="hover:underline" color="inherit" to={e.link}>
            {e.label}
          </Link>
        ))}
      </Breadcrumbs>
      <div className="content_wrapper">
        
      </div>
    </div>
  )
}