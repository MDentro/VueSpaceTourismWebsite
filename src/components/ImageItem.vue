<template>
  <div :class="['image-container-' + imageType]">
    <img :src="image" :class="imageType" />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import hurley from "../assets/crew/image-douglas-hurley.png";
import shuttleworth from "../assets/crew/image-mark-shuttleworth.png";
import ansari from "../assets/crew/image-anousheh-ansari.png";
import glover from "../assets/crew/image-victor-glover.png";
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import launchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";

export default {
  props: ["name"],
  setup(props) {
    const image = ref();
    const imageType = ref();

    const screenWidth = ref();
    getWidth();
    function getWidth() {
      const { width } = useWindowSize();
      screenWidth.value = width.value;
    }

    window.addEventListener("resize", () => {
      getWidth();
    });

    setImage(imageType, image, props, screenWidth);

    watch([props, screenWidth], () => {
      setImage(imageType, image, props, screenWidth);
    });

    function setImage(imageType, image, props, width) {
      if (props.name.toLowerCase() === "douglas hurley") {
        imageType.value = "crew";
        image.value = hurley;
      }
      if (props.name.toLowerCase() === "mark shuttleworth") {
        imageType.value = "crew";
        image.value = shuttleworth;
      }
      if (props.name.toLowerCase() === "anousheh ansari") {
        imageType.value = "crew";
        image.value = ansari;
      }
      if (props.name.toLowerCase() === "victor glover") {
        imageType.value = "crew";
        image.value = glover;
      }
      if (props.name.toLowerCase() === "launch vehicle") {
        imageType.value = "technology";
        if (width.value < 1100) {
          image.value = launchVehicleLandscape;
        } else {
          image.value = launchVehiclePortrait;
        }
      }
      if (props.name.toLowerCase() === "spaceport") {
        imageType.value = "technology";
        if (width.value < 1100) {
          image.value = spaceportLandscape;
        } else {
          image.value = spaceportPortrait;
        }
      }
      if (props.name.toLowerCase() === "space capsule") {
        imageType.value = "technology";
        if (width.value < 1100) {
          image.value = spaceCapsuleLandscape;
        } else {
          image.value = spaceCapsulePortrait;
        }
      }
    }

    return { image, imageType };
  },
};
</script>

<style scoped>
.item-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 130px;
  width: 90%;
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
  width: 90%;
  height: 230px;
  border-bottom: 1px solid var(--gray);
}

.image-container-technology {
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 375px;
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
    padding-top: 0px;
  }
  .image-container-crew {
    height: 50vh;
    border-bottom: none;
  }

  .crew {
    height: 100%;
  }
}

@media only screen and (min-width: 1100px) {
  .image-container-crew {
    height: 70vh;
  }
  .image-container-technology {
    width: 600px;
    height: auto;
  }
}
</style>
