import React from 'react';

export default ({module}) => {
  return <div>
    <img
        src='undermaintanance.png'
        alt={`${module} under maintanance!!`}
        loading="lazy"
      />
    </div>;
};
