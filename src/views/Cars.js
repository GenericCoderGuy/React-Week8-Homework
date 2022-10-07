import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../contexts/DataProvider';

export default function Cars() {
    const [car, setCar] = useState({})
    const [carState, setCarState] = useState("LOADING")
    const [carId, setCarId] = useState(1)
    const { getCar } = useContext(DataContext)

    useEffect(() => {
        getCar(carId, function(data) {
            setCar(data)
            setCarState("LOADED")
        })
        console.log('FETCHING')
    }, [carId])

    return (
        <div>
            <h3>Showcase</h3>
            {  
                (carState === "LOADED") ?
                (
                    <div className="car">
                        <h2>{ car.name }</h2>
                        <h3>Price:</h3>
                        <h3>${ car.selling_price }</h3>
                    </div>
                ) :
                ""
            }
            {
                (carId > 1) ?
                (<button className="btn bg-dark p-2 text-light bg-opacity-25 box border border-light rounded mb-5" onClick={() => setCarId(carId - 1)}>Previous Car</button>)
                :
                ''
            }
            <button className="btn bg-dark p-2 text-light bg-opacity-25 box border border-light rounded mb-5" onClick={() => setCarId(carId + 1)}>Next Car</button>
        </div>
    )
}