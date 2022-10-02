import {
	IonButtons,
	IonContent,
	IonGrid,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
	IonCol,
	IonItem,
} from "@ionic/react"
import { useParams } from "react-router"
import BreedSearch from "../components/BreedSearch"

import "../styles/pages/Search.css"

const Search: React.FC = () => {
	// return (
	//   <IonPage>
	//     <IonHeader>

	//       <IonToolbar>

	//         <IonButtons slot="start">
	//           <IonMenuButton />
	//         </IonButtons>

	//         <IonTitle>Search</IonTitle>

	//       </IonToolbar>

	//     </IonHeader>

	//     <IonContent fullscreen>

	//       <IonHeader collapse="condense">

	//         <IonToolbar>
	//           <IonTitle size="large">Search</IonTitle>
	//         </IonToolbar>

	//       </IonHeader>

	//       <BreedSearch />

	//     </IonContent>

	//   </IonPage>
	// );

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Search</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<IonGrid fixed>
					<IonRow>
						<IonCol size="12">
							<IonHeader collapse="condense">
								<IonToolbar>
									<IonTitle size="large">Search</IonTitle>
								</IonToolbar>
							</IonHeader>
						</IonCol>
					</IonRow>


          <BreedSearch />
 

				</IonGrid>
			</IonContent>


		</IonPage>
	)
}

export default Search
