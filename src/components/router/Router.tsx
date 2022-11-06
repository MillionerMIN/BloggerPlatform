import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppBar } from '../appBar/AppBar';

export const Router = () => {
  return (
    <BrowserRouter>
      <div className='w-1/5'>
        <AppBar />
      </div>
      <div className='w-4/5'>
        <Suspense fallback={<div>...Loading</div>}>
          <Routes>
            <Route path='/' element={<div>akljsdflaj</div>} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
