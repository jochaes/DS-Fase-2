import React from "react"
import { IonCard, IonCardSubtitle, IonCardTitle, IonItem, IonImg, IonThumbnail, IonCardHeader, IonCardContent, IonIcon } from '@ionic/react';
import {pin, pawOutline, pawSharp} from 'ionicons/icons'
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
	console.log(breed.image.url);
	
	return (
		<IonItem>
			<IonCard onClick={e => onClickhandler(e)} class="ios hydrated">
				<IonItem>
					<IonIcon ios={pawOutline} md={pawSharp} />
					<IonCardSubtitle slot="end" >Id: {breed.id}</IonCardSubtitle>
				</IonItem>
				<IonCardHeader>
					<IonCardTitle role="heading">{breed.name}</IonCardTitle>
				</IonCardHeader>
				<IonCardContent>
					<img src={breed.image.url} alt="Breed Image" />					
				</IonCardContent>

				
				
				
			</IonCard>
		</IonItem>
	)
}

export default BreedDisplay
