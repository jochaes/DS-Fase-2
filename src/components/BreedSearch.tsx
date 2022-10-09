import React, { useState, useEffect } from "react"
import axios from "axios"
import BreedInfo from "./BreedInfo"
import BreedDisplay from "./BreedDisplay"
import BreedList from "./BreedList"
import { IonCol, IonContent, IonGrid, IonInput, IonRow } from "@ionic/react"
import { IonInputCustomEvent } from "@ionic/core"
import SearchFilter from "./SearchFilter"

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

interface InputChangeEventDetail {
	value: string
}

interface InputCustomEvent extends IonInputCustomEvent<InputChangeEventDetail> {
	detail: InputChangeEventDetail
	target: HTMLIonInputElement
}

const BreedSearch: React.FC = () => {
	const [breeds, setBreeds] = useState<Breed[] | []>([]) // Vacio porque vamos a traer la informacion desde el api
	const [searchFilter, setSearchFilter] = useState("")
	/**
	 * Carga la lista de la informacion de las razas, llamando al API
	 */

	const loadBreedsInfo = () => {
		console.log("Sending Get Request to DOG-API")
		axios
			.get("https://api.thedogapi.com/v1/breeds?limit=200&page=0") //Get request to api
			.then(response => {
				console.log("Response Fulfilled")
				const breedsResponse = response.data
				console.log(breedsResponse)
				setBreeds(breedsResponse) //countries are stored in the state
			})
	}

	useEffect(loadBreedsInfo, [])

	/**
	 * Cada tarjeta tiene un boton de show, cuando este se presiona, la barra de busqueda
	 * se actualiza con el nombre de la raza que se presionó, para cargar esa vista.
	 */
	const showButton = (event: Event) => {
		let text = ""
		const target = event.target as HTMLIonSearchbarElement
		
		if (target) text = target.parentElement?.getElementsByTagName('ion-card-title')[0].innerHTML!
		console.log( "el contenido es: " + text)
		
		
		setSearchFilter(text) // Actualiza la barra de búsqueda
	}

	const showBreedImages = () => {
		if (searchFilter === "") {
			return []
		} else {
			console.log("showBreedImages: " + searchFilter)
			const regex = new RegExp(`${searchFilter}`, "gi") //Se crea una expresion regular que no distinga entre mayusculas y minusculas
			const filteredNames = breeds.filter(breed => breed.name.match(regex) !== null)

			if (filteredNames.length === 1) {
				console.log(filteredNames[0].id)
				var finalBreeed: Breed = filteredNames[0]
				return <BreedInfo breedInfo={finalBreeed} />
			} else {
				const breedArrayFinal = filteredNames.map(breed => (
					<BreedDisplay key={breed.id} breed={breed} onClickhandler={showButton} />
				))

				return breedArrayFinal
			}
		}
	}

	const handleSearchFilterChange = (event: Event) => {
		console.log("holas")

		let text = ""
		const target = event.target as HTMLIonSearchbarElement
		if (target) text = target.value!
		setSearchFilter(text)
	}

	return (
		<>
			<IonRow>
				<IonCol size="12">
					<SearchFilter value={searchFilter} onChange={handleSearchFilterChange} />
				</IonCol>
			</IonRow>

			<IonRow>

				<IonCol size="12">
					{showBreedImages()}
				</IonCol>

			</IonRow>
		</>


	)
}

export default BreedSearch;
