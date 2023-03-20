import { DataTableCollapse } from '../../components/DataTableCollapse';
import { Layout } from '../../components/Layout';

import { useData } from '../../hooks/useData';

export function ProgramsPage() {
  const { programs } = useData();

  return (
    <Layout title="Programs">
      {programs.length ? <DataTableCollapse rows={programs} executedHeaders={["attendance"]} /> : <div>No programs found</div>}
    </Layout>
  );
}
