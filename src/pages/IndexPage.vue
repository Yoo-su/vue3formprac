<template>
  <q-page class="flex flex-center">
    <h3>{{ title }}</h3>
    <q-form>
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
    </q-form>

    <Form>
      <Field name="email" type="email" />
    </Form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Form, Field } from "vee-validate";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const title = ref("testing...");

    return {
      title
    };
  }
});
</script>
