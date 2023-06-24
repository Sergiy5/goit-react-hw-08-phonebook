import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from './AppBar/appBar';
import { Body } from './mainContainer.styled';

export const Layout = () => {
    return (
      <Body>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </Body>
    );
}
