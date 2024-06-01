import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleTagManager = () => {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-EG9QV76K1H"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EG9QV76K1H');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleTagManager;
