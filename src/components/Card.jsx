
const Card = ({nombre, cancion}) => {
    return(
        <>
            <div className="card">
                <h3>Hola , {nombre}!</h3>
                <p>Sabemos que tu canción favorita es {cancion}</p>
            </div>
        </>

    )
};
    
export default Card;
