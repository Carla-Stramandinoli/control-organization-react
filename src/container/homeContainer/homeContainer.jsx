import React from 'react'
import Login from '../../components/homeComponent/login';
import MainContainer from '../mainContainer/mainContainer';
import FirebaseApp from '../../firebase/config';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(FirebaseApp);

function HomeContainer() {
    const [usuario, setUsuario] = React.useState(null);

    onAuthStateChanged(auth, (userFirebase) => {
        if (userFirebase) {
            setUsuario(userFirebase);
        } else {
            setUsuario(null);
        }
    })
    return (
        <div>
            {usuario ? <MainContainer emailUser={usuario.email} /> : <Login />}
        </div>
    )
}

export default HomeContainer;