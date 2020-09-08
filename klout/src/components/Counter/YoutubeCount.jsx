import React from 'react';
import CountUp from 'react-countup';

function YoutubeCount() {
  return (
    <div>
      <CountUp start={0} end={25} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />%
            </div>
          )}
        </CountUp>
    </div>
  );
}

export default YoutubeCount;