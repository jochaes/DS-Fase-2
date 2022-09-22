import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const Login: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>

        <IonToolbar>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>Login</IonTitle>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>
        
        <IonHeader collapse="condense">

          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
          

        </IonHeader>

        


      </IonContent>
    </IonPage>
  );
};

export default Login;
