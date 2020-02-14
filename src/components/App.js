import React from 'react';
import unsplash from '../Api.js/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = { images: [] }
    onSearchSubmit = async (term) => {
        const object = await unsplash.get('/search/photos',{
            params: {query: term}
        });
        
        this.setState({ images: object.data.results })

    }
    // showImages() {
    //     return (
    //         <div>
    //             for(image in this.state.images) {
    //                 {image}
    //             }
    //         </div>
    //     )
    // }
    render() {
        return  (
            <div className="container">
                <SearchBar searchBarInput={this.onSearchSubmit}/>
                <div className="container">
                    Found: {this.state.images.length} images
                </div>
                <div className="container">
                    <ImageList images={this.state.images} />
                </div>
            </div>
        );
    }
}
export default App