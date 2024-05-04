import React from 'react';
import useLoots from '../../hooks/useLoots';


function LootsList({ endpointSuffix }) {
    const { loots, loading, error } = useLoots(endpointSuffix);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div style={{display: 'flex', margin: '1em', alignItems: 'center', flexDirection: 'column'}}>
            <h1 style={{color: "#fff"}}>Loots</h1>
            <ul>
                {loots.map(loot => (
                    <li key={loot.id } style={{color: "#fff", fontWeight: 500, marginTop: "1em"}}>
                        {loot.name} - {loot.description} - {loot.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LootsList;
