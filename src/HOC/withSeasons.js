import React from 'react';
import { getEpisodes } from 'services/getEpisodes';

export function withSeasons(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.groupEpisodesBySeason = this.groupEpisodesBySeason.bind(this);
      this.state = {
        loading: false,
        seasons: undefined,
      };
    }

    componentDidMount() {
      this.setState({ loading: true });
      getEpisodes().then((responseSeasons) => {
        this.setState({
          loading: false,
          seasons: this.groupEpisodesBySeason(responseSeasons),
        });
      });
    }

    groupEpisodesBySeason(episodes) {
      const length = episodes.length;
      const lastSeason = episodes[length - 1].season;
      const episodesBySeasons = [];

      for (let numSeason = 0; numSeason < lastSeason; numSeason++) {
        episodesBySeasons.push([]);
      }

      episodes.forEach((episode) => {
        episodesBySeasons[episode.season - 1]?.push(episode);
      });

      return episodesBySeasons;
    }

    render() {
      return (
        <WrappedComponent
          loading={this.state.loading}
          seasons={this.state.seasons}
          {...this.props}
        />
      );
    }
  };
}
