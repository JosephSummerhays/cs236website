var home = Vue.component('home', {
  data: function () {
    return {
      //?????
    }
  },
  methods: {
    linkTo: function(pageTitle) {
      app.curPage = pageTitle;
      console.log(pageTitle);
    }
  },
  template: `
  <div class="page">
    <p>
    On behalf of the faculty, welcome to CS 236 Discrete Structures.
      Most everything you need to get started with the course is found
      in the <i>course details</i> menu on the left of the page.
      The recommended starting point is the
      <a v-on:click="linkTo('Syllabus')">Syllabus</a>
      followed by the <a v-on:click="linkTo('Schedule')">Schedule</a>.
      If you find something missing on the navigation bar, then please
      contact the appropriate <a href="/cs-236/instructors" class="wikilink1" title="cs-236:instructors">instructor</a>
      to add the item (one of the few areas of the wiki that is locked down).
      Suggestions to improve this page are welcomed.
    </p>
  </div>
  `
});
