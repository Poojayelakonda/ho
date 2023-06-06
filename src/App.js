import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Form from './components/Form';
import NavBar from './components/NavBar';

function App() {


  const [postData, setPostsData]=useState([])
  const[navItems,setNavItems]=useState([])
  const[selectedNavItem,setSelectedNavItem]=useState('events')
useEffect(()=>{
getData()

},[])
useEffect(()=>{
console.log(postData);
},[postData])

const getData=()=>{
  axios.get("http://192.168.1.75:8080/api/v1/postluu")
.then(res=>{setPostsData(res.data)
  setNavBar(res.data)
})
}

const setNavBar =(data)=>{
  const Items =new Set()
  data.forEach(post => {
    Items.add(post.category)
  });

  setNavItems([...Items])
  
}
const postdata=(data)=>{
  axios.post("http://192.168.1.75:8080/api/v1/postluu",data)
.then(
  setPostsData([...postData,data])
)
}

const deletepost =(id)=>{
  axios.delete(`http://192.168.1.75:8080/api/v1/postluu/${id}`)
.then(
  res=>{setPostsData(res.data)}
)
}



const getFormData=(data)=>{
postdata(data);
}
const getNavItem=(item)=>{
  console.log(item);
 setSelectedNavItem(item)
}


 
  return (
    <div className="App">
      <NavBar navItems={navItems} getNavItem={getNavItem}/>
      <h1>Home App</h1>
      {
        postData.map(post=>{
          return selectedNavItem==post.category? <Card key={post.id} data={post} deletepost={deletepost}/>:null
        })
      }

      <Form onSubmit={getFormData}/>
    </div>
  );
}

export default App;
