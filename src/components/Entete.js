import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Entete.css';
import Search from './Search'
import metallica from "../data/mettalica";
import MembreGroupeRock from "./MembreGroupeRock";
import ListeAlbum from "./ListeAlbum";
import About from "./About"
import './Entete.css'
import 'materialize-css/dist/css/materialize.min.css';
class Entete  extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      image:metallica.picture.medium,
      isLoading: true,
      users: [],
      error: null,
      name:"",
      abstract:"",
      photoUrl:"",
      datenaissance:"",
      location:[],
     
      members:[],
      albums:[],
      searchTerm:"",
      artist:[],

      genres:[],
      associatedMusicalArtist:[],
      recordLabel:[],
      deezerFans:"",
      dbp_genre:[],


    }
  }
  



    //url = ""
    async  getData(url) {
      let reponseJson = await fetch("https://wasabi.i3s.unice.fr/api/v1/artist_all/name/"+url);
      let metallicaEnObjetJS = await reponseJson.json();
     
      return metallicaEnObjetJS;
   }
  
  
  componentDidMount(){
   
  
   

   }

   
 
    render(){
    
      const { isLoading, users, error,searchTerm } = this.state;
      const urli = this.props.match.params.name
    // this.state.abstract =''
      this.getData(urli).then(metallicas => {
        console.log("rooott"+this.props.match.params.name)
       
        this.setState({
          name: metallicas.name,
          abstract:metallicas.abstract,
          photoUrl:metallicas.picture.medium,
          datenaissance:metallicas.lifeSpan.begin,
          location:metallicas.locationInfo,
          members: metallicas.members,
          albums: metallicas.albums,

          genres: metallicas.genres,
          associatedMusicalArtist: metallicas.associatedMusicalArtist,
          recordLabel: metallicas.recordLabel,
          deezerFans: metallicas.deezerFans,
          dbp_genre: metallicas.dbp_genre,
        
  
        })
        
        
       
      
      
    })
     // this.componentDidMount()
     // console.log("llllllllll"+this.url)
      //const result = Object.values(this.state.location);
     
     // let listeAlbum = metallica.albums.map((m, index) => (
      //  <ListeAlbum lalbum={m} index={index} />
     // ));
  
  return (
    <div>
  
    <div className="row profiletete">
  <div className="col l12 m12 s12 ">
    <div className="row">
      <div className="col s8">
        <div className="card">
          <div className="card-image">
            <img src="http://www.img.lirent.net/2014/10/Android-Lollipop-wallpapers-Download.jpg" alt="" />
          </div>
          <div className="card-content">
            <div className="row">
              <div className="col s4 profile-pic">
                <img className="circle responsive-img" src={this.state.photoUrl} alt="" />
              </div>
             
              <div className="col right controls ">
                <i className="material-icons" onClick='showMenu()'>more_vert</i>
              </div>

             <p>{this.state.abstract}</p>
             </div>
            <h2 className="card-title black-text">{this.state.name}</h2>
          </div>
        </div>
      </div>
      <div className="col s4">
      
       { <About date={this.state.datenaissance} location={this.state.location} members = {this.state.members}
       
       genres= {this.state.genres}  associatedMusicalArtist= {this.state.associatedMusicalArtist}   recordLabel= {this.state.recordLabel} 
       deezerFans= {this.state.deezerFans}   dbp_genre= {this.state.dbp_genre} 
    
       
       />}
       </div>
    </div>
     {<ListeAlbum lalbum={this.state.albums} />}
  </div>

    
    
    </div>
    </div>
  
   
  )
 
}
}

export default Entete;
