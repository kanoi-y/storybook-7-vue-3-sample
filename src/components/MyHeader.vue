<script setup lang="ts">
import { useI18n } from "vue-i18n";
import MyButton from "./MyButton.vue";

const { t } = useI18n()

type Props = {
  isLoggedIn: boolean;
};

const props = defineProps<Props>();

const emits = defineEmits(["login", "signUp", "logout"]);
</script>

<template>
  <header>
    <h1>{{ t("header.title") }}</h1>
    <div class="buttons">
      <template v-if="props.isLoggedIn">
        <MyButton
          size="small"
          :label="t('header.logout')"
          @click="emits('logout')"
        />
      </template>
      <template v-else>
        <MyButton
          size="small"
          :label="t('header.login')"
          @click="emits('login')"
        />
        <MyButton
          size="small"
          :label="t('header.signUp')"
          @click="emits('signUp')"
        />
      </template>
    </div>
  </header>
</template>

<style scoped>
header {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 45px;
  background-color: #fff;
}
h1 {
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}
button + button {
  margin-left: 10px;
}
@media screen and (max-width: 720px) {
  .buttons {
    display: none;
  }
}
</style>
