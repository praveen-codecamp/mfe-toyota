//import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Fallback from '../Fallback';

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    import('auth/AuthApp')
    .then(({mount}) =>{
      const { onParentNavigate } = mount(ref.current, {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname } = history.location;
  
          if (pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
        onSignIn,
      });
  
      history.listen(onParentNavigate);
    })
    .catch(err => {
      setFallback(true);
      console.log("Error in loading Auth module", err);
    })
  }, []);
  if(fallback) return <Fallback module="Auth"/>;
  return <div ref={ref} />;
};
