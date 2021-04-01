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
			cats: cats
		}
	}

	createNewCat = (newcat) => {
	console.log(newcat)
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
