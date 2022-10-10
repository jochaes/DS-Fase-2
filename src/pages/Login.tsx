import {
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonItem,
	IonLabel,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
} from "@ionic/react"

import LoginButton from "../components/LoginButton"
import { useHistory } from "react-router"

import "../styles/pages/Login.css"
import { useAuth0 } from "@auth0/auth0-react"

const Login: React.FC = () => {
	const history = useHistory()

	const { user } = useAuth0()
	if (user) {
		history.replace("/page/Search")
	}

	return (
		<IonPage>
			<IonContent scrollEvents={false} fullscreen>
				<IonGrid>
					<IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol className="ion-margin-top">
						<IonHeader collapse="condense">
							<IonToolbar>
								<IonTitle size="large">Dog API App</IonTitle>
							</IonToolbar>
						</IonHeader>
            </IonCol>
					</IonRow>

					<IonRow className="ion-align-items-center ion-justify-content-center">
						<IonCol>
							<IonItem>
								<IonLabel>
									<p>Iniciar sesión para usar la App</p>
								</IonLabel>
							</IonItem>
						</IonCol>
					</IonRow>

          <IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol>
            <LoginButton />
            </IonCol>
          </IonRow>
				</IonGrid>

			
			</IonContent>
		</IonPage>
	)
}

export default Login
