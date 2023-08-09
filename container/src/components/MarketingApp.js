import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'marketing/MarketingApp';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    // get the current path from the browser
    const { pathname } = history.location;

    const { onParentNavigate } = mount(ref.current, {
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
