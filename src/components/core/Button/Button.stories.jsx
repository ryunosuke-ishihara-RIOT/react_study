import { Button } from "./Button.jsx";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    value: { control: "text" },
    isDisabled: { control: "boolean" },
  },
};

export const SampleButton = (args) => <Button {...args} />;

SampleButton.args = {
  value: "button",
};
