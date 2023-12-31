import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'auth/AuthApp';

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    // get the current path from the browser
    const { pathname } = history.location;
    const { onParentNavigate } = mount(ref.current, {
      onSignIn,
      initialPath: pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        // if the current path is not the same as the new path
        // update the browser path
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
