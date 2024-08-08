import { defineRule } from "vee-validate";
import { required } from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
    // @see https://vee-validate.logaretm.com/v4/guide/global-validators#vee-validaterules
    defineRule("required", required);
});
