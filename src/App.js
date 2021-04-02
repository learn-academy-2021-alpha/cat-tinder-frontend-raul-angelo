import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatIndex from "./pages/CatIndex";
import CatShow from "./pages/CatShow";
import CatNew from "./pages/CatNew";
import CatEdit from "./pages/CatEdit";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import cats from "./mockCats.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";


class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			cats: []
		}
	}

		componentDidMount(){
	    this.catIndex()
	  }

		catIndex = () => {
		    fetch("http://localhost:3000/cats")
		    .then(response => {
		      return response.json()
		    })
		    .then(catsArray => {
		      console.log(catsArray)
		      this.setState({ cats: catsArray })
		    })
		    .catch(errors => {
		      console.log("index errors:", errors)
		    })
		  }

		createNewCat = (newCat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something is wrong with your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.catIndex()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }


	render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route
            path="/catindex"
            render = { () => <CatIndex cats={this.state.cats}/> }/>
          <Route path="/catshow/:id" render = {(props) => {
            const id = +props.match.params.id;
            const foundKitty = this.state.cats.find(cat => cat.id === id);
            return <CatShow cat={foundKitty}/>}
          } />
          <Route path="/catnew" component = { CatNew } />
          <Route path="/catedit" component = { CatEdit } />
          <Route component = { NotFound } />
        </Switch>
        <Footer />
      </Router>
		);
	}
}

export default App;
