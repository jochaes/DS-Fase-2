import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';


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




      </IonContent>
    </IonPage>
  );
};

export default Search;
