import React from "react";
import "./Search.css";
import SuggestionInputSearch from 'suggestion-react-input-search'; 
import {BrowserRouter,Route, Link } from 'react-router-dom';
import Entete from './Entete';
class Search  extends React.Component {
    constructor(props) {
        super(props);
        this.items=['david','damien','sara','daa','d','d','d'

        ]

        this.state = {name: '',sugg:[],searchobject:[],listname:[],text:""};
    
        this.handleChange = this.handleChange.bind(this);
    //    this.handleSubmit = this.handleSubmit.bind(this);
      }

      async  getData(url) {
        let reponseJson = await fetch(url);
        let metallicaEnObjetJS = await reponseJson.json();
      //  console.log("iiiiii"+metallicaEnObjetJS)
      
        this.setState({ searchobject : metallicaEnObjetJS })
        return metallicaEnObjetJS;
     }

     suggestionSelected(value){
        this.setState(()=>({sugg:[] , text:value}))
     }

      onTextChange=(e)=> {
           
            const value = e.target.value;
            const url = "https://wasabi.i3s.unice.fr/search/fulltext/:"+value
            let sugg = [];
            let data = this.getData(url);
           
            if(value.length>0){
                var input=[]
                const regex  = new RegExp(`^${value}`,'i');

                this.state.searchobject.map((m, index) => (
                    console.log("mmmm"+m),
                    input.push(m.name)
                    //this.setState({listname:m})
                
                ))
               sugg = input.sort().filter(v=>regex.test(v));
              
            
        }
            this.setState(()=>({sugg , name:url ,text:value}))
          
      }
      renderSuggestions(){
          const { sugg } = this.state;
          if (sugg.length===0){
              return null;
          }
          return (
              
            <ul class="collection">
               
                {sugg.map((item)=>

                <Link to={`/entete/${item}`} onClick={()=>this.suggestionSelected(item)} class="collection-item avatar">
                <i class="material-icons circle">folder</i>     
                {item} {console.log(item)}
                </Link>
                 
                 
                )}
            </ul>
          );
    }

    handleChange(event) {
        this.setState({name: event.target.value});
      }

    handleOnSubmit(term) {
        // Do whatever you need i.e. calling API
        this.setState({name: term});
    }
   
    render(){
        const {text} =this.state;

      
  return (
      <div className="searchs">
    <nav>
     
    <div class="nav-wrapper">
      
        <div class="input-field">
        <input value={text} onChange={this.onTextChange} id="search" type="search" required />
      
     
        
        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
         
          </div>
             
            
         </div>
        
     </nav>
    {this.renderSuggestions()}
 </div>
  );
}
}

export default Search;
