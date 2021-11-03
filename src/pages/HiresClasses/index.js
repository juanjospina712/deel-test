/* eslint-disable react/prop-types */
// eslint-disable-next-line max-classes-per-file
import React, { Component } from 'react';
import { Blocked, ActionHolder } from '../Hires/styles';
import { mockLocalAPI, getFromAPI } from '../../clients/apiNoAuth';
import DDInput from '../../components/DDInputClasses';

class CandidateRow extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="px-4 py-2">
        <p>
          <strong>{item.name}</strong>
        </p>
        <p>{item.email}</p>
      </div>
    );
  }
}

export default class HiresClasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hires: [],
      regularPeople: [],
    };
  }

  componentDidMount() {
    this.getCandidates();
    this.getSecondChoices();
  }

  getCandidates = async () => {
    const candidates = await mockLocalAPI();
    this.setState({ hires: candidates });
  };

  getSecondChoices = async () => {
    const result = await getFromAPI();
    this.setState({ regularPeople: result });
  };

  render() {
    const { hires, regularPeople } = this.state;
    return (
      <Blocked>
        <center>
          <h1>Who to hire next?</h1>
          <ActionHolder>
            <h3>Search for the best candidates</h3>
            <DDInput data={hires} searchTerm="name" Item={CandidateRow} />
          </ActionHolder>
          <ActionHolder>
            <h3>Search for the okay candidates</h3>
            <DDInput
              data={regularPeople}
              searchTerm="name"
              Item={CandidateRow}
            />
          </ActionHolder>
        </center>
      </Blocked>
    );
  }
}
