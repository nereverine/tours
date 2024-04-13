import React, { Component } from "react";
import Modal from "./components/Modal";
import Login from "./components/Auth/Login";
import NoPage from "./components/NoPage";
import Register from "./components/Auth/Register";
import Main from "./components/Main";
import Logout from "./components/Auth/Logout"
import axios from "axios";
import { Card } from "reactstrap";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";

const todoItems = [
  {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for the upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use Django with React",
    completed: false,
  },
];

let isLoggedIn = false
if(localStorage.getItem('access_token')!==null){
  isLoggedIn = true;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: [],
      modal: false,
      activeItem: {
        title: "",
        description: "",
        completed: false,
      },
    };
  }

  componentDidMount(){
    //this.refreshList();
  }

  /* refreshList = () => {
    axios.get("/api/tours")
    .then((res) => this.setState({todoList: res.data}))
    .catch((err) => console.log(err));
  }; */

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    alert("save" + JSON.stringify(item));
  };

  handleDelete = (item) => {
    alert("delete" + JSON.stringify(item));
  };

  createItem = () => {
    const item = { title: "", description: "", completed: false };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  };

  render() {
      

    return (
      
      <div>
        {/* navbar only appears if the user is logged in */}
        {isLoggedIn ? <Navbar></Navbar>: null}
        
        <Routes>   
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/" element={<Main/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
      </Routes>
      
    </div>
      


      
      
    );
  }

  
}

export default App;