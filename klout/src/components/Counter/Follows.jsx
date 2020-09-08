import React from 'react';
import CountUp from 'react-countup';

function Follows() {
  return (
    <div>
      <CountUp start={0} end={25356} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
    </div>
  );
}

export default Follows;


