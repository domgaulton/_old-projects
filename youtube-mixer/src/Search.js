import React, { Component } from 'react';
import YouTubeSearch from 'youtube-search';
import PlayerA from './PlayerA';
import PlayerB from './PlayerB';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

const opts = {
  maxResults: 5,
  key: 'AIzaSyCb0WevBvVXfVec8vVLauCx6UPE0a0ns2E',
  type: 'video'
};

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resultsList: [],
      playerAId: '',
      playerBId: '',
      volume: 50
    }
  }

  searchQuery = () => {
    let searchValue = document.getElementById("searchYoutube").value;

    if (searchValue.length >= 3) {
      YouTubeSearch(searchValue, opts, (err, results) => {
        if(err) return console.log(err);
        this.setState({resultsList: results});
      });
    }
  }

  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }

  render() {
    return (
      <div className="search">
        <h1>Search</h1>
        <input onKeyUp={this.searchQuery} id="searchYoutube" type="text" placeholder="Start typing"/>
        
        <ul className="youtube-search-results">
          {this.state.resultsList.map(data => (
            <li key={data.id}>
              <img alt="" src={data.thumbnails.medium.url} />
              <p>{data.title}</p>
              <span className="load-video" id="loadA" onClick={() => this.setState({playerAId: data.id})}>A</span>
              <span className="load-video" id="loadB" onClick={() => this.setState({playerBId: data.id})}>B</span>
            </li>
          ))}
        </ul>

        <Slider
          value={this.state.volume}
          onChange={this.handleOnChange} />

        <PlayerA pAId={this.state.playerAId} volume={this.state.volume} />
        <PlayerB pBId={this.state.playerBId} volume={this.state.volume} />

      </div>
    );
  }
}

export default Search;
