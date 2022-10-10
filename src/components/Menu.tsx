import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { logInOutline, logInSharp, searchOutline, searchSharp, personOutline, personSharp } from 'ionicons/icons';
import '../styles/components/Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Perfil',
    url: '/page/Profile',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
  {
    title: 'Búsqueda',
    url: '/page/Search',
    iosIcon: searchOutline,
    mdIcon: searchSharp
  }
];

interface props{
  swipeEnable: boolean
}

const Menu: React.FC<props> = ({swipeEnable}) => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" swipeGesture={swipeEnable}>
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Menú</IonListHeader>
          <IonNote>Dog API App</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>

                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>

              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
