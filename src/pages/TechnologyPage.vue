<template>
  <div class="page">
    <div class="page-heading">
      <Item :pageNumber="pageNumber" :pageTitle="pageTitle"></Item>
    </div>
    <div class="page-content">
      <ImageItem :name="name"></ImageItem>
      <div class="content">
        <div class="technology-menu">
          <ul>
            <li
              v-for="(technology, index) in technologies"
              :key="technology.name"
              @click="(e) => setTechnology(technology.name, e)"
              :class="[{ active: index === 0 }, 'technology']"
            >
              {{ index + 1 }}
            </li>
          </ul>
        </div>
        <div class="description-wrapper">
          <DescriptionItem
            :title="title"
            :name="name"
            :description="description"
            :page="page"
          ></DescriptionItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import jsonData from "../data/data.json";
import Item from "../components/Item.vue";
import DescriptionItem from "../components/DescriptionItem.vue";
import ImageItem from "../components/ImageItem.vue";

export default {
  components: {
    Item,
    ImageItem,
    DescriptionItem,
  },

  setup() {
    const pageNumber = ref("03");
    const pageTitle = ref("SPACE LAUNCH 101");
    const technologies = ref(jsonData.technology);
    const name = ref(jsonData.technology[0].name);
    const title = ref("THE TERMINOLOGY...");
    const description = ref(jsonData.technology[0].description);
    const page = ref("technology");

    function setTechnology(technologyType, e) {
      activateMenuItem(e);
      const [chosenTechnology] = technologies.value.filter((item) => {
        if (item.name === technologyType) {
          return item;
        }
      });
      name.value = chosenTechnology.name;

      description.value = chosenTechnology.description;
    }

    function activateMenuItem(e) {
      const listItems = document.getElementsByClassName("technology");

      for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
      }

      e.target.classList.add("active");
    }
    return {
      pageNumber,
      pageTitle,
      technologies,
      title,
      name,
      description,
      page,
      setTechnology,
    };
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  width: 100vw;
  background-image: url("../assets//technology//background-technology-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.page-heading {
  width: 100vw;
}

.technology-menu {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}

ul {
  padding-inline-start: 0;
  display: flex;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  list-style: none;
  color: var(--white);
  background-color: transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid var(--gray);
  cursor: pointer;
}

.active {
  background-color: var(--white);
  color: var(--black);
}

.description-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (min-width: 500px) {
  .page {
    background-image: url("../assets//technology//background-technology-tablet.jpg");
  }
}

@media only screen and (min-width: 1100px) {
  .page {
    background-image: url("../assets//technology//background-technology-desktop.jpg");
  }

  .page-content {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    align-items: center;
  }

  .page-heading {
    padding-left: 30px;
  }

  .content {
    display: flex;
    flex-direction: row;
    width: calc(92% - 600px);
  }

  .technology-menu {
    width: 80px;
    justify-content: space-evenly;
  }

  .technology-menu > ul {
    flex-direction: column;
    justify-content: space-around;
  }

  li {
    width: 50px;
    height: 50px;
  }
}
</style>
