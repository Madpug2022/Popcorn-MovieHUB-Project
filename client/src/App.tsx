import Layout from './layout/Layout'
import './app.css'
import { Auth0Provider } from '@auth0/auth0-react'

const { VITE_AUTH0_DOMAIN: domain, VITE_AUTH0_CLIENT_ID: client_id, VITE_AUTH0_AUDIENCE: audience } = import.meta.env;

function App() {


  return (
    <>
      <Auth0Provider
        domain={domain}
        clientId={client_id}
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: audience,
        }}>
        <Layout />
      </Auth0Provider>
    </>
  )
}

export default App
