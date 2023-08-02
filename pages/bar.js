import React from 'react';
import { VegaLite } from 'react-vega';

const VegaPage = ({ data }) => {
  const spec = {
    // ... Vega-Lite specification ...
    "data": {
      "values": data
    },
    // ... Other Vega-Lite properties ...
  };
  return (
    <div>
      <VegaLite spec={spec} />
    </div>
  );
};

export default VegaPage;

export async function getServerSideProps() {
  // Fetch your data here (e.g., from an API or a database) 
  const data = {
    table: [
      { a: "A", b: 28 },
      { a: "B", b: 55 },
      { a: "C", b: 43 },
      { a: "D", b: 91 },
      { a: "E", b: 81 },
      { a: "F", b: 53 },
      { a: "G", b: 19 },
      { a: "H", b: 87 },
      { a: "I", b: 52 }
    ]
  };

  return {
    props: {
      data,
    },
  };
}
