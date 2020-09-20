//Vendor libraries
import React, { useState, useEffect } from 'react'
import randomColor from 'randomcolor'

//Components
import Name from './Name'
import ColorPicker from './ColorPicker'

export default function Paint() {
    const [colors, setColors] = useState('');
    const [activeColor, setActiveColor] = useState('');

    useEffect(() => {
        getColors()
    }, [])

    const getColors = () => {
        const baseColor = randomColor().slice(1);
        fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
        .then(res => res.json())
        .then(res => {
            setColors(res.colors.map(color => color.hex.value))
            setActiveColor(res.colors[0].hex.value)
        })
    }
    return (
    <header style={{ borderTop: `10px solid ${activeColor}` }}>
        <div className="app">
        <Name />
        </div>
        <div style={{ marginTop: 10 }}>
            <ColorPicker
                colors={colors}
                activeColor={activeColor}
                setActiveColor={setActiveColor}
            />
        </div>
    </header>
  )
}
