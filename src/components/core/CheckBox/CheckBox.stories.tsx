import { Props, CheckBox } from "./CheckBox";
import { Story, Meta } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "CheckBox",
  component: CheckBox,
} as Meta;

export const Sample: Story<Props> = (args) => <CheckBox {...args} />;

Sample.args = {
  value: "check",
};
