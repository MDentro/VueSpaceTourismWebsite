<template>
  <div class="page">
    <div class="page-content">
      <div class="desktop-left-wrapper">
        <Item :pageNumber="pageNumber" :pageTitle="pageTitle"></Item>

        <diV class="crew-content-wrapper">
          <ImageItem :name="name" class="mobile"></ImageItem>

          <CrewMenu :crew="crew" :setCrew="setCrew" class="mobile"></CrewMenu>
          <DescriptionItem
            :title="title"
            :name="name"
            :description="description"
            :page="page"
          ></DescriptionItem>

          <CrewMenu :crew="crew" :setCrew="setCrew" class="tablet"></CrewMenu>
        </diV>
      </div>
      <div class="desktop-right-wrapper">
        <ImageItem :name="name" class="tablet"></ImageItem>
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
import CrewMenu from "../components/CrewMenu.vue";

export default {
  components: {
    Item,
    ImageItem,
    CrewMenu,
    DescriptionItem,
  },

  setup() {
    const pageNumber = ref("02");
    const pageTitle = ref("MEET YOUR CREW");
    const crew = ref(jsonData.crew);
    const name = ref(jsonData.crew[0].name);
    const title = ref(jsonData.crew[0].role);
    const description = ref(jsonData.crew[0].bio);
    const page = ref("crew");

    function setCrew(crewMember, e) {
      activateMenuItem(e);
      const [chosenCrew] = crew.value.filter((item) => {
        if (item.name === crewMember) {
          return item;
        }
      });
      name.value = chosenCrew.name;
      title.value = chosenCrew.role;
      description.value = chosenCrew.bio;
    }

    function activateMenuItem(e) {
      const listItems = document.getElementsByClassName("crew");

      for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
      }

      e.target.classList.add("active");
    }
    return {
      pageNumber,
      pageTitle,
      crew,
      title,
      name,
      description,
      page,
      setCrew,
    };
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  width: 100vw;
  background-image: url("../assets//crew//background-crew-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.page-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
}

.mobile {
  display: flex;
}

.tablet {
  display: none;
}

.crew-content-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.desktop-right-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

@media only screen and (min-width: 500px) {
  .page {
    background-image: url("../assets//crew//background-crew-tablet.jpg");
    justify-content: space-between;
  }

  .tablet {
    display: flex;
  }

  .mobile {
    display: none;
  }
}

@media only screen and (min-width: 1100px) {
  .page {
    background-image: url("../assets//crew//background-crew-desktop.jpg");
  }

  .page-content {
    width: 100vw;
    height: 100vh;
    flex-direction: row;
  }

  .desktop-left-wrapper {
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
  }

  .crew-content-wrapper {
    width: 85%;
    justify-content: flex-start;
    align-items: unset;
  }

  .desktop-right-wrapper {
    width: 50%;
  }
}
</style>
