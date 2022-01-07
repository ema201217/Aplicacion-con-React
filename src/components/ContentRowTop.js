import React, { Component } from 'react'

import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';

export default class ContentRowTop extends Component {
    render() {
        return (
           <>
           {/* Content Row Top  */}
           <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>

              {/* Content Row Movies */}
             <ContentRowMovies/>
              {/* End movies in Data Base  */}

              {/* Content Row Last Movie in Data Base  */}
              <div className="row">
                {/* Last Movie in DB  */}
               <LastMovieInDb />
                {/* End content row last movie in Data Base  */}

                {/* Genres in DB  */}
                <GenresInDb/>
              </div>
            </div>
            {/* End Content Row Top */}
           </>
        )
    }
}
