import React from 'react';
import Plot from 'react-plotly.js';

const Poll = ({ subject, data }) => {
    const temp = data.filter(vote => vote.poll == subject).map(v => v.vote);
    const distinct = temp.filter((v, i, a) => a.indexOf(v) === i);

    const counts = [];
    distinct.forEach(element => {
        counts.push(temp.filter(val => val == element).length)
    });

    return (
    <React.Fragment>
         <Plot
         data={[
            { type: 'bar', x: distinct, y: counts},
          ]}
          layout={ {width: 1200, height: 400} }
          />
    </React.Fragment>
    );
}

export default Poll