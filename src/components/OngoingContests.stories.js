import { OngoingContests } from ".";

export default {
  title: "Components/OngoingContests",
  component: OngoingContests,
  argTypes: {
    property1: {
      options: ["frame-49", "frame-48", "frame-50", "frame-46", "frame-47"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-49",
    className: {},
  },
};
