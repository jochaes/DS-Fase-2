import { useAuth0 } from '@auth0/auth0-react';
import { Browser } from '@capacitor/browser';
import { IonButton } from '@ionic/react';
import { useHistory } from 'react-router';



// This should reflect the URL added earlier to your "Allowed Logout URLs" setting
// in the Auth0 dashboard.
const logoutUri = 'io.ionic.starter://dev-6ubin6a9.us.auth0.com/capacitor/io.ionic.starter/callback';


const LogoutButton: React.FC = () => {
  const history  = useHistory()
  const { buildLogoutUrl, logout } = useAuth0();

  const doLogout = async () => {
    // Open the browser to perform a logout
    await Browser.open({ url: buildLogoutUrl({ returnTo: logoutUri }) });

    // Ask the SDK to log out locally, but not do the redirect
    logout({ localOnly: true });
    history.replace('/page/Login')
  };

  return <IonButton onClick={doLogout}>Log out</IonButton>;
};

export default LogoutButton;