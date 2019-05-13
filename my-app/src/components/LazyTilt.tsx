import React, { useState, Suspense } from 'react';

const Tilt = React.lazy(() => import('./Tilt').then(({ Tilt }) => ({ default: Tilt })));

const useToggle = (init: boolean = false): [boolean, () => void] => {
  const [on, setOn] = useState<boolean>(init);
  const toggle = () => setOn(!on);
  return [on, toggle];
};

export const LazyTilt: React.FC = () => {
  const [showTilt, toggleTilt] = useToggle();

  return (
    <div>
      <label>show tilt: </label>
      <input type='checkbox' name='tilt' id='checkTilt' checked={showTilt} onChange={toggleTilt} />
      <div style={showTilt ? { width: 200, height: 200 } : {}} className='totally-centered'>
        {showTilt ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Tilt>
              <div className='totally-centered'>vanillaTilt</div>
            </Tilt>
          </Suspense>
        ) : null}
      </div>
    </div>
  );
};
