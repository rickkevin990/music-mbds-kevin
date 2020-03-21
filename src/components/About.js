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
import M from 'materialize-css';  
import metallica from "../data/mettalica";
import MembreGroupeRock from "./MembreGroupeRock";
import ListeAlbum from "./ListeAlbum";
import './About.css'
import 'materialize-css/dist/css/materialize.min.css';


function About({date,location,members, genres,associatedMusicalArtist,recordLabel,deezerFans,dbp_genre,}) {
 
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {inDuration: 300, outDuration: 225});
  });
  // Or with jQuery

 // $('.dropdown-trigger').dropdown();
  //const result = Object.values(location);
     
  return (
    <div>
        
        <ul class="collection">
  
    <li class="collection-item avatar">
   
      <i class="material-icons circle green">cake</i>
    
      <span class="title">{date}</span>
      
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle green">location_on</i>
     { location.map((h, index) => (
      <span class="title">- {h}</span>
     ))}
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle green">merge_type</i>
      { genres.map((h, index) => (
      <span class="title">- {h}</span>
     ))}
     
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle green">merge_type</i>
      { associatedMusicalArtist.map((h, index) => (
      <span class="title">- {h}</span>
     ))}
     
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle green">merge_type</i>
      { recordLabel.map((h, index) => (
      <span class="title">- {h}</span>
     ))}
     
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle green">merge_type</i>
      { dbp_genre.map((h, index) => (
      <span class="title">- {h}</span>
     ))}
     
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle green">merge_type</i>
     
      <span class="title">{deezerFans}</span>
   
     
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
    {members !== undefined    &&
      <div class="row">
      
      <div class="col s6">
      <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Former</a>
      </div>
      <div class="col s6">
      <a class="waves-effect waves-light btn modal-trigger" href="#modal2">Former Member</a>
      </div>
  
  
  </div>
    }

  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Member</h4>
      <table class="responsive-table">
        <thead>
          <tr>
              <th>Name</th>
              <th>Genre</th>
              <th>Birthday</th>
              <th>Instrument</th>

          </tr>
        </thead>
        {members !== undefined  &&
        <tbody>
          { members.map((m, index) => (
          <tr>
            <td>{m.name}</td>
            <td>{m.gender}</td>
            <td>{m.birthDate}</td>
            { m.instruments.map((m1, index) => (
            <td>{m1}</td>
            ))}
          </tr>
          ))}
          
        </tbody>
        }
      </table>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">close</a>
    </div>
  </div>

  <div id="modal2" class="modal">
    <div class="modal-content">
      <h4>Former member</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">close</a>
    </div>
  </div>

    </li>
  </ul>
    
    
  
    </div>
  
   
  );
};

export default About;
