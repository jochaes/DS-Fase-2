import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogOutButton';

import '../styles/pages/Login.css';

const Login: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>

        <IonToolbar>

          <IonTitle>Login</IonTitle>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>
        
        <IonHeader collapse="condense">

          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
          

        </IonHeader>

        <LoginButton />


      </IonContent>
    </IonPage>
  );
};

export default Login;
