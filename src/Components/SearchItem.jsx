
import React, { useState } from 'react';

const SearchItem = ({ items }) => {
  const [searchId, setSearchId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); 

    const item = items.find((item) => item.id === searchId);

    if (item) {
      setFoundItem(item);
      setErrorMessage('');
    } else {
      setFoundItem(null);
      setErrorMessage('Item not found');
    }
  };

  return (
    <div>
        <div className='Form-Container scale-up'>
        <h2>Search Item by ID</h2>
        <form onSubmit={handleSearch}>
            <label>Item ID: </label>
            <input
            type='text'
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            required
            />
            <button className='Search-btn' type='submit'>Search</button>
        </form>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {foundItem && (
            <div className='Itemlist-Container'>
            <h3>Item Found:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{foundItem.id} </td>
                        <td>{foundItem.name} </td>
                        <td>{foundItem.category} </td>
                        <td>{foundItem.quantity} </td>
                        <td>{foundItem.price} </td>
                    </tbody>
                </table>
            </div>
        )}
        
    </div>
  );
};


export default SearchItem;
