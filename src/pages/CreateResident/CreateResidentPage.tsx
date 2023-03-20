import { useCallback, useState } from 'react';

import { Layout } from '../../components/Layout';
import { AddResidentToProgramForm } from './AddResidentToProgramForm';
import { CreateResidentForm } from './CreateResidentForm';

export function CreateResidentPage() {
  const [residentId, setResidentId] = useState<number>();

  const handleChangeResidentId = useCallback((residentId: number) => {
    setResidentId(residentId)
  }, [])

  return (
    <Layout title="Create Resident">
      <CreateResidentForm handleChangeResidentId={handleChangeResidentId} />
      {<AddResidentToProgramForm residentId={residentId} />}
    </Layout>
  );
}
