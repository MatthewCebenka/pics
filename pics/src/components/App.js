import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term},
        headers: {
            Authorization: 'Client-ID Ws1Pp9TTWrv9wjsRtci1xcNYeybWAnjRG8NzlHIjQDk'
        }
        });
    }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
