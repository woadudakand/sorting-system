<template>
  <Modal>
    <header>
      <h4>How many people?</h4>
      <button class="isShadow" @click="handleClose" type="button"><feather-icons type="x" /></button>
    </header>
    <section>
      <p>Enter a number of how many people you want to add to the list.</p>
      <input v-model="inputValue" type="text" />
      <p v-if="error" class="error">Please input minimum 20 and maximum 100.</p>
    </section>
    <footer>
      <Button className="isShadow" @onClick="handleClose" type="badgeBg">Cancel</Button>
      <Button @onClick="handleSubmit" type="primary">Save</Button>
    </footer>
  </Modal>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { Modal } from './style';
export default defineComponent({
  components: { Modal },
  emits: ['close', 'submit'],
  setup(_, { emit }) {
    const error = ref(false);
    const inputValue = ref('');

    const handleClose = e => {
      emit('close', e);
    };

    const handleSubmit = () => {
      if (
        inputValue.value &&
        !isNaN(parseInt(inputValue.value)) &&
        parseInt(inputValue.value) >= 20 &&
        parseInt(inputValue.value) <= 100
      ) {
        emit('submit', inputValue.value);
        error.value = false;
      } else {
        error.value = true;
        inputValue.value = '';
      }

      setTimeout(() => {
        error.value = false;
      }, 100000);
    };
    return { handleClose, handleSubmit, error, inputValue };
  },
});
</script>
