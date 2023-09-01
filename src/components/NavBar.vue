<template>
  <nav
    id="main"
    class="navigation-menu navigation-container"
    :class="{ onScroll: !view.topOfPage }"
  >
    <div class="welcome">
    WELCOME
    </div>

    <input type="checkbox" id="toggleMenu" @click="toggleMenu" />
    <label for="toggleMenu"><i class="fa fa-bars" id="toggleIcon"></i></label>
    <section class="main-menu">
      <ul class="navigation-menu__labels">
        <li @click="resetToggle()">
          <router-link  v-bind:to="{ name: 'Home' }">
            HOME
          </router-link>
        </li>
        <li  @click="resetToggle()">
          <router-link
           
            v-bind:to="{ name: 'Portfolio' }"
          >
            PORTFOLIO
          </router-link>
        </li>
        <li  @click="resetToggle()">
          <router-link
           
            v-bind:to="{ name: 'About' }"
          >
            ABOUT
          </router-link>
        </li>
      </ul>
    </section>
  </nav>
</template>

<script>
// import loginModal from "../views/LoginView.vue";
// import registerModal from "../views/RegisterView.vue";
// import logoutModal from "../views/LogoutView.vue";
// import { mapGetters, mapMutations } from "vuex";

export default {
  name: "NavigationComponent",
  data() {
    return {
      brewer: false,
      manager: false,
      checkbox: false,
      view: {
        topOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
       handleScroll() {
      if (window.scrollY > 100) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
    resetToggle() {
      const menu = document.getElementById("main");
      menu.classList.remove("toggled-true");
      this.checkbox = true;
      this.toggleMenu();
    },
    toggleMenu() {
      this.checkbox = !this.checkbox;

      const toggleMenu = document.getElementById("toggleMenu");
      const menu = document.getElementById("main");

      toggleMenu.checked = this.checkbox;

      toggleMenu.addEventListener("change", function () {
        if (toggleMenu.checked) {
          menu.classList.add("toggled-true");
        } else {
          menu.classList.remove("toggled-true");
        }
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:white;
}

body {
  margin: 0;
  padding: 0;
  background-color: #fdfefe;
  font-family: "Cambria";
  font-size: 18px;
}

.navigation-container {
  top:0;
  left:0;
  max-width: 100%;
  margin: 0;
  padding: 50px;
  z-index: 1;
  width: 100%;
  position:fixed;
}

.navigation-menu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding-block: 15px;
}
.toggled-true {
  background-color: rgba(0, 0, 0, 0.548);
}
.onScroll {
  background: #353631;
}
.navigation-menu a {
  text-decoration: none;
  color: #fdfefe;
}
.navigation-menu button {
  text-decoration: none;
  color: #fdfefe;
  border: none;
  background-color: transparent;
}

.site-identity-logo {
  font-size: 25px;
  font-weight: bold;
}

.navigation-menu__labels {
  list-style: none;
  display: flex;
  gap: 25px;
  align-items: flex-end;
}
.welcome{
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.navigation-menu__labels > li > a:hover  {
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
/* .navigation-menu__labels > li > button:hover {
  color: grey;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
} */

#toggleMenu,
.navigation-menu label {
  display: none;
}

@media screen and (max-width: 768px) {
  .main-menu {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    opacity: 1;
  }
  .navigation-container{

  background-color: #353631;
  }
  .navigation-menu label {
    display: inline-flex;
    align-items: flex-start;
    cursor: pointer;
    color: #fdfefe;
  }

  .navigation-menu__labels {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    padding: 20px;
  }

  #toggleMenu:checked ~ .main-menu {
    max-height: 75%;
  }
}
</style>