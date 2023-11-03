import React from 'react'
import Login from './login';
import MainContainer from '../../container/mainContainer/mainContainer';

function Home() {
    const [usuario, setUsuario] = React.useState(null);

    return (
        <div>
            {usuario ? <MainContainer /> : <Login />}
        </div>
    )
}

export default Home;