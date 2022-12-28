//import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    import('dashboard/DashboardApp')
    .then(({mount}) =>{
      mount(ref.current);
    })
    .catch(err => {
      console.log("Error in loading Dashboard module", err);
    })
  }, []);

  return <div ref={ref} />;
};
