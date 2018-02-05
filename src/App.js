//@flow

import React, {Component} from 'react';
import Repolist from './Repolist';
import Search from './Search';

type State = {
  reposList: Array<Object>,
  isReset: boolean,
  inputValue: string,
};

type Props = {};
class App extends Component<Props, State> {
  state = {
    reposList: [],
    isReset: false,
    inputValue: '',
  };

  _onSearch = async (input: string) => {
    //async/await style
    this.setState({inputValue: input});
    let repoLink = 'https://api.github.com/orgs/';
    let awaitFetch = await fetch(repoLink + input + '/repos');
    let responseJson = await awaitFetch.json();
    let repoArrayPromise = await responseJson.map((repo) => {
      return repo;
    });
    this.setState({reposList: repoArrayPromise});
    //Promise style
    // let repoArray = await Promise.all(repoArrayPromise);
    // this.setState({reposList: repoArray});
    // fetch(repoLink + input + '/repos')
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((item) => {
    //     let repoArray = item.map((repo) => {
    //       return repo;
    //     });
    //     Promise.all(repoArray).then((arrayOfRepos) => {
    //       this.setState({reposList: arrayOfRepos});
    //     });
    //   });
  };

  render() {
    let {reposList} = this.state;
    console.log(reposList);
    return (
      <div>
        <Search onSearch={this._onSearch} />
        {reposList.map((repo, index) => {
          return <Repolist key={index} repo={repo} />;
        })}
      </div>
    );
  }
}

export default App;
