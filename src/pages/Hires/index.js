/* eslint-disable react/no-danger */
/* eslint-disable react/no-danger-with-children */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { mockLocalAPI, getFromAPI } from '../../clients/apiNoAuth';
import {
  HireContainer,
  CardHolder,
  Column,
  HireContent,
  MainButton,
} from './styles';
import DDInput from '../../components/DropdownInput';
import Card from '../../components/Card';

export const renderHighlight = (text, at, length) => {
  const textArr = text.split('');
  let renderString = '';
  textArr.forEach((char, i) => {
    if (i === at && length !== 0) {
      renderString += `<span class="match">${char}`;
    } else if (i === at + length - 1 && length !== 0) {
      renderString += `${char}</span>`;
    } else {
      renderString += char;
    }
  });
  return { __html: renderString };
};

const CandidateRow = ({ item, at, length }) => (
  <div className="px-4 py-2">
    <p dangerouslySetInnerHTML={renderHighlight(item.name, at, length)}>{}</p>
    <p>{item.email}</p>
  </div>
);

const HiresComp = () => {
  const [hires, setHires] = useState([]);
  const [regularPeople, setRegularPeople] = useState([]);
  const [selectedHire, setSelectedHire] = useState({});
  const getCandidates = async () => {
    const candidates = await mockLocalAPI();
    setHires(candidates);
  };

  const getSecondChoices = async () => {
    const result = await getFromAPI();
    setRegularPeople(result);
  };
  const selectCandidate = () => {
    if (selectedHire.email === 'jose@edukathe.org') {
      alert(`You selected ${selectedHire.name}, amazing choice!`);
    } else {
      alert(`You selected ${selectedHire.name}, we all make mistakes`);
    }
  };

  useEffect(() => {
    getCandidates();
    getSecondChoices();
  }, []);
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
                handleSelect={(item) => setSelectedHire(item)}
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
                searchTerm="name"
                handleSelect={(item) => setSelectedHire(item)}
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
};

export default HiresComp;
