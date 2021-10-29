<template>
  <Button :class="className" @click="handleClick" type="button" :styleType="type"><slot /></Button>
</template>

<script>
import { defineComponent } from 'vue';
import { Button } from './style';
export default defineComponent({
  components: { Button },
  props: ['type', 'className'],
  emits: ['onClick'],
  setup(_, { emit }) {
    const handleClick = e => {
      emit('onClick', e);
    };
    return { handleClick };
  },
});
</script>
