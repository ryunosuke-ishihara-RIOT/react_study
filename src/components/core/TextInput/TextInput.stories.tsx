import { Props, TextInput } from "./TextInput";
import { Story, Meta } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "TextInput",
  component: TextInput,
} as Meta;

export const Sample: Story<Props> = (args) => <TextInput {...args} />;

Sample.args = {};
