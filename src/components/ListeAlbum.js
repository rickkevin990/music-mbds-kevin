import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import './ListeAlbum.css'
function ListeAlbum({lalbum,cover,song}) {
let cov
  
    return (

        <div class="valign-wrapper">

            <div class="row " >
                <div class="col 12 ">
                    <div class="card-panel    ">
                        <div class="row ">

                     { Object.keys(lalbum).map((m, index) => ( lalbum[m].cover ? cover = lalbum[m].cover :console.log("tsy misy"),
                         song =  lalbum[m].songs,
                            <div class="col 8 teal contentprincipal" key={index}  >
                                <div class="card">
                               
                                    <div class="card-image">
                                   
                                    {
                                        <img key={index} className="image" src={cover.medium} />
                                    }
                                    
                                    </div>
                                   
                                    <div class="card-content">
                                        <table class="bordered">


                                            <tbody>
                                        {Object.keys(song).map((s, i) => (
                                                <tr key={i}>
                                                    <td>{song[s].title}</td>

                                                </tr>
                                        ))}
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="card-action">
                                        <a href="#">{ lalbum[m].title }</a>
                                    </div>
                                </div>
                            </div>
                     ))}
                           
                            




                        </div>
                    </div>
                </div>
            </div>
        </div>





    );
}


export default ListeAlbum;
