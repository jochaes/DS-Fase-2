import React, { EventHandler } from "react"

import { IonInput, IonSearchbar } from '@ionic/react';
import { trashBin } from 'ionicons/icons';
import Search from '../pages/Search';
import { IonInputCustomEvent } from '@ionic/core';


/**
 * Input de busqueda de la pagina de busqueda
 */

//  interface InputChangeEventDetail{
//   value: string;
// }

// interface InputCustomEvent extends IonInputCustomEvent<InputChangeEventDetail> {
//   detail: InputChangeEventDetail;
//   target: HTMLIonInputElement;
// }


// interface SearchFilterProps{
//   value: string;
//   onChange: IonInputCustomEvent<InputChangeEventDetail>;
// }

interface SearchFilterProps{
  value: string;
  onChange: Function;
}



const SearchFilter: React.FC<SearchFilterProps> = ({value, onChange}) => (
	<>
		<IonSearchbar onIonChange={e => onChange(e)} value={value} showClearButton="always" clearIcon={trashBin}  placeholder="Buscar"></IonSearchbar>
	</>
)

export default SearchFilter
