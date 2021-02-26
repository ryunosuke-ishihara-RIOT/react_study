import { Props, Button } from "./Button";
import { Story, Meta } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Button",
  component: Button,
} as Meta;

export const SampleButton: Story<Props> = (args) => <Button {...args} />;

SampleButton.args = {
  value: "button",
};
