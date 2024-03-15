import profilepic from "./assets/zoro.png"
function Card(){
    return(
        <div className="card">
            <img className="card-imange"src={profilepic} alt="profile picture"></img>
            <h2 className="card-title">Joniel</h2>
            <p className="card-text">black</p>
        </div>
    )
}

export default Card