import { useMemo } from 'react';
import { useRouteError } from 'react-router-dom';

import { Layout } from '../../components/Layout';

export function ErrorPage() {
  const error: any = useRouteError();

  const message = useMemo(() => {
    if (error.status === 404) {
      return <p>There's nothing here.</p>;
    } else if (error.status === 500) {
      return <p>There was a problem fetching the data for this page.</p>;
    } else {
      return <p>An unexpected error occurred.</p>;
    }
  }, [error]);

  return <Layout title='Error'>{message}</Layout>;
}