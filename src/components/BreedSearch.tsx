import React, {useState, useEffect} from 'react'
import axios from "axios"

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

  useEffect(loadBreedsInfo,[])

  /**
	 * Cada tarjeta tiene un boton de show, cuando este se presiona, la barra de busqueda 
	 * se actualiza con el nombre de la raza que se presionó, para cargar esa vista. 
	 */
	const showButton = (breed_name:string) => {
		console.log(breed_name)
		setSearchFilter(breed_name) // Actualiza la barra de búsqueda 
	}

  const showBreedImages = () => {
    if (searchFilter === "") {
      return []
    }else{
      console.log('showBreedImages: ' + searchFilter);
      const regex = new RegExp(`${searchFilter}`, "gi") //Se crea una expresion regular que no distinga entre mayusculas y minusculas 
      const filteredNames = breeds.filter(breed => breed.name.match(regex) !== null)

      if (filteredNames.length === 1){
        console.log( filteredNames[0].id );
        return <BreedInfo breedInfo={filteredNames[0]} />
        
      }
    }

  }




  return (

    <h1> Busqueda </h1>
  )
}

export default BreedSearch;