import React, { useState, useEffect } from 'react';
import createActivityDetector from 'activity-detector';

interface ActivityDetectorOptions {
  timeToIdle?: number;
}

const useIdle = (options: ActivityDetectorOptions) => {
  const [isIdle, setIsIdle] = useState(false);
  useEffect(() => {
    const activityDetector = createActivityDetector(options);
    activityDetector.on('idle', () => setIsIdle(true));
    activityDetector.on('active', () => setIsIdle(false));
    return () => activityDetector.stop();
  }, []);

  return isIdle;
};

export const Idle: React.FC = () => {
  const isIdle = useIdle({ timeToIdle: 1000 });

  return <div>{isIdle ? 'Are you still there ?' : 'Hello there !'}</div>;
};
