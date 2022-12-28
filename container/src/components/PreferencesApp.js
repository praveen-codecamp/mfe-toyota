import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Fallback from '../Fallback';

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    import('preferences/PreferencesApp')
    .then(({mount}) =>{
      const { onParentNavigate } = mount(ref.current, {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname } = history.location;
  
          if (pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
      });
  
      history.listen(onParentNavigate);
    })
    .catch(err => {
      setFallback(true);
      console.log("Error in loading preferences module", err);
    })
    
  }, []);

  if(fallback) return <Fallback module="Preferences"/>;

  return <div ref={ref} />;
};
