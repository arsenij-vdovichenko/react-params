import { useState } from "react"
import { useNavigate } from "react-router-dom"

const USER_PASS = "qwerty"
function Home(){
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!password.trim()){
            return
        }

        else if(password.trim().toLocaleLowerCase() === USER_PASS){
            navigate("/cards")
            console.log("Хочемо дозволити перейти на сторінку Cards");
            
        }else(
            alert("Не вірно введені данні")
        )
        
        setPassword("")
    }
    return (
        <>
        <h1>HOME PAGE</h1>
        <form onSubmit={handleSubmit}>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="enter password"/>
            <button type="submit">ENTER</button>
        </form>
        </>
    )
}

export default Home







// import { useState } from "react"
// import { useNavigate } from "react-router-dom";

// const USER_PASS = "qwerty"

// function Home(){
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()
 
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if(!password.trim()){
//             return
//         }else if(password.trim().toLocaleLowerCase() === USER_PASS){
//            navigate("/cards") 
        
//         }else{
//             alert("Не вірно введені данні")
//         }
        
//         setPassword('')
//     }
    
//     return (
//         <>
//         <h1>HOME PAGE</h1>
//         <form onSubmit={handleSubmit}>
//            <input value={password} onChange={(e)=> setPassword(e.target.value)} type="text" placeholder="enter password" />
//            <button type="submit">ENTER</button>

//         </form>
        
//         </>
        
//     )
// }

// export default Home