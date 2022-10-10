import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { Auth0Provider } from "@auth0/auth0-react"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
	<Auth0Provider
    domain="dev-6ubin6a9.us.auth0.com"
    clientId="jbtCT5tAd5lu4FZtkxHmBuib5wALLRp5"
    redirectUri="io.ionic.starter://dev-6ubin6a9.us.auth0.com/capacitor/io.ionic.starter/page/Search">
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Auth0Provider>
)
