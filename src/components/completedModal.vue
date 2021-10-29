<template>
  <Modal>
    <section>
      <h4>Congratulation!</h4>
      <p>You are perfectly sorted the table.</p>
      <p>You have take {{ timer.hour }} Hours {{ timer.min }} Minutes {{ timer.sec }} seconds to completed!</p>
    </section>
    <footer>
      <Button className="isShadow" @onClick="handleClose" type="badgeBg">Close</Button>
      <Button @onClick="handleSubmit" type="primary">Restart</Button>
    </footer>
  </Modal>
</template>

<script>
import { defineComponent } from 'vue';
import { Modal } from './style';
export default defineComponent({
  components: { Modal },
  emits: ['close', 'submit'],
  props: ['timer'],
  setup(_, { emit }) {
    const handleClose = e => {
      emit('close', e);
    };

    const handleSubmit = e => {
      emit('submit', e);
    };
    return { handleClose, handleSubmit };
  },
});
</script>
