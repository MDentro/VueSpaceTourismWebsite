<template>
  <div class="page">
    <div class="container">
      <section class="text-container">
        <div class="text-wrapper">
          <p class="heading-top">SO, YOU WANT TO TRAVEL TO</p>

          <p class="heading">SPACE</p>

          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </section>
      <section class="circle-container">
        <div class="circle-wrapper">
          <div :class="'outer-circle ' + (active ? 'active' : '')"></div>
          <div
            class="inner-circle"
            @mouseover="mouseover"
            @mouseleave="mouseleave"
            @click="redirectToDestinationPage"
          >
            <p>EXPLORE</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const active = ref(false);
    const router = useRouter();
    function mouseover() {
      active.value = true;
    }

    function mouseleave() {
      active.value = false;
    }

    function redirectToDestinationPage() {
      router.replace({ path: "/destination" });
      document.getElementById("destination").classList.add("underline");
      document.getElementById("home").classList.remove("underline");
    }
    return { active, mouseover, mouseleave, redirectToDestinationPage };
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  width: 100vw;
  background-image: url("../assets//home//background-home-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container {
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
}

section {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
  justify-content: flex-end;
  text-align: center;
}

.text-container {
  height: 60%;
  margin-top: 150px;
}

.text-wrapper > p {
  color: var(--blue);
}

.text-wrapper .heading {
  font-size: 80px;
  color: var(--white);
  margin: 0;
}

.heading-top {
  font-size: 16px;
  color: var(--blue);
  letter-spacing: 0.2cm;
}

.circle-container {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: unset;
}

.circle-wrapper {
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}

.inner-circle {
  background-color: var(--white);
  color: var(--dark);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  position: absolute;
}

.inner-circle > p {
  font-size: 20px;
}

@media only screen and (min-width: 500px) {
  .page {
    background-image: url("../assets//home//background-home-tablet.jpg");
  }

  .inner-circle {
    width: 300px;
    height: 300px;
  }

  .circle-container {
    margin-top: 250px;
  }
}

@media only screen and (min-width: 900px) {
  .circle-container {
    margin-top: unset;
  }

  .inner-circle {
    width: 150px;
    height: 150px;
  }
  .text-container {
    height: 50%;
  }

  .text-wrapper .heading {
    font-size: 150px;
    color: var(--white);
    margin: 0;
  }

  .text-wrapper > p {
    font-size: 25px;
  }

  .circle-wrapper {
    height: 60%;
  }

  .inner-circle {
    width: 242px;
    height: 242px;
  }

  .inner-circle > p {
    font-size: 32px;
  }
}

@media only screen and (min-width: 1100px) {
  .page {
    background-image: url("../assets//home//background-home-desktop.jpg");
    justify-content: flex-end;
  }

  .container {
    flex-direction: row;
    width: 100%;
  }

  section {
    max-width: unset;
  }

  .text-container {
    margin-top: unset;
  }

  .text-container,
  .circle-container {
    height: 100%;
  }

  .text-wrapper {
    width: 450px;
    height: 450px;
    text-align: left;
  }

  .text-wrapper > p {
    font-size: 18px;
  }

  .heading-top {
    font-size: 28px;
  }

  .circle-wrapper {
    width: 450px;
    height: 450px;
    margin-bottom: 20px;
  }

  .outer-circle {
    background-color: var(--dark);
    opacity: 0.5;
    color: var(--dark);
    width: 450px;
    height: 450px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    visibility: hidden;
  }

  .outer-circle.active {
    visibility: visible;
  }

  .inner-circle {
    background-color: var(--white);
    color: var(--dark);
    width: 274px;
    height: 274px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 2;
    position: absolute;
  }

  .inner-circle > p {
    font-size: 32px;
  }
}
</style>
