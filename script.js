var head = Vue.component('appHeader', {
  data: function() {
    return {
      menuItems: [
        { text: "Home"},
        { text: "Syllabus"},
        { text: "Schedule"},
        { text: "HomeWork"},
        { text: "Projects"},
        { text: "Exams"},
        { text: "Reading"},
        { text: "TAs"},
        { text: "Wiki"},
      ],
    }
  },
  methods: {
    linkTo: function(pageTitle) {
      app.curPage = pageTitle;
      console.log(pageTitle);
    }
  },
  template: `<nav>
      <ul id="menu">
        <li v-for="item in menuItems" v-on:click="linkTo(item.text)">{{item.text}}</li>
      </ul>
    </nav>,`
});
var app = new Vue({
  el: '#app',
  data: {
    curPage:"Home",
  },
});
