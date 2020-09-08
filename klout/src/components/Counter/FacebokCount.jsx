import React from 'react';
import CountUp from 'react-countup';

function FacebookCount() {
  return (
    <div>
      <CountUp start={0} end={32} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />%
            </div>
          )}
        </CountUp>
    </div>
  );
}

export default FacebookCount;