import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import BreedSearch from '../components/BreedSearch';

import '../styles/pages/Search.css';

const Search: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>

        <IonToolbar>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>Search</IonTitle>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>
        
        <IonHeader collapse="condense">

          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>

        </IonHeader>

        <BreedSearch />




      </IonContent>
    </IonPage>
  );
};

export default Search;
