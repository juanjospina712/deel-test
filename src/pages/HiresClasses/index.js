/* eslint-disable react/no-danger */
/* eslint-disable react/no-danger-with-children */
/* eslint-disable react/prop-types */
// eslint-disable-next-line max-classes-per-file
import React, { Component } from 'react';
import {
  HireContainer,
  CardHolder,
  Column,
  HireContent,
  MainButton,
} from '../Hires/styles';
import { mockLocalAPI, getFromAPI } from '../../clients/apiNoAuth';
import DDInput from '../../components/DDInputClasses';
import Card from '../../components/Card';
import { renderHighlight } from '../Hires';

class CandidateRow extends Component {
  render() {
    const { item, at, length } = this.props;
    return (
      <div className="px-4 py-2">
        <p dangerouslySetInnerHTML={renderHighlight(item.name, at, length)} />
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
      selectedHire: {},
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

  selectCandidate = () => {
    const { selectedHire } = this.state;
    if (selectedHire.email === 'jose@edukathe.org') {
      alert(`You selected ${selectedHire.name}, amazing choice!`);
    } else {
      alert(`You selected ${selectedHire.name}, we all make mistakes`);
    }
  };

  onSelectFromDD = (item) => {
    this.setState({ selectedHire: item });
  };

  render() {
    const { hires, regularPeople, selectedHire } = this.state;
    const { selectCandidate, onSelectFromDD } = this;
    return (
      <HireContainer>
        <h1>Who to hire next?</h1>
        <HireContent>
          <Column>
            <CardHolder>
              <Card>
                <h3>Search for the best candidates</h3>
                <DDInput
                  data={hires}
                  stick
                  handleSelect={onSelectFromDD}
                  searchTerm="name"
                  Item={CandidateRow}
                />
              </Card>
            </CardHolder>
            <CardHolder>
              <Card>
                <h3>Search for the okay candidates</h3>
                <DDInput
                  data={regularPeople}
                  stick
                  searchTerm="name"
                  handleSelect={onSelectFromDD}
                  Item={CandidateRow}
                />
              </Card>
            </CardHolder>
          </Column>
          <Column>
            <CardHolder>
              <Card>
                <h2>Your selected candidate</h2>
                <h3>Name: {selectedHire.name}</h3>
                <h3>Email: {selectedHire.email}</h3>
                <MainButton onClick={selectCandidate}>Hire Now!</MainButton>
              </Card>
            </CardHolder>
          </Column>
        </HireContent>
      </HireContainer>
    );
  }
}
