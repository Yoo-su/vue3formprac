import { ref } from 'vue'

export default function useRadioValue() {
  const selected = ref(null);

  const setRadioValue = (newVal) => {
    selected.value = newVal;
  };

  return { selected, setRadioValue };
}