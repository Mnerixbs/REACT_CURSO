
    const fistNme = 'Mario';
    const secondName ='Ricon';
    const favoritegames = ['Smash','elder ring','Super mario'];
    const isActive = true;

    const address = {
        zipCode: '45132',
        country: 'Jalisco',
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
            <p>
                {JSON.stringify(address)}
            </p>
        </>
    );
}