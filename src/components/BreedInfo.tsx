import React, {useEffect, useState} from "react"
import axios from "axios"


import { IonSearchbar, IonContent, IonSlide, IonImg, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonTitle } from '@ionic/react';
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

interface BreedInfoProps{
  breedInfo: Breed;
}

const BreedInfo: React.FC<BreedInfoProps> = ({breedInfo}) => {

  const [breedImages, setBreedImages] = useState<Image[] | []>([])
	const dog_api_key:string = "82025e77-9873-469d-a255-4946ec6b9a86"

  const getBreedImages = () =>{
    console.log("Sending Get request to Dog API TP GET IMAGES")
    axios
        .get(
          `https://api.thedogapi.com/v1/images/search?x-api-key=${dog_api_key}?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=1&limit=9&breed_ids=${breedInfo.id}`
        ) //Get request to api (query="Capital","Country")
        .then(response => {
          console.log("Dog Response Fulfilled")

          var dogResponse:Image[] = [response.data] //Stores breed  in state
          dogResponse = dogResponse.map(image => image)
          console.log(dogResponse)
          setBreedImages(dogResponse) //images are stored in the state
        })
  }
  useEffect(getBreedImages,[])

  /**
	 * Retorna la lista de compoenetes de imagenes para el carousel 
	 */
  const getImages = () => {
    console.log("getImages");
    
    if(breedImages.length !== 0){
      const breed_images = breedImages.map( (image, index) => (
        <IonSlide key={image.id} >
          <IonImg src={image.url}></IonImg>
        </IonSlide>
      ))

      return breedImages
    }else{
      return (
        <IonSlide key="noImage" >
          <IonImg src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"></IonImg>
        </IonSlide>
      )
    }
  }

  /**
	 * @param string Texto en donde vienen diferentes acaracteristicas separadas por ,
	 * @param card_codo Codigo de la card a crea, ya que react necesita un key para cada compoennete interno 
	 * @param card_type Clase que se puede añadir a la tarketa para darle un aspecto diferete
	 * 
	 * Se encarga de crear las tarejtas de diferentes tipos de información que envía el API 
	 */
  const getCards = (string:string, card_code:number, card_type:string) => {

    console.log("Building cards for" + card_code)
    
    if (string == "" || string == null){
      return (
        <IonCol>
          <IonCard key="noData-1">
            <IonCardHeader> 
              <IonCardSubtitle>
                0
              </IonCardSubtitle>
              <IonCardTitle>
                No hay Datos
              </IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonCol>
      )
    }else{
      const card_info_list:string[] = string.split(",")

      const cards = card_info_list.map((card, index) => (
        <IonCol>
          <IonCard key={card_code + index}>
            <IonCardSubtitle>
              {index + 1}
            </IonCardSubtitle>
            <IonCardTitle>
              {card}
            </IonCardTitle>
          </IonCard>
        </IonCol>)
        )
      return cards
    }
  }


  //todo terminar de rotornar toda la informacion de la raza
  return(
    <IonContent>
      <IonRow>
        <IonCol>
          <IonCard key="123">
            <IonTitle>
              {breedInfo.name}
            </IonTitle>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonContent> 
  )

}

export default BreedInfo
