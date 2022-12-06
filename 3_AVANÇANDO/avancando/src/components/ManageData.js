import {useState} from 'react';

const ManageData = () => {
    const [data, setData] = useState(10)

  return (
    <div>ManageData
        <p>Valor: {data}</p>
        <button onClick={() => setData(15)}>Clique</button>
    </div>
    
  )
}

export default ManageData