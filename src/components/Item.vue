<template>
  <div class="item-main">
    <p>
      <span>{{ pageNumber }}</span
      >{{ " " + pageTitle }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["pageNumber", "pageTitle"],
};
</script>

<style scoped>
.item-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 130px;
  width: 100%;
}

.item-main > p {
  font-size: 18px;
}
.item-main > p > span {
  color: var(--gray);
  font-weight: 700;
}
.image-container-crew {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 230px;
  border-bottom: 1px solid var(--gray);
}

.image-container-technology {
  display: flex;
  justify-content: center;
  width: 100%;
}

.crew {
  height: 230px;
  width: auto;
}
.technology {
  width: 100vw;
}

p {
  color: var(--white);
}

@media only screen and (min-width: 500px) {
  .item-main {
    align-items: flex-end;
    width: 95%;
  }

  p {
    width: 95%;
  }
}

@media only screen and (min-width: 1100px) {
  .item-main {
    width: 92%;
  }
  .item-main > p {
    font-size: 28px;
    width: 92%;
  }
}
</style>
