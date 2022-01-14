import React, {useState, Fragment} from 'react';

import LoginCard from './LoginCard';
import RegisterCard from './RegisterCard';

const AuthenticateMode = () => {

    const [mode, setMode] = useState(true);

    return(      
        <Fragment>

            {mode === true && <LoginCard />}
            {mode === false && <RegisterCard />}

            <div className="submit-btns center">
                <button className="mtr-btn signin espacio" type="button" onClick={() =>setMode(true)} ><span>Sí tengo una cuenta!</span></button>
                <button className="mtr-btn signup espacio" type="button" onClick={() => setMode(false)} ><span>No tengo una cuenta :(</span></button>
            </div>
        </Fragment>
    )
}

export default AuthenticateMode;