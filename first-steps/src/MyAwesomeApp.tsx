import type { CSSProperties } from "react";

    const fistNme = 'Mario';
    const secondName ='Ricon';
    const favoritegames = ['Smash','elder ring','Super mario'];
    const isActive = true;

    const address = {
        zipCode: '45132',
        country: 'Jalisco',
    };

    const myStyles: CSSProperties ={
         backgroundColor: 'red',
                borderRadius: isActive ? 10 : 20,
                padding: 10,
                marginTop: 19,
                color: 'white',
    };

export function Myname() {
    return(
        <>
            <div>
                <h1>{fistNme}</h1>
                <h3>{secondName}</h3>
                <p>{favoritegames.join(', ')}</p>
                <h1>{isActive ? 'Activo' : 'No activo'}</h1>
            </div>
            <p style={myStyles}>
                {JSON.stringify(address)}
            </p>
        </>
    );
}