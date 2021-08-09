import React from "react";
import Nav from "./Nav";

export default {
  title: "Nav",
  compoenent: Nav,
  argTypes: {
    variant: { control: "text" },
    children: { control: "text" },
    onClick: { actions: "click" },
  },
};

const Template = (args) => <Nav {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  children: "Primary",
};

export const Secondary = () => <Nav variant="secondary">Secondary</Nav>;
export const Success = () => <Nav variant="success">Success</Nav>;
export const Danger = () => <Nav variant="danger">Danger</Nav>;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
