import { Decorator, Parameters, setup } from "@storybook/vue3";
import i18n from "../src/i18n";
import pinia, { useCurrentUserStore } from "../src/pinia";


setup((app) => {
  // app が Vue インスタンスにあたるので Vue I18n インスタンスを注入する
  // 同一の Vue インスタンスに対して setup 関数は複数回実行されるため、既に注入済みかを確認する
  if (!app.__VUE_I18N__) {
    app.use(i18n);
    app.use(pinia);
  }
});

export const parameters: Parameters = {};
export const decorators: Decorator[] = [
  (story, context) => {
    i18n.global.locale.value = context.globals.locale;
    return {
      setup() {
        const currentUserStore = useCurrentUserStore();
        currentUserStore.$reset();
      },
      template: "<story />"
    };
  },
];

export const globalTypes = {
  locale: {
    description: "多言語設定",
    defaultValue: "ja",
    toolbar: {
      title: "Locale",
      icon: "globe",
      items: ["ja", "en"],
    },
  },
};
