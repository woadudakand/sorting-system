<template>
  <Shadow class="isShadow" @click="shadowExit">
    <slot />
  </Shadow>
</template>

<script>
import Styled from 'vue3-styled-components';

const Shadow = Styled('div', [])`
  background-color: #00000090;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px;
  
`;

export default {
  name: 'BackShadow',
  components: { Shadow },
  emits: ['onExit'],
  setup(_, { emit }) {
    const shadowExit = e => {
      emit('onExit', e);
    };
    return { shadowExit };
  },
};
</script>
