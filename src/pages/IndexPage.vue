<template>
  <q-page class="column flex" padding>
    <div class="q-mx-auto">
      <q-form class="q-pb-xl">
        <q-input type="email" outlined label="Your email" v-bind="email" />
        <q-input type="password" outlined v-bind="password" />
        <q-input type="textarea" outlined v-bind="desc" />
        <q-checkbox v-bind="agree" />
        <q-btn @click="resetForm">reset</q-btn>

        <br />

        <div class="column">
          <div class="row items-center">
            <q-input type="number" disable /><label
              >{{ dateDifference?.years }}년</label
            >
            <q-input type="number" disable /><label
              >{{ dateDifference?.months }}개월</label
            >
          </div>

          <div class="row justify-between">
            <q-input type="date" v-bind="startDate" />
            <q-input type="date" v-bind="endDate" />
          </div>
        </div>

        <recmarea-box />
        <q-btn @click="testAlert">see error</q-btn>
      </q-form>
      <radio-table
        :cols="[5, 4, 3, 2, 1]"
        :update="setRadioValue"
        domain="credibility"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useForm } from "vee-validate";

import RadioTable from "src/components/RadioTable.vue";
import RecmAreaBox from "src/components/RecmAreaBox.vue";

import useRadioValue from "src/hooks/useRadioTable";
import useNotify from "src/hooks/useNotify";

import { testSchema } from "src/utils/schemas/testFormSchema";
import { dateDifferenceInYearsMonths } from "src/utils/functions";

export default defineComponent({
  name: "IndexPage",
  components: {
    "radio-table": RadioTable,
    "recmarea-box": RecmAreaBox
  },
  setup() {
    const { selected, setRadioValue } = useRadioValue();
    const { showNotify } = useNotify();

    const { defineComponentBinds, handleSubmit, resetForm, errors, validate } =
      useForm({
        validationSchema: testSchema,
        initialValues: {
          email: "",
          password: "",
          desc: "",
          agreeStatus: false,
          startDate: null,
          endDate: null
        }
      });

    const dateDifference = computed(() => {
      if (!startDate || !endDate) return { years: "", months: "" };
      const result = dateDifferenceInYearsMonths(startDate, endDate);
      return { years: result.years, months: result.months };
    });

    const quasarConfig = (state) => ({
      props: {
        error: !!state.errors[0],
        "error-message": state.errors[0]
      }
    });

    const email = defineComponentBinds("email", quasarConfig);
    const password = defineComponentBinds("password", quasarConfig);
    const desc = defineComponentBinds("desc", quasarConfig);
    const agree = defineComponentBinds("agreeStatus", quasarConfig);
    const startDate = defineComponentBinds("startDate", quasarConfig);
    const endDate = defineComponentBinds("endDate", quasarConfig);

    const level = defineComponentBinds("level", quasarConfig);

    const testAlert = async () => {
      const res = await validate();
      if (!res.valid) showNotify("negative", "form invalid!!!!");
      else showNotify("positive", "cleared ^_^");
    };

    return {
      selected,
      setRadioValue,
      email,
      password,
      desc,
      agree,
      startDate,
      endDate,
      level,
      dateDifference,
      errors,
      resetForm,
      testAlert
    };
  }
});
</script>
