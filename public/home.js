var home = Vue.component('home', {
  data: function () {
    return {
      name:"",
    }
  },
  methods: {
    linkTo: function(pageTitle) {
      app.curPage = pageTitle;
      console.log(pageTitle);
    },
    signin: function() {
	console.log("hello world!");
	axios.get('/signin').then(response => {
		console.log(response);
	});
    },
  },
  props: {
    hasname: Boolean,
  },
  template: `
  <div class="page">
    <h1>On behalf of the faculty, welcome to CS 236 Discrete Structures.</h1>
    <p>
      Most everything you need to get started with the course is found
      in the <i>course details</i> menu on the left of the page.
      The recommended starting point is the
      <a v-on:click="linkTo('Syllabus')">Syllabus</a>
      followed by the <a v-on:click="linkTo('Schedule')">Schedule</a>.
      Suggestions to improve this page are welcomed.
    </p>
  </div>
  `
});
