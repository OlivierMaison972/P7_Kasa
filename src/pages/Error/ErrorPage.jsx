
import { NavLink } from "react-router-dom"
import "../../pages/Error/ErrorPage.css"

export default function ErrorPage() {

  return (
    <div className="error-page">
        <h1 className="error-code">404</h1>
        <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
      
      
      <NavLink to="/" className="errorContainer__Link">
          Retourner sur la page d'accueil
        </NavLink>
    </div>
  );
}