import React, { Component } from 'react';

import AsyncSelect from 'react-select/async';
import { stateOptions } from '../tempData';

const filterColors = (inputValue) => {
  return stateOptions.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
};

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default class Select extends Component {
  state = { inputValue: '' };
  handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <AsyncSelect
        isMulti
        autoFocus
        placeholder="Select an Employee"
        // noOptionsMessage
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        theme={(theme) => ({
          ...theme,
          borderRadius: '4px',
          colors: {
            ...theme.colors,
            primary: '#183283',
          },
        })}
        onChange={(e) => console.log(e)}
      />
    );
  }
}
