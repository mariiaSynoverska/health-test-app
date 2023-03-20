import { DataTableCollapse } from '../../components/DataTableCollapse';
import { Layout } from '../../components/Layout';

import { useData } from '../../hooks/useData';

export function ProgramsPage() {
  const { isLoading, isError, programs } = useData();

  return (
    <Layout title="Programs">
      {isLoading && "Loading..."}
      {isError && "Something went wrong!"}
      {programs.length ? <DataTableCollapse rows={programs} executedHeaders={["attendance"]} /> : ""}
    </Layout>
  );
}
