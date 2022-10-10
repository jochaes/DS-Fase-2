import React, { useEffect, useState } from "react"
import axios from "axios"

import {
	IonImg,
	IonCol,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonRow,
	IonItem,
	IonGrid,
	IonLabel,
	IonCardContent,
	IonSlides,
	IonSlide,
} from "@ionic/react"

/**
 * Input de busqueda de la pagina de busqueda
 */
interface Height {
	imperial: string
	metric: string
}

interface Weight {
	imperial: string
	metric: string
}

interface Image {
	id: string
	width: number
	height: number
	url: string
}

interface Breed {
	weight: Weight
	height: Height
	id: number
	name: string
	bred_for: string
	breed_group: string
	life_span: string
	temperament: string
	origin: string
	reference_image_id: string
	image: Image
}

interface BreedInfoProps {
	breedInfo: Breed
}

const BreedInfo: React.FC<BreedInfoProps> = ({ breedInfo }) => {
	console.log("lol")

	const [breedImages, setBreedImages] = useState<Image[] | []>([])
	const dog_api_key: string = "82025e77-9873-469d-a255-4946ec6b9a86"

	const getBreedImages = () => {
		console.log("Sending Get request to Dog API TP GET IMAGES")
		axios
			.get(
				`https://api.thedogapi.com/v1/images/search?x-api-key=${dog_api_key}?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=1&limit=9&breed_ids=${breedInfo.id}`
			) //Get request to api (query="Capital","Country")
			.then(response => {
				console.log("Dog Response Fulfilled")

				var dogResponse: Image[] = [response.data][0] //Stores breed  in state
				dogResponse = dogResponse.map(image => image)
				console.log("Imagenes son:")
				console.log(dogResponse)
				setBreedImages(dogResponse) //images are stored in the state
			})
	}

	useEffect(getBreedImages, [])

	/**
	 * Retorna la lista de compoenetes de imagenes para el carousel
	 */
	const getImages = () => {
		console.log("getImages")
		console.log(breedImages)

		if (breedImages.length !== 0) {
			console.log("ahora hay mas de 1")

			const breed_images = breedImages.map((image, index) => (
				<IonSlide key={image.id + index}>
					<IonCard>
						<img src={image.url} alt="Breed Image" className="image" />
					</IonCard>
				</IonSlide>
			))

			return <IonSlides>{breed_images}</IonSlides>
		} else {
			return "nodata"
			// <IonSlide key="no_data">
			// 	<IonCard>
			// 		<img
			// 			src="https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png"
			// 			alt="Breed Image"
			// 			className="image"
			// 		/>
			// 	</IonCard>
			// </IonSlide>
		}
	}

	/**
	 * @param string Texto en donde vienen diferentes acaracteristicas separadas por ,
	 * @param card_codo Codigo de la card a crea, ya que react necesita un key para cada compoennete interno
	 * @param card_type Clase que se puede añadir a la tarketa para darle un aspecto diferete
	 *
	 * Se encarga de crear las tarejtas de diferentes tipos de información que envía el API
	 */
	const getCards = (string: string, card_code: string, card_type: string) => {
		console.log("Building cards for" + card_code)

		if (string == "" || string == null) {
			return (
				<IonCol>
					<IonCard key="noData-1">
						<IonCardHeader>
							<IonCardSubtitle>0</IonCardSubtitle>
							<IonCardTitle>No hay Datos</IonCardTitle>
						</IonCardHeader>
					</IonCard>
				</IonCol>
			)
		} else {
			const card_info_list: string[] = string.split(",")

			const cards = card_info_list.map((card, index) => (
				<IonCol key={card_code + index}>
					<IonCard>
						<IonCardSubtitle>{index + 1}</IonCardSubtitle>
						<IonCardTitle>{card}</IonCardTitle>
					</IonCard>
				</IonCol>
			))
			return cards
		}
	}

	//todo terminar de rotornar toda la informacion de la raza
	return (
		<>
			<IonGrid>
				<IonRow>
					<IonCol>
						<IonItem>
							<IonLabel>
								<h1>{breedInfo.name}</h1>
							</IonLabel>
						</IonItem>
					</IonCol>
					<IonCol>
						<IonImg src={breedInfo.image.url} />
					</IonCol>
				</IonRow>

				<IonRow>
					<IonCol>
						<IonCard key="peso_card">
							<IonCardHeader>
								<IonCardTitle>Peso</IonCardTitle>
								<IonCardContent>
									Este tipo de razas tienen un peso de entre {breedInfo.weight.metric} kilogramos.
								</IonCardContent>
							</IonCardHeader>
						</IonCard>
					</IonCol>
				</IonRow>

				<IonRow>
					<IonCol>
						<IonCard key="altura_card">
							<IonCardHeader>
								<IonCardTitle>Altura</IonCardTitle>
								<IonCardContent>
									Además pueden alcanzar una altura de {breedInfo.height.metric} centímetros
								</IonCardContent>
							</IonCardHeader>
						</IonCard>
					</IonCol>
				</IonRow>

				<IonRow>
					<IonCol size="12">
						<IonItem>
							<IonLabel>
								<h1>Crianza</h1>
							</IonLabel>
						</IonItem>
					</IonCol>
				</IonRow>
				<IonRow>{getCards(breedInfo.bred_for, "crianza_", "border-primary")}</IonRow>

				<IonRow>
					<IonCol>
						<IonItem></IonItem>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol size="12">
						<IonCard key="grupo_card">
							<IonCardHeader>
								<IonCardTitle>Grupo de Raza</IonCardTitle>
								<IonCardContent>{breedInfo.breed_group}</IonCardContent>
							</IonCardHeader>
						</IonCard>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol size="12">
						<IonCard key="vida_card">
							<IonCardHeader>
								<IonCardTitle>Esperanza de Vida</IonCardTitle>
								<IonCardContent>Logran tener una esperanza de vida de entre {breedInfo.life_span}</IonCardContent>
							</IonCardHeader>
						</IonCard>
					</IonCol>
				</IonRow>

				<IonRow>
					<IonCol size="12">
						<IonItem>
							<IonLabel>
								<h1>Temperamento</h1>
							</IonLabel>
						</IonItem>
					</IonCol>
				</IonRow>
				<IonRow>{getCards(breedInfo.temperament, "temperamento_", "border-primary")}</IonRow>

				<IonRow>
					<IonCol size="12">
						<IonItem>
							<IonLabel>
								<h1>Origen</h1>
							</IonLabel>
						</IonItem>
					</IonCol>
				</IonRow>
				<IonRow>{getCards(breedInfo.origin, "origin_", "border-primary")}</IonRow>

				<IonRow>
					<IonCol size="12">{getImages()}</IonCol>
				</IonRow>
			</IonGrid>
		</>
	)
}

export default BreedInfo
