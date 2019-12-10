import React, { Component } from 'react';

class PersonDetailAlbum extends Component {

    render () {
        return (
            <div className="detailAlbumsListContainer">
                {
                    this.props.photos.map(pic => {
                        return (
                            <div className="detailSinglePicContainer" key={pic.cover}>
                                <img 
                                    src={`Albums/${this.props.name}/${pic.cover}.jpeg`} 
                                    alt="ss" 
                                    className="detailAlbumPic" />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default PersonDetailAlbum