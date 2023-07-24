import React from 'react';
import dynamic from 'next/dynamic';
import UAParser from 'ua-parser-js';
import ServerComponent from './tasks';

const ClientComponent = dynamic(() => import('./todos'), {
  ssr: false,
});

const about = ({ isSpider }) => {
  return (
    <div>
      {isSpider ? <ServerComponent /> : <ClientComponent />}
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const parser = new UAParser(req.headers['user-agent']); 
  const userAgent = parser.getUA();
  
  return {
    props: {
      isSpider: userAgent === 'GoogleBot' ,
    },
  };
};

export default about;