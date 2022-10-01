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

interface BreedDisplayProps{
  breed: Breed,
  onClickhandler: Function  
}

const BreedDisplay: React.FC<BreedDisplayProps> = ({breed, onClickhandler}) => {



  return (

    <IonCol>
      <IonCard onClick={e => onClickhandler(e)}>
        <IonCardSubtitle>
          Id: {breed.id}
        </IonCardSubtitle>
        <IonCardTitle>
           Name: {breed.name}
        </IonCardTitle>
      </IonCard>        
    </IonCol>
    
  )


}

export default BreedDisplay
