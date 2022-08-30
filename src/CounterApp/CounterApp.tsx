import React, { useEffect, useState } from 'react'
import { getImagen } from '../base-pruebas/11-async-await';

interface counterProps {
    value: number
}

const CounterApp: React.FC<counterProps> = ({ value }) => {


    const [newValue, setNewValue] = useState<number>(value);
    const [newImage, setNewImage] = useState<string>('');

    const handleSum = () => {
        setNewValue(newValue + 1)
    }

    const handleRest = () => {
        setNewValue(newValue - 1)
    }

    const handleReset = () => {
        setNewValue(value)
    }

    const fetchImage = async () => {
        const src = await getImagen();

        setNewImage(src)
    }
    
    useEffect(() => {
        fetchImage();
    }, [])

    return (
        <>
            <h1 style={{ fontWeight: 'bold' }}>CounterApp</h1>
            <h2>{newValue}</h2>

            <div className="mb-2">
                <img src={newImage}></img>
            </div>

            <button
                className="btn btn-primary d-inline me-2"
                onClick={handleSum}
            > +1 </button>

            <button
                className="btn btn-primary d-inline me-2"
                onClick={handleRest}
            > -1 </button>

            <button
                className="btn btn-primary d-inline"
                onClick={handleReset}
            > Reset </button>
        </>
    )
}

export default CounterApp