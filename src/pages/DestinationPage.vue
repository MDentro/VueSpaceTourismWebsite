<template>
  <div class="page">
    <div class="destination-main">
      <Item :pageNumber="pageNumber" :pageTitle="pageTitle"></Item>
      <div class="content-wrapper">
        <div class="image-container">
          <img :src="imageDestination" />
        </div>
        <div class="container">
          <div class="destinations-menu">
            <ul>
              <li
                v-for="(destination, index) in destinations"
                :key="destination.name"
                @click="(e) => setDestination(destination.name, e)"
                :class="[{ active: index === 0 }, 'planet']"
              >
                {{ destination.name }}
              </li>
            </ul>
          </div>

          <div class="details-container">
            <p class="title">{{ title.toUpperCase() }}</p>
            <section class="description-wrapper">
              <p class="description">{{ description }}</p>
            </section>
            <section class="numbers-wrapper">
              <div>
                <p class="sub-heading">AVG. DISTANCE</p>
                <p class="details">{{ distance.toUpperCase() }}</p>
              </div>
              <div>
                <p class="sub-heading">EST TRAVEL TIME</p>
                <p class="details">{{ time.toUpperCase() }}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import jsonData from "../data/data.json";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import Item from "../components/Item.vue";

export default {
  components: {
    Item,
  },
  setup() {
    const pageNumber = ref("01");
    const pageTitle = ref("PICK YOUR DESTINATION");
    const destinations = ref(jsonData.destinations);
    const title = ref(jsonData.destinations[0].name);
    const description = ref(jsonData.destinations[0].description);
    const distance = ref(jsonData.destinations[0].distance);
    const time = ref(jsonData.destinations[0].travel);
    const imageDestination = ref(moon);

    function setDestination(destination, e) {
      activateMenuItem(e);
      const [chosenDestination] = destinations.value.filter((item) => {
        if (item.name === destination) {
          return item;
        }
      });

      title.value = chosenDestination.name;
      description.value = chosenDestination.description;
      distance.value = chosenDestination.distance;
      time.value = chosenDestination.travel;
      if (destination.toLowerCase() === "moon") {
        imageDestination.value = moon;
      } else if (destination.toLowerCase() === "mars") {
        imageDestination.value = mars;
      } else if (destination.toLowerCase() === "europa") {
        imageDestination.value = europa;
      } else {
        imageDestination.value = titan;
      }
    }

    function activateMenuItem(e) {
      const listItems = document.getElementsByClassName("planet");

      for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
      }

      e.target.classList.add("active");
    }

    return {
      pageNumber,
      pageTitle,
      destinations,
      setDestination,
      title,
      description,
      time,
      distance,
      imageDestination,
    };
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  width: 100vw;
  background-image: url("../assets//destination//background-destination-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.destination-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
}

.destination-main > p {
  font-size: 18px;
}
.destination-main > p > span {
  color: #383b4b;
}

.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.image-container > img {
  width: 80%;
  height: auto;
}

.destinations-menu {
  display: flex;
  flex-direction: row;
}

ul {
  list-style: none;
  display: flex;
  padding-inline-start: 0px;
  width: 100%;
  justify-content: space-evenly;
}

li {
  padding: 5px;
  margin: 2px;
  color: var(--blue);
  cursor: pointer;
}

.active {
  color: var(--white);
  border-bottom: 3px solid var(--white);
}

.details-container {
  width: 100%;
  text-align: center;
  padding-bottom: 30px;
}

.title {
  font-size: 80px;
  margin: 0;
}

.description-wrapper {
  border-bottom: 1px solid #383b4b;
  min-height: 106px;
}

.description {
  font-size: 18px;
  color: var(--blue);
}

.sub-heading {
  font-size: 14px;
  color: var(--blue);
  margin-top: 30px;
}

.details {
  font-size: 28px;
  margin: 0;
}

p {
  color: var(--white);
}

@media only screen and (min-width: 500px) {
  .page {
    background-image: url("../assets//destination//background-destination-tablet.jpg");
  }

  .destination-main {
    text-align: left;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .image-container > img {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 50%;
  }

  .destinations-menu {
    justify-content: center;
    min-width: 280px;
  }

  .details-container {
    width: 80%;
    text-align: center;
  }

  .description-wrapper {
    margin-bottom: 30px;
  }
  .description {
    font-size: 16px;
    margin-bottom: 50px;
  }

  .numbers-wrapper {
    display: flex;
    width: 100%;
  }

  .numbers-wrapper > div {
    width: 50%;
  }
}

@media only screen and (min-width: 1100px) {
  .page {
    background-image: url("../assets//destination//background-destination-desktop.jpg");
  }

  .container {
    align-items: flex-start;
    width: 100%;
  }

  .destination-main {
    margin-top: 40px;
  }

  .destination-main > div {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  .content-wrapper {
    min-height: 433px;
  }

  ul {
    justify-content: flex-start;
  }

  .details-container {
    text-align: left;
  }
}
</style>
