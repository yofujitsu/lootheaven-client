import React, { useState, useEffect } from 'react';
import LootsList, { productSVGs } from './LootsList';
import { useLocation, useNavigate } from 'react-router-dom';
import './Catalog.css'


const types = ["ACCOUNT", "KEY", "ITEM", "CURRENCY", "GAME_PASS", "OTHER"];

function Catalog({ endpointSuffix }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedProduct, setSelectedProduct] = useState(new URLSearchParams(location.search).get('game') || '');
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
      // Конструируем URL с параметрами
      const queryParams = new URLSearchParams();
      if (selectedProduct) queryParams.set('game', selectedProduct);
      if (selectedType) queryParams.set('type', selectedType);
      navigate(`/loots?${queryParams.toString()}`);
    }, [selectedProduct, selectedType, navigate]);

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    return (
        <div style={{ margin: '1em 10em 1em 10em', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff' }}>
          <div className='col'>
          <select onChange={handleProductChange} value={selectedProduct} className="select-custom" style={{marginRight: '1em'}}>
              <option value="">Все сервисы</option>
              {Object.keys(productSVGs).map(productName => (
                  <option key={productName} value={productName}>{productName}</option>
              ))}
            </select>
            <select onChange={handleTypeChange} value={selectedType} className="select-custom">
                <option value="">Все типы</option>
                {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
          </div>
            <LootsList endpointSuffix={endpointSuffix} selectedProduct={selectedProduct} selectedType={selectedType} />
        </div>
    );
}

export default Catalog;
