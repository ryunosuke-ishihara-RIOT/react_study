import { Props, Input } from "./Input";
import { Story, Meta } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Input",
  component: Input,
} as Meta;

export const Sample: Story<Props> = (args) => <Input {...args} />;

Sample.args = {
  placeholder: "文字を入力してください",
};
