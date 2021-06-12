<template>
  <div v-if="type === text">
    <input type="text" name="text" class="input" />
  </div>
  <div v-else-if="type === date">
    <input type="datetime-local" name="date" class="input" />
  </div>
  <div v-else>
    <input type="number" name="number" class="input" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: String,
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 12px 20px;
}
</style>
