import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import LogoutButton from '../components/LogOutButton';
import ProfileComponent from '../components/ProfileComponent';


import '../styles/pages/Profile.css';

const Profile: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>

        <IonToolbar>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>Profile</IonTitle>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>
        
        <IonHeader collapse="condense">

          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>

        </IonHeader>

        <ProfileComponent />
        <LogoutButton />

      </IonContent>
    </IonPage>
  );
};

export default Profile;
