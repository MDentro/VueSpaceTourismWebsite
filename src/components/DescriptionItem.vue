<template>
  <div :class="['description-container', page]">
    <p class="title">{{ title.toUpperCase() }}</p>
    <p class="name">{{ name.toUpperCase() }}</p>
    <p class="description">{{ description }}</p>
  </div>
</template>
<script>
export default {
  props: ["title", "name", "description", "page"],
  setup() {},
};
</script>

<style scoped>
.description-container {
  width: 85%;
  text-align: center;
  height: 230px;
  max-width: 500px;
}
p {
  color: var(--white);
}

.crew > .title {
  color: var(--gray);
}

.technology > .title {
  color: var(--blue);
}

.title {
  font-size: 16px;
  margin-bottom: 0px;
}

.name {
  font-size: 24px;
  margin-top: 10px;
}

.description {
  font-size: 15px;
  color: var(--blue);
}

@media only screen and (min-width: 500px) {
  .crew > .title {
    font-size: 24px;
    margin-bottom: 0px;
  }
  .crew > .name {
    font-size: 35px;
    margin-top: 10px;
  }
}

@media only screen and (min-width: 1100px) {
  .description-container {
    width: 80%;
    min-height: 250px;
    height: unset;
    text-align: left;
  }

  .description-container .crew {
    width: 85%;
    max-width: unset;
  }

  .name {
    font-size: 56px;
    margin-bottom: 0px;
  }
  .description {
    font-size: 18px;
  }
}
</style>
