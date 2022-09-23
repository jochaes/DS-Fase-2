import React from "react"

import { IonSearchbar } from '@ionic/react';
import { trashBin } from 'ionicons/icons';
import Search from '../pages/Search';


/**
 * Input de busqueda de la pagina de busqueda
 */

interface SearchFilterProps{
  value: string;
  onChange: Function;
}


const SearchFilter: React.FC<SearchFilterProps> = ({value, onChange}) => (
	<>
		<IonSearchbar onChange={onChange()} value={value} showClearButton="always" clearIcon={trashBin}  placeholder="Buscar"></IonSearchbar>
	</>
)

export default SearchFilter
