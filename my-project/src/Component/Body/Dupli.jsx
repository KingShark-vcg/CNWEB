import React from 'react'

const DuplicatedSVGs = ({ filled, count }) => {
    const svgArray = Array.from({ length: count }, (_, index) => (
      <div key={index}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.40391 1.98328V11.8719L11.0089 13.6499L10.5142 9.49428L13.2372 6.44111L9.32541 5.65011L7.40391 1.98328Z" fill={index < filled ? '#FDD835' : '#B8B8B8'}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.4039 1.98328V11.8719L3.79891 13.6499L4.29357 9.49428L1.57057 6.44111L5.4824 5.65011L7.4039 1.98328Z" fill={index < filled ? '#FDD835' : '#B8B8B8'}/>
        </svg>
      </div>
    ));
    return (
        <div className="flex">
          {svgArray}
        </div>
      );
    }
export default DuplicatedSVGs
