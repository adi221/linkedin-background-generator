import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import html2canvas from 'html2canvas';
import './Download.scss';

import { FaDownload } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';

const Download = ({ downloadRef }) => {
  const [downloadType, setDownloadType] = useState('.png');

  const downloadSettings = {
    // width: 1584,
    // height: 396,
    scale: 4,
  };

  const DEFAULT_PNG = {
    fileName: 'linkedinbanner.png',
    type: 'image/png',
    html2CanvasOptions: { ...downloadSettings },
  };

  const DEFAULT_JPEG = {
    fileName: 'linkedinbanner.jpg',
    type: 'image/jpeg',
    html2CanvasOptions: { ...downloadSettings },
  };

  const saveAs = (uri, filename) => {
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  };

  const exportComponent = (node, { fileName, type, html2CanvasOptions }) => {
    const element = ReactDOM.findDOMNode(node.current);
    return html2canvas(element, {
      scrollY: -window.scrollY,
      useCORS: true,
      ...html2CanvasOptions,
    }).then(canvas => {
      saveAs(canvas.toDataURL(type, 1.0), fileName);
    });
  };

  const downloadComponent = () => {
    downloadType === '.png'
      ? exportComponent(downloadRef, { ...DEFAULT_PNG })
      : exportComponent(downloadRef, { ...DEFAULT_JPEG });
  };

  const typeHandler = () => {
    setDownloadType(current => (current === '.png' ? '.jpg' : '.png'));
  };

  return (
    <div className='download' id='banner2'>
      <button className='download__button' onClick={downloadComponent}>
        Download
        <FaDownload />
      </button>
      <button className='download__type' onClick={typeHandler}>
        {downloadType} <BsChevronDown />
      </button>
    </div>
  );
};

export default Download;
