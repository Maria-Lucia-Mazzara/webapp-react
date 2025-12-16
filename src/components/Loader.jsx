import { Cardio } from 'ldrs/react'
import 'ldrs/react/Cardio.css'

function Loader() {
    return <div className="loader"><Cardio
        size="50"
        stroke="4"
        speed="3"
        color="white"
    /></div>

}
export default Loader