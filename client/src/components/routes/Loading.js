import { useEffect, useState} from "react"
import { useNavigate, useLocation } from "react-router-dom"
const Loading = ({path="login"}) => {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {

        const interval = setInterval(() => {
            setCount((corentCount) => --corentCount)
        }, 1000)
        count === 0 && navigate(`/${path}`, {state: location})
        return () => clearInterval(interval)
    }, [count])

    return (
        <div className="d-flex align-items-center justify-content-center vh-100" >
            <img src="./loading.gif" alt="loading" width="150" height="150"/>
        </div>
    )
}

export default Loading

