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
    </nav>`
});
var app = new Vue({
  el: '#app',
  data: {
    curPage:"Home",
    studentName: "",
    hasname: false,
  },
  created: function() {
    console.log("Hello?");
    if (this.$cookies.isKey('studentName')) {
      this.studentName = this.$cookies.get('studentName');
      this.hasname = true;
    }
  },
  methods: {
    nameSubmitted: function() {
      this.hasname = true;
      this.studentName = this.$cookies.get("studentName");
    }
  },
});
/*
var app = new Vue({
  el: '#app',
  data: {
    cookieNum: 0,
  },
  created: function() {
    console.log("Hello?");
    if (this.$cookies.isKey('cookieNum')) {
      this.cookieNum = this.$cookies.get('cookieNum');
      console.log("in the IF");
      console.log(this.$cookies.get('cookieNum'));
      console.log(this.cookieNum);
    }
    else {
      this.$cookies.set('cookieNum', '5', 10);
      console.log("in the ELSE");
      console.log(this.$cookies.get('cookieNum'));
      console.log(this.cookieNum);
    }
  },
  methods: {
    touch: function() {
      console.log("Hello?");
      if (this.$cookies.isKey('cookieNum')) {
        this.cookieNum = this.$cookies.get('cookieNum');
        console.log("in the IF");
        console.log(this.$cookies.get('cookieNum'));
        console.log(this.cookieNum);
      }
      else {
        this.$cookies.set('cookieNum', '5', 10);
        console.log("in the ELSE");
        console.log(this.$cookies.get('cookieNum'));
        console.log(this.cookieNum);
      }
    },
  }
});
*/
