import { useLocation, useNavigate } from "react-router-dom"

function CardDetails(){
    const navigate = useNavigate()
    const location = useLocation()
    const card = location.state
    return (
        <>
        <h1>Сторінка детальної інформації</h1>
        <button onClick={()=> navigate(-1)}  type="button">🔙</button>
        <div>
                    <h2>Name: {card.name}</h2>
                    <p>Age: {card.age}</p>
                    <p>Email: {card.email}</p>
                    <p>City: {card.city}</p>
                    <p>Status: {card.isActive ? "Online": "Offline"}</p>
        </div>
        </>

    )
}

export default CardDetails