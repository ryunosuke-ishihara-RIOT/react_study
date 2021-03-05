import { Props, SubmitButton } from "./SubmitButton";
import { Story, Meta } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "SubmitButton",
  component: SubmitButton,
} as Meta;

export const Sample: Story<Props> = (args) => <SubmitButton {...args} />;

Sample.args = {};
