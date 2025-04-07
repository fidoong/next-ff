import {FButton} from "@ff/ui/dist";

export default {
  title: 'Example/Button',
  component: FButton,
  parameters: {
    bgColor: 'red',
    label: 'Button',
  },
  tags: ['autodocs'],
  argTypes: {
    bgColor: { control: 'color' },
    label: { control: 'text' },
  },
};

export const Primary = {
  args: {
    bgColor: 'green',
    label: 'Button',
  },
};
