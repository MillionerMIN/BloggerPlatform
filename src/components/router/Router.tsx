import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppBar } from '../appBar/AppBar';
import { Blogs } from '../pages/blogs/Blogs';
import { Posts } from '../pages/Posts/Posts';

export const Router = () => {
  return (
    <BrowserRouter>
      <div className='w-1/5 bg-gray-200 py-4'>
        <AppBar />
      </div>
      <div className='w-4/5 px-2 py-4'>
        <Suspense fallback={<div>...Loading</div>}>
          <Routes>
            <Route path='/' element={<Blogs />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/posts' element={<Posts />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
