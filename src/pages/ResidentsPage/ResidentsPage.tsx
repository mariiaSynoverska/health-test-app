import { Layout } from '../../components/Layout';

import { useData } from '../../hooks/useData';

import { DataTableCollapse } from '../../components/DataTableCollapse';

export function ResidentsPage() {
  const { isLoading, isError, residents } = useData();

  return (
    <Layout title="Residents">
      {isLoading && "Loading..."}
      {isError && "Something went wrong"}
      {residents.length ? <DataTableCollapse rows={residents} executedHeaders={["attendance"]} /> : ""}
    </Layout>
  );
}
