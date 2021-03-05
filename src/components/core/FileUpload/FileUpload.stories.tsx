import { FileUpload } from "./FileUpload";
import { Story, Meta } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "FileUpload",
  component: FileUpload,
} as Meta;

export const Sample: Story = (args) => <FileUpload {...args} />;

Sample.args = {
  value: "check",
};
