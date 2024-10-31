import React from 'react';
import './styles/tailwind.css';
import ProfileCard from './components/ProfileCard/ProfileCard';
import ProductCard from './components/ProductCard/ProductCard';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

function App() {
    return (
        <div>
            <Header />
            <ProfileCard name="Juan Pérez" description="Desarrollador de software." />
            <ProductCard name="Producto 1" />
            <Card title="Tarjeta 1" description="Descripción de la tarjeta." />
        </div>
    );
}

export default App;
