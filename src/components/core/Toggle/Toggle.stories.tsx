import { Props, Toggle } from "./Toggle";
import { Story, Meta } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Toggle",
  component: Toggle,
} as Meta;

export const Sample: Story<Props> = (args) => <Toggle {...args} />;

Sample.args = {};
