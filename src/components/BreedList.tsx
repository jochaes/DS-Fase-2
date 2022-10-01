import React from "react"

import { IonSearchbar, IonContent } from '@ionic/react';
import { trashBin } from 'ionicons/icons';
import internal from "stream";



/**
 * Input de busqueda de la pagina de busqueda
 */
interface Height{
  imperial: string,
  metric: string
}

interface Weight{
  imperial: string,
  metric: string
}

interface Image {
  id: string, 
  width : number,
  height : number, 
  url : string
}

interface Breed{
  weight : Weight,
  height : Height,
  id : number,
  name: string,
  bred_for: string, 
  breed_group : string,
  life_span : string,
  temperament : string, 
  origin : string, 
  reference_image_id : string,
  image : Image
}

interface BreedListProps{
  breedArray: JSX.Element[]
}


const SearchFilter: React.FC<BreedListProps> = ({breedArray}) => 
	<IonContent>
		{breedArray}
	</IonContent>


export default SearchFilter
