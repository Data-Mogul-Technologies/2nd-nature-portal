<template>

  <div class="menu-container">

    <!-- root level itens -->
    <ul class="menu">

      <li class="menu__top">
        <router-link to="/" class="menu__logo">
          <img src="/2NP logo.png" width="202.3" height="137" alt="icon">
        </router-link>
        <!-- <a
        href="#"
        @click.prevent="openProjectLink"
        class="menu__title"
        >
          Project Name...
        </a> -->
      </li>

      <li>
        <a href="#" @click.prevent="updateMenu('home')" :class="highlightSection('home')" >
            <i class="fa fa-home menu__icon" aria-hidden="true"></i>
            Dashboard
        </a>
      </li>

      <li>
        <a
        href="#"
        @click.prevent="updateMenu('profiles')"
        :class="highlightSection('profiles')"
        >
          <i class="fas fa-list-alt context-menu__title-icon" aria-hidden="true"></i>
          Profiles
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a
        href="#"
        @click.prevent="updateMenu('customers')"
        :class="highlightSection('customers')"
        >
          <i class="fa fa-users menu__icon" aria-hidden="true"></i>
          Customers
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a
        href="#"
        @click.prevent="updateMenu('account')"
        :class="highlightSection('account')"
        >
          <i class="fa fa-user menu__icon" aria-hidden="true"></i>
          Consultants
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

       <li>
        <a
        href="#"
        @click.prevent="updateMenu('Events')"
        :class="highlightSection('Events')"
        >
          <i class= "fas fa-calendar-alt context-menutitle-icon" aria-hidden="true"></i>
            Events
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a
        href="#"
        @click.prevent="updateMenu('payment')"
        :class="highlightSection('payment')"
        >
          <i class="fas fa-dollar-sign" aria-hidden="true"></i>
          Payment
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>



       <li>
        <a
        href="#"
        @click.prevent="updateMenu('Insights')"
        :class="highlightSection('Insights')"
        >
          <i class= "fas fa-chalkboard" aria-hidden="true"></i>
          Insights
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>
       <li>
        <a
        href="#"
        @click.prevent="updateMenu('Feedback')"
        :class="highlightSection('Feedback')"
        >
          <i class= "far fa-comments" aria-hidden="true"></i>
          Feedback
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
        href="#"
        @click.prevent="updateMenu('manage')"
        :class="highlightSection('manage')"
        >
          <i class="fas fa-user-cog" aria-hidden="true"></i>
          Manage Status/Types
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

    </ul>

    <!-- context menu: childs of root level itens -->
    <transition name="slide-fade">

      <div class="context-menu-container" v-show="showContextMenu">

        <ul class="context-menu">

          <li v-for="(item, index) in menuItems" :key="index">

            <h5 v-if="item.type === 'title'" class="context-menu__title">

              <i :class="item.icon" aria-hidden="true"></i>

              {{item.txt}}

              <a
              v-if="index === 0"
              @click.prevent="closeContextMenu"
              class="context-menu__btn-close"
              href="#"
              >
                <i class="fa fa-window-close" aria-hidden="true"></i>
              </a>

            </h5>

            <a
            v-else
            href="#"
            @click.prevent="openSection(item)"
            :class="subMenuClass(item.txt)"
            >
              {{item.txt}}
            </a>

          </li>

        </ul>
      </div>

    </transition>

  </div>

</template>

<script>
import menuData from '../sidebar/support/menu-data.js';
import kebabCase from 'lodash/kebabCase';

export default {
  name: 'Menu',

  data(){
    return {
      contextSection: '',

      menuItems: [],

      menuData: menuData,

      activeSubMenu: ''
    }
  },

  methods: {

    // openProjectLink() {
    //   alert('You could open the project frontend in another tab here, so the logged admin could see changes made to the project ;)');
    // },

    updateMenu(context) {
      this.contextSection = context;
      this.menuItems = this.menuData[context];

      if (context === 'home') {
        this.$router.push('/');
        window.bus.$emit('menu/closeMobileMenu');
      }
    },

    highlightSection(section) {
      return {
        'menu__link': true,
        'menu__link--active': section === this.contextSection,
      };
    },

    subMenuClass(subMenuName) {
      return {
        'context-menu__link': true,
        'context-menu__link--active': this.activeSubMenu === subMenuName,
      };
    },

    closeContextMenu() {
      this.contextSection = '';
      this.menuItems = [];
    },

    openSection(item) {
      this.activeSubMenu = item.txt;

      this.$router.push(this.getUrl(item));
      window.bus.$emit('menu/closeMobileMenu');
    },

    getUrl(item) {
      let sectionSlug = kebabCase(item.txt);

      return `${item.link}/${sectionSlug}`;
    }
    
  },

  computed: {
    showContextMenu() {
      return this.menuItems.length;
    },
  }

}
</script>
