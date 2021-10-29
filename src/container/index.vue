<template>
  <MainWrapper>
    <header>
      <h2>Sorting Training System</h2>
      <button @click="modalShow" type="button">Start Sorting</button>
    </header>
    <div class="wide-page">
      <table v-if="peoples.length">
        <caption>
          <span class="counter">
            0 hours 0 minutes 0 seconds
          </span>
          <span>
            {{ peoples.length }}
            People in the list
          </span>
        </caption>
        <thead>
          <tr>
            <th>Email</th>
            <th>Potatoes</th>
            <th>Tags</th>
            <th>Full Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <Container orientation="vertical" lock-axis="y" @drop="onDrop" tag="tbody">
          <Draggable style="padding: 20px" v-for="{ id, potatoes, tags } in peoples" :key="id" tag="tr">
            <td>
              <span style="margin-right: 40px">
                <checkbox @addClass="addClass" />
              </span>

              {{ `${random.first().toLowerCase()}${Math.floor(Math.random() * 9999) + 1000}@gmail.com` }}

              <span style="position: absolute; right: 5px; top: 35%;"><featherIcons type="chevron-right"/></span>
            </td>
            <td>{{ potatoes }}</td>
            <td>
              <span v-for="(tag, key) in tags" :key="key" :class="key <= 1 ? 'badge' : null"
                ><strong v-if="key <= 1">{{ tag }}</strong
                ><strong v-else>+1</strong></span
              >
            </td>
            <td>{{ `${random.first()} ${random.last()}` }}</td>
            <td>{{ random.place() }}</td>
          </Draggable>
        </Container>
      </table>

      <table class="empty" v-else>
        <caption>
          Let`s Play a game. Add the number of rows and then sort potatoes from maximum to minimum
        </caption>
      </table>
    </div>

    <back-shadow v-if="isModal" @onExit="modalClose">
      <Modal @close="handleClose" @submit="handelSubmit" />
    </back-shadow>
    <back-shadow v-if="isCompleted">
      <CompletedModal
        :timer="{
          sec,
          min,
          hour,
        }"
        @close="completedModalClose"
        @submit="restart"
      />
    </back-shadow>
  </MainWrapper>
</template>

<script>
import { defineComponent, ref, onMounted, watchEffect } from 'vue';
import { Container, Draggable } from 'vue3-smooth-dnd';
import { MainWrapper } from './style';
import Modal from '../components/modal.vue';
import CompletedModal from '../components/completedModal.vue';
import random from 'random-name';

export default defineComponent({
  components: { Container, Modal, Draggable, MainWrapper, CompletedModal },
  setup() {
    const getPeopleLength = ref(0);
    let isModal = ref(false);
    let isCompleted = ref(false);
    let peoples = ref([]);
    let comparisonPeoples = ref([]);
    let successStatus = ref(false);

    const rendererComponent = () => {
      peoples.value = [];
      comparisonPeoples.value = [];
      for (let i = 1; i <= getPeopleLength.value; i++) {
        const newPeople = {
          id: i,
          potatoes: i,
          tags:
            i % 7 === 0
              ? ['Customers', 'Vip']
              : i % 11 === 0
              ? ['Customers', 'oldtimer']
              : i % 15 === 0
              ? ['Customers', 'oldtimer', 'Vip']
              : ['Customers'],
        };
        peoples.value.push(newPeople);
        comparisonPeoples.value.push(newPeople);
      }

      comparisonPeoples.value = comparisonPeoples.value.sort(function(a, b) {
        return b.potatoes - a.potatoes;
      });

      peoples.value = peoples.value.sort(function() {
        return 0.5 - Math.random();
      });
    };

    onMounted(() => {
      rendererComponent();
    });

    const applyDrag = (arr, dragResult) => {
      const { removedIndex, addedIndex, payload } = dragResult;
      if (removedIndex === null && addedIndex === null) return arr;

      const result = [...arr];
      let itemToAdd = payload;

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }

      return result;
    };

    const onDrop = dropResult => {
      peoples.value = applyDrag(peoples.value, dropResult);
      return (successStatus.value = JSON.stringify(peoples.value) === JSON.stringify(comparisonPeoples.value));
    };

    const addClass = e => {
      if (e.target.checked) {
        e.target.closest('tr').classList.add('active');
      } else {
        e.target.closest('tr').classList.remove('active');
      }
    };

    const modalClose = e => {
      if (e.target.classList.contains('isShadow')) {
        isModal.value = false;
      }
    };

    const handleClose = () => {
      isModal.value = false;
    };

    const modalShow = () => {
      isModal.value = true;
    };

    let counterStart = ref(() => {});
    let sec = ref(0);
    let min = ref(0);
    let hour = ref(0);

    const handelSubmit = value => {
      getPeopleLength.value = value;
      isModal.value = false;
      rendererComponent();

      counterStart.value = setInterval(() => {
        const counter = document.querySelector('.counter');
        sec.value += 1;
        if (sec.value >= 60) {
          sec.value = 0;
          min.value += 1;
        }
        if (min.value >= 60) {
          min.value = 0;
          hour.value += 1;
        }
        if (counter) counter.innerHTML = `${hour.value} hours ${min.value} minutes ${sec.value} seconds`;
      }, 1000);
    };

    watchEffect(() => {
      if (successStatus.value) {
        clearInterval(counterStart.value);
        isCompleted.value = true;
      }
    });

    const completedModalClose = () => {
      isCompleted.value = false;
      getPeopleLength.value = 0;
      successStatus.value = false;
      rendererComponent();
    };

    const restart = () => {
      console.log('hello');
      isCompleted.value = false;
      successStatus.value = false;
      rendererComponent();
      sec.value = 0;
      min.value = 0;
      hour.value = 0;
      counterStart.value = setInterval(() => {
        const counter = document.querySelector('.counter');
        sec.value += 1;
        if (sec.value >= 60) {
          sec.value = 0;
          min.value += 1;
        }
        if (min.value >= 60) {
          min.value = 0;
          hour.value += 1;
        }
        if (counter) counter.innerHTML = `${hour.value} hours ${min.value} minutes ${sec.value} seconds`;
      }, 1000);
    };

    return {
      handelSubmit,
      peoples,
      onDrop,
      successStatus,
      addClass,
      isModal,
      modalClose,
      modalShow,
      handleClose,
      isCompleted,
      random,
      completedModalClose,
      restart,
      sec,
      min,
      hour,
    };
  },
});
</script>

<style lang="css" scope>
table {
  display: table;
  /* border-collapse: collapse does not work when rows are dragged (transformed) */
  border-collapse: separate;
}
tr {
  display: table-row !important;
}
tr[style*='transform'] {
  border-collapse: separate !important;
}
</style>
