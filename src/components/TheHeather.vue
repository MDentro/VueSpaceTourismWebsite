<template>
  <header>
    <section class="menu">
      <img src="../assets/shared/logo.svg" />

      <img class="hamburger-icon" :src="hamburgerIcon" @click="openMenu" />
    </section>
    <div class="line"></div>
    <section :class="[mainMenuClass, isActive ? activeClass : '']">
      <div class="close-icon-wrapper">
        <img class="close-icon" :src="closeIcon" @click="closeMenu" />
      </div>

      <nav>
        <ul>
          <li
            class="menu-item"
            id="home"
            @click="(e) => clickNav(e, '/')"
            @mouseover="(e) => mouseOver(e)"
            @mouseleave="(e) => mouseleave(e)"
          >
            <p><span>00&nbsp;</span> HOME</p>
          </li>
          <li
            class="menu-item"
            id="destination"
            @click="(e) => clickNav(e, '/destination')"
            @mouseover="(e) => mouseOver(e)"
            @mouseleave="(e) => mouseleave(e)"
          >
            <p><span>01&nbsp;</span> DESTINATION</p>
          </li>
          <li
            class="menu-item"
            id="crew"
            @click="(e) => clickNav(e, '/crew')"
            @mouseover="(e) => mouseOver(e)"
            @mouseleave="(e) => mouseleave(e)"
          >
            <p><span>02&nbsp;</span> CREW</p>
          </li>
          <li
            class="menu-item"
            id="technology"
            @click="(e) => clickNav(e, '/technology')"
            @mouseover="(e) => mouseOver(e)"
            @mouseleave="(e) => mouseleave(e)"
          >
            <p><span>03&nbsp;</span> TECHNOLOGY</p>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import { useRouter } from "vue-router";

export default {
  setup() {
    const isActive = ref(false);
    const activeClass = ref("nav-menu-active");
    const mainMenuClass = ref("nav-menu");
    const router = useRouter();
    const currentPath = ref();

    onMounted(async () => {
      await router.isReady();
      currentPath.value = router.currentRoute.value.path.split("/")[1];

      if (currentPath.value === "") {
        document.getElementById("home").classList.add("underline");
      } else {
        document.getElementById(currentPath.value).classList.add("underline");
      }
    });

    function clickNav(e, goTo) {
      const screenWidth = screen.width;
      if (screenWidth < 810) {
        isActive.value = !isActive.value;
      } else {
        const menuItems = document.getElementsByClassName("menu-item");
        for (let i = 0; i < menuItems.length; i++) {
          menuItems[i].classList.remove("underline");
        }
      }
      e.target.closest(".menu-item").classList.add("underline");
      currentPath.value = goTo;
      router.replace({ path: goTo });

      saveCurrentPath(goTo);
    }

    function saveCurrentPath(goTo) {
      let path;
      if (goTo === "/") {
        path = "home";
      } else {
        path = goTo.split("/")[1];
      }
      currentPath.value = path;
    }

    function mouseOver(e) {
      if (currentPath.value !== e.target.id) {
        e.target.closest(".menu-item").classList.add("underline");
      }
    }

    function mouseleave(e) {
      if (currentPath.value !== e.target.id) {
        e.target.closest(".menu-item").classList.remove("underline");
      }
    }

    function openMenu() {
      isActive.value = !isActive.value;
    }

    function closeMenu() {
      isActive.value = !isActive.value;
    }
    return {
      hamburgerIcon,
      closeIcon,
      openMenu,
      closeMenu,
      isActive,
      activeClass,
      mainMenuClass,
      clickNav,
      mouseOver,
      mouseleave,
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  position: absolute;
}

.menu {
  width: 100vw;
  box-sizing: border-box;
  padding: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 1;
}

.hamburger-icon {
  height: 20px;
}

.close-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  height: 100px;
  box-sizing: border-box;
}

.close-icon {
  height: 30px;
}

nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.nav-menu {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 70%;
  right: -100%;
  transition: 850ms;
  z-index: 1;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
}

.nav-menu-active {
  right: 0;
  transition: 350ms;
  z-index: 3;
}

li {
  list-style: none;
  height: 50px;
  color: var(--white);
  font-family: Barlow Condensed;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.7px;
  cursor: pointer;
  margin-right: 20px;
}

span {
  color: var(--white);
  font-family: Barlow Condensed;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.7px;
}

@media only screen and (min-width: 800px) {
  nav {
    align-items: center;
  }
  .menu {
    z-index: 0;
  }

  .nav-menu {
    height: 100px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    position: absolute;
    width: 60%;
    right: 0px;
    z-index: 0;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.774227142333984px);
  }

  .close-icon-wrapper,
  .hamburger-icon {
    display: none;
  }

  nav {
    height: 100%;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0px;
  }

  li {
    display: flex;
    align-items: center;
    height: 100%;
    border-bottom: 3px solid transparent;
    box-sizing: border-box;
  }

  .underline {
    border-bottom: 3px solid var(--white);
    box-sizing: border-box;
  }

  .close-icon {
    display: none;
  }
}

@media only screen and (min-width: 1000px) {
  .nav-menu {
    width: 55%;
  }

  .close-icon-wrapper {
    display: block;
  }
}

@media only screen and (min-width: 1132px) {
  nav {
    align-items: normal;
  }
}

@media only screen and (min-width: 800px) and (max-width: 1200px) {
  span {
    display: none;
  }
}

@media only screen and (min-width: 1200px) {
  header {
    margin-top: 50px;
  }
  .menu {
    justify-content: flex-start;
  }

  .line {
    left: 100px;
    background-color: var(--gray);
    opacity: 0.5;
    width: 40%;
    top: 50px;
    position: absolute;
    margin-left: 20px;
    height: 2px;
    z-index: 2;
  }
}
</style>
