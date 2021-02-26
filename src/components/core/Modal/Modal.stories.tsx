import { Props, Modal } from "./Modal";
import { Story, Meta } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Modal",
  component: Modal,
} as Meta;

export const Sample: Story<Props> = (args) => <Modal {...args} />;

Sample.args = {
  value: "check",
  text: "パ！！！出た！！！！",
};
