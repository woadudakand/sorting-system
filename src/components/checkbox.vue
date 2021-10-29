<template>
  <Checkbox class="container">
    <input @click="handleClass" type="checkbox" />
    <span class="checkmark"></span>
  </Checkbox>
</template>

<script>
import { defineComponent } from 'vue';
import { Checkbox } from './style';
export default defineComponent({
  components: { Checkbox },
  emits: ['addClass'],
  setup(_, { emit }) {
    const handleClass = e => {
      emit('addClass', e);
    };
    return { handleClass };
  },
});
</script>
