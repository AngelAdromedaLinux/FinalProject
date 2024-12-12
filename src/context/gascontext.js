

import React, { createContext, useState } from 'react';

export const GasContext = createContext();

export const GasProvider = ({ children }) => {
  const [gasData, setGasData] = useState({
    distancia: '',
    gastoPorKlm: '',
    precioGasolina: '',
    descuentoAplicado: false,
    costoEstimado:'',
    cantidadGasolina:''
  });

  return (
    <GasContext.Provider value={{ gasData, setGasData }}>
      {children}
    </GasContext.Provider>
  );
};
