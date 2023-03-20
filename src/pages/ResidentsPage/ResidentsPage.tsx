import { Layout } from '../../components/Layout';

import { useData } from '../../hooks/useData';

import { DataTableCollapse } from '../../components/DataTableCollapse';

export function ResidentsPage() {
  const { residents } = useData();

  return (
    <Layout title="Residents">
      {residents.length ? <DataTableCollapse rows={residents} executedHeaders={["attendance"]} /> : <div>No recipients found</div>}
    </Layout>
  );
}
