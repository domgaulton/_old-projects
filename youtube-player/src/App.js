import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';
import './App.css';

// https://console.developers.google.com/
const API_KEY = 'AIzaSyCb0WevBvVXfVec8vVLauCx6UPE0a0ns2E';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('React Tutorial');
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, (data) => {
      this.setState({
        videos: data,
        //set state as first in list as default
        selectedVideo: data[0]
      });
    })
  }

  render() {
    return (
      <div>
        <SearchBar 
          // on search term change run the function using updated search term
          onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
        <VideoDetail 
          // null as standard but after videoSearch runs the first item is used
          video={this.state.selectedVideo} />
        <VideoList 
          // passing props to child (see VideoList.js) then from here onto individual VideoListItem
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
