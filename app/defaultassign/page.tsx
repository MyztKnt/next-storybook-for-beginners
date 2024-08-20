import { ComponentProps } from 'react';

import { api } from 'lib/api';

import DefaultAssignComponent from './defaultassign';

export default async function Page() {
  const defaultassign = await getDefaultAssignComponent();
  return <DefaultAssignComponent defaultassign={defaultassign} />;
}

async function getDefaultAssignComponent() {
  return await api<ComponentProps<typeof DefaultAssignComponent>['defaultassign']>('setting/defaultassign');
}
