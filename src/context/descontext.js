

import React, { createContext, useState } from 'react';

export const DesContext = createContext();

export const DesProvider = ({ children }) => {
    const [desData, setDesData] = useState({
        impuesto: '',
        precioOriginal: '',
        porcDescuento: '',
        cantAhorrada: '',
        precioFinal: ''
    });

    return (
        <DesContext.Provider value={{ desData, setDesData }}>
            {children}
        </DesContext.Provider>
    );
};
