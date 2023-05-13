import MyButton from "../components/MyButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof MyButton>;

const meta: Meta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: "<MyButton v-bind='args' />",
  }),
};

export const Default: Story = {
  args: {
    label: "ボタン",
  },
};

export const Login: Story = {
  args: {
    label: "ログイン",
  },
};

export const SignUp: Story = {
  args: {
    label: "会員登録",
  },
};

export default meta;
