/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ClipLoader } from 'react-spinners';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { highlighted } from '../../theme';
import { Input } from '../InputsClasses';

import { DropdownContainer, InputContainer } from '../DropdownInput/styles';

class DDInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      inputValue: '',
      displayData: [],
      at: 0,
      length: 0,
    };
  }

  componentDidMount() {
    const { searchTermRequired, data, searchTerm } = this.props;
    const { inputValue } = this.state;
    this.setState({
      displayData:
        searchTermRequired || inputValue !== ''
          ? data.filter((item) => {
              if (
                item[searchTerm]
                  .toLowerCase()
                  .search(inputValue.toLowerCase()) !== -1
              ) {
                this.setState({
                  at: item[searchTerm]
                    .toLowerCase()
                    .indexOf(inputValue.toLowerCase()),
                  length: inputValue.length,
                });
                return true;
              }
              return false;
            })
          : data,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchTermRequired, data, searchTerm } = this.props;
    const { inputValue } = this.state;
    if (prevState.inputValue !== inputValue) {
      this.setState({
        displayData:
          searchTermRequired || inputValue !== ''
            ? data.filter((item) => {
                if (
                  item[searchTerm]
                    .toLowerCase()
                    .search(inputValue.toLowerCase()) !== -1
                ) {
                  this.setState({
                    at: item[searchTerm]
                      .toLowerCase()
                      .indexOf(inputValue.toLowerCase()),
                    length: inputValue.length,
                  });
                  return true;
                }
                return false;
              })
            : data,
      });
    }
  }

  onInputChange = (value) => {
    const { handleChange = () => {} } = this.props;
    this.setState({ show: true });
    this.setState({ inputValue: value });
    handleChange(value);
  };

  hideDropDown = () => {
    setTimeout(() => {
      this.setState({ show: false });
    }, 300);
  };

  handleClick = (displayValue, item) => {
    const {
      handleChange = () => {},
      handleSelect = () => {},
      stick,
    } = this.props;
    this.setState({ inputValue: displayValue });
    this.setState({ show: false });
    handleChange(undefined);
    handleSelect(item);
    if (!stick) {
      this.setState({ inputValue: '' });
    }
  };

  render() {
    const {
      initDisplayVal,
      placeholder,
      Item,
      searchTerm,
      searchTermRequired,
      reset,
      data,
      loading,
      inputName = 'ddinput',
    } = this.props;
    const { handleClick, hideDropDown, onInputChange } = this;
    const { show, inputValue, displayData, at, length } = this.state;
    return (
      <InputContainer>
        <div>
          <Input
            Icon={SearchIcon}
            iconSide="right"
            iconMargin="3%"
            iconPadding="4%"
            autoComplete="off"
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
              if (!searchTermRequired && inputValue === '') {
                this.setState({ show: false, displayData: data });
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
              {displayData.map((dataItem) => (
                <button
                  className="w-full focus:outline-none text-left"
                  key={dataItem.id}
                  type="button"
                  onClick={() => handleClick(dataItem[searchTerm], dataItem)}
                >
                  <Item item={dataItem} {...{ at, length }} />
                </button>
              ))}
            </>
          )}
          {displayData.length === 0 && (
            <div className="px-5 py-2 w-full">
              <div className="text-gray-400">
                No match found for {inputValue}
              </div>
            </div>
          )}
        </DropdownContainer>
      </InputContainer>
    );
  }
}

export default DDInput;
