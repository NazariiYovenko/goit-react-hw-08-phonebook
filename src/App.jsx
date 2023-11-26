import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from 'components/Loader';
import Navigation from 'components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/authReducer';
import RestictedRoute from 'components/RestictedRoute';
import PrivateRoute from 'components/PrivateRoute';
import { selectAuthIsLoading } from 'redux/auth.selectors';
import { Container } from '@chakra-ui/react';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/register',
    element: (
      <RestictedRoute>
        <RegisterPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestictedRoute>
        <LoginPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
  { path: '/*', element: <HomePage /> },
];

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsLoading);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Container maxW="670px">
      <Navigation />

      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      )}
    </Container>
  );
};
