import { useAuth0 } from "@auth0/auth0-react"
import {Browser} from '@capacitor/browser'
import { IonButton } from "@ionic/react"
import React from 'react';


const LoginButton: React.FC = () => {
  const {buildAuthorizeUrl} = useAuth0()

  const login = async () =>{
    const url = await buildAuthorizeUrl()

    await Browser.open({url});
  }

  return <IonButton onClick={login}> Log In </IonButton>


}

export default LoginButton