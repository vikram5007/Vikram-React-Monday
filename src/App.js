import React from 'react';
import { useState } from 'react';
import './styles/App.css'
import Header from './components/Header'
import Content from './components/Content'
import Info from './components/Info';
import Inputitem from './components/Input';
import Search from './components/Search';

function App() {
  const [items, setitems] = useState(
  JSON.parse(localStorage.getItem("todo_items"))
  );
  
  const [NewItem, SetNewItem] = useState('');

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const arr_str = {id, checked: false, item };
  const listitems = [...items, arr_str];
  setitems(listitems);
  localStorage.setItem("todo_items", JSON.stringify(listitems));
}

const handleCheck = (id) => {
  const listitems = items.map((item) => item.id === id
    ? { ...item, checked: !item.checked }
    : item
  )
  setitems(listitems);
  localStorage.setItem("todo_items", JSON.stringify(listitems));
}

const handleDelete = (id) => {
  const listitems = items.filter((item) => item.id !== id)
  setitems(listitems);
  localStorage.setItem("todo_items", JSON.stringify(listitems));

}
if (items.length === 0) {
  var h3 = document.getElementById("h3")
  h3.style.display = "block";
}


const handleInput = (e) => {
  e.preventDefault();
  if (!NewItem) return;
  console.log(NewItem);
  addItem(NewItem);
  SetNewItem("")
}

const [SearchItem,newSearch]=useState('');


return (
  <div>
    <Header title="Hello there" />
    <Inputitem
      NewItem={NewItem}
      SetNewItem={SetNewItem}
      handleInput={handleInput}
    />
    <Search
    search={SearchItem}
    newSearch={newSearch}
 
    />
    <Content
      items={items.filter(item=>((item.item).toLowerCase()).includes(SearchItem.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
    />
    <Info
      length={items.length}
    />
  </div>
);
}

export default App;
