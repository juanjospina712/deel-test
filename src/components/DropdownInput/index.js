/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { highlighted } from '../../theme';
import { useDebounce } from '../../utils/search';
import { DropdownContainer, InputContainer } from './styles';
import { Input } from '../Inputs';

const DDInputNoItem = ({
  initDisplayVal,
  placeholder,
  inputName = 'ddinput',
  data,
  searchTerm,
  Item,
  handleChange = () => {},
  handleSelect = () => {},
  stick = true,
  loading,
  reset,
  searchTermRequired = true,
  inputValue,
  setInputValue = () => {},
}) => {
  const [show, setShow] = useState(false);
  // const [inputValue, setInputValue] = useState('');
  const [foundAt, setFoundAt] = useState({ at: 0, length: 0 });

  const searchTermDebounced = useDebounce(inputValue, 500);
  const [displayData, setDisplayData] = useState(() => data || []);

  const onInputChange = (value) => {
    setShow(true);
    setInputValue(value);
    handleChange(value);
  };

  const hideDropDown = () => {
    setTimeout(() => {
      setShow(false);
    }, 300);
  };

  const onInputFocused = () => {
    setShow(true);
  };

  const handleClick = (displayValue, item) => {
    setInputValue(displayValue);
    setShow(false);
    handleChange(undefined);
    handleSelect(item);
    if (!stick) {
      setInputValue('');
    }
  };

  useEffect(() => {
    setDisplayData(
      searchTermRequired || searchTermDebounced !== ''
        ? data.filter((item) => {
            if (
              item[searchTerm]
                .toLowerCase()
                .search(searchTermDebounced.toLowerCase()) !== -1
            ) {
              setFoundAt({
                at: item[searchTerm]
                  .toLowerCase()
                  .indexOf(searchTermDebounced.toLowerCase()),
                length: searchTermDebounced.length,
              });
              return true;
            }
            return false;
          })
        : data,
    );
  }, [data, searchTermDebounced, searchTermRequired]);

  console.info('foundAt', foundAt);
  return (
    <InputContainer>
      <div>
        <Input
          Icon={SearchIcon}
          iconSide="right"
          iconMargin="3%"
          iconPadding="4%"
          autoComplete="off"
          onFocus={(e) => {
            onInputFocused(e.value);
          }}
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
          placeholder={initDisplayVal || placeholder}
          value={inputValue}
          onBlur={() => {
            hideDropDown();
          }}
          onClick={() => {
            if (typeof reset === 'function') {
              reset();
            }
            if (!searchTermRequired && searchTermDebounced === '') {
              setShow(true);
              setDisplayData(data);
            }
          }}
          id={`dropDown${inputName}`}
        />
      </div>
      <DropdownContainer className={`${show ? 'visible' : ''}`}>
        {loading ? (
          <center className="w-full mt-2">
            <ClipLoader fill={highlighted} size={15} />
          </center>
        ) : (
          <>
            <div className="h-full">
              {displayData.map((dataItem) => (
                <button
                  className="w-full focus:outline-none text-left"
                  key={dataItem.id}
                  type="button"
                  onClick={() => handleClick(dataItem[searchTerm], dataItem)}
                >
                  <Item item={dataItem} {...foundAt} />
                </button>
              ))}
            </div>
          </>
        )}
        {displayData.length === 0 && (
          <div className="px-5 py-2 w-full">
            <div className="text-gray-400">No match found for {inputValue}</div>
          </div>
        )}
      </DropdownContainer>
    </InputContainer>
  );
};

export default DDInputNoItem;
