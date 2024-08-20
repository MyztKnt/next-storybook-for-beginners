import { Meta, StoryObj } from '@storybook/react';

import DefaultAssign from './defaultassign';
import { DefaultAssignData } from './types';

const defaultassign: DefaultAssignData = {
  data: {
    weekdayAssign: '工場',
    monday: true,
    tuesday: true,
    wednesday: false,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    holiday: false,
  },
};

const meta: Meta<typeof DefaultAssign> = {
  title: 'defaultassign/DefaultAssign',
  component: DefaultAssign,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[1000px]">
        <Story />
      </div>
    ),
  ],
  args: {
    defaultassign,
  },
};

export default meta;
export const Default: StoryObj<typeof meta> = {};
