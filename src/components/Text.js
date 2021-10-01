import {useState} from 'react';
function Text() {
    const [items,setItems] = useState('');
    const handleChange = (e) => setItems(e.target.value);
    const [list,setList] =useState([]);
    const handleClick = () => {
        setList([...list,items])
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setItems('')
    }
    const handleDelete =(index) => {
        console.log(index);
        const newlist = list.filter((val,ind) => list[index] !== list[ind]);
        setList(newlist);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className ='input' type='text' placeholder='Enter List' value={items} onChange={handleChange}/>
                <button className='button1' onClick={handleClick}>Add</button>
            </form>
            <ul className='list'>
                {list.map((val,ind) => <li>{val}<button className='button2' onClick={()=>handleDelete(ind)}>Delete</button></li>)}
            </ul>
            
        </div>
    );
}

export default Text
