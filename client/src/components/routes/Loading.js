import { useEffect, useState} from "react"
import { useNavigate, useLocation } from "react-router-dom"
const Loading = () => {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {

        const interval = setInterval(() => {
            setCount((corentCount) => --corentCount)
        }, 1000)
        
        count === 0 && navigate("/login", {state: location})
        console.log("location =>", location)
        return () => clearInterval(interval)

    }, [count])

    return (
        <div className="d-flex align-items-center justify-content-center vh-100" >
            <img src="./loading.gif" width="150" height="150"/>
        </div>
    )
}

export default Loading

