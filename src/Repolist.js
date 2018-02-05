//@flow
import React, {Component} from 'react';
import SubscriberCount from './SubscriberCount';

type Props = {
  repo: Object,
};
type State = {
  subscriber: string,
};
class Repolist extends Component<Props, State> {
  state = {
    subscriber: '',
  };

  render() {
    let {repo} = this.props;
    console.log('repo >>> : ', repo);

    let onClickRepo = () => {
      let repoLink = 'https://api.github.com/repos/';
      fetch(repoLink + repo.full_name)
        .then((response) => {
          return response.json();
        })
        .then((repo) => {
          this.setState({subscriber: repo.subscribers_count.toString()});
        });
    };
    return (
      <div>
        <li onClick={() => onClickRepo()}>{repo.full_name}</li>
        <SubscriberCount subscriber={this.state.subscriber} />
      </div>
    );
  }
}

export default Repolist;
