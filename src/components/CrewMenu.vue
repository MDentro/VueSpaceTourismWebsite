<template>
  <div class="crew-menu">
    <ul>
      <li
        v-for="(crew, index) in crew"
        :key="crew.name"
        @click="(e) => setCrew(crew.name, e)"
        :class="[{ active: index === 0 }, 'crew']"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["crew", "setCrew"],
};
</script>

<style scoped>
.crew-menu {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
}

ul {
  padding-inline-start: 0;
  display: flex;
}

li {
  margin: 5px;
  list-style: none;
  background-color: var(--gray);
  border-radius: 50%;
  width: 15px;
  height: 15px;
}

.active {
  background-color: white;
}

@media only screen and (min-width: 1100px) {
  .crew-menu {
    justify-content: flex-start;
  }
}
</style>
