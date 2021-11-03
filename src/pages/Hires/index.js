/* eslint-disable react/no-danger */
/* eslint-disable react/no-danger-with-children */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { mockLocalAPI, getFromAPI } from '../../clients/apiNoAuth';
import { Blocked, ActionHolder } from './styles';
import DDInput from '../../components/DropdownInput';

const renderHighlight = (text, at, length) => {
  const textArr = text.split('');
  let renderString = '';
  textArr.forEach((char, i) => {
    if (i === at) {
      renderString += `<strong>${char}`;
    } else if (i === at + length - 1) {
      renderString += `${char}</strong>`;
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
  const getCandidates = async () => {
    const candidates = await mockLocalAPI();
    setHires(candidates);
  };

  const getSecondChoices = async () => {
    const result = await getFromAPI();
    setRegularPeople(result);
  };
  useEffect(() => {
    getCandidates();
    getSecondChoices();
  }, []);
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
          <DDInput data={regularPeople} searchTerm="name" Item={CandidateRow} />
        </ActionHolder>
      </center>
    </Blocked>
  );
};

export default HiresComp;
