import React from "react"
import { IonCard, IonCardSubtitle, IonCardTitle, IonItem } from "@ionic/react"

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

interface BreedDisplayProps {
	breed: Breed
	onClickhandler: Function
}

const BreedDisplay: React.FC<BreedDisplayProps> = ({ breed, onClickhandler }) => {
	return (
		<IonItem>
			<IonCard onClick={e => onClickhandler(e)}>
				<IonCardSubtitle>Id: {breed.id}</IonCardSubtitle>
				<IonCardTitle>Name: {breed.name}</IonCardTitle>
			</IonCard>
		</IonItem>
	)
}

export default BreedDisplay
