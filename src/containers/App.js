import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import {
  Product,
  IconsContainer,
  ColorPicker,
  Download,
  Alert,
  RangeSlider,
  CheckboxInput,
  SearchBar,
} from '../components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const downloadRef = useRef();
  const { size, space } = useSelector(state => state.productSettings);

  return (
    <div className='app'>
      <div className='app__left'>
        <h1>
          LinkedIn Background Generator <FaLinkedin />
        </h1>
        <div className='app__left-container'>
          <Product downloadRef={downloadRef} />
          <div className='app__left-container-settings'>
            <ColorPicker />
            <CheckboxInput />
            <RangeSlider {...size} />
            <RangeSlider {...space} />
            <SearchBar />
          </div>
          <Download downloadRef={downloadRef} />
        </div>
        <a
          href='https://github.com/adi221/linkedin-background-generator'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub /> View on GitHub
        </a>
      </div>
      <div className='app__right'>
        <IconsContainer />
      </div>
      <Alert />
    </div>
  );
}

export default App;
