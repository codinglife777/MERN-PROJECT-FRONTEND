import React from 'react';
import CountUp from 'react-countup';

function InstagramCount() {
  return (
    <div>
      <CountUp start={0} end={18} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />%
            </div>
          )}
        </CountUp>
    </div>
  );
}

export default InstagramCount;