Vue.component('questionForm', {
  data: function () {
    return {
      questionHeader:"",
      question: "",
      name:""
    }
  },
  methods: {
    createQuestion: function() {
      newQuestion = {
        head: this.questionHeader,
        question: this.question,
        name: this.$cookies.get("name"),
        answers: [],
      };
      axios.post("/question", newQuestion);
      this.questionHeader="";
      this.question ="";
    },
  },
  template:
  `
  <div class="page">
    <form v-on:submit.prevent="createQuestion(); $emit('update')">
      <input v-model="questionHeader" placeholder="enter header"></input>
      <br/>
      <textarea v-model="question" placeholder="enter your question"></textarea>
      <button>Post Question</button>
    </form>
  </div>
  `
});

Vue.component('searchbar', {
	data: function() {
		return {
		
		}
	},
	props: {},
	methods: {},
	template: `
<div>
		
      <form v-on:submit.prevent="reply(); $emit('update')">

        <input v-model="newName" placeholder="enter your name"></p>
        <button>search</button>
      </form>
</div>
`
})

Vue.component('question', {
  data: function() {
    return {
      newAnswer:"",
      showAll: this.show,
    }
  },
  props: {
    q:Object,
    index:Number,
    show:Boolean
  },// ["q","index", "showAll"],
  methods: {
    reply: function (){
      answer = {
        answer: this.newAnswer,
        name: this.$cookies.get('name'),
        id: this.index,
      };
      axios.post('/reply', answer);
      this.newAnswer = "";
      this.newName = "";
    },
    showFlip: function () {
      this.showAll = !this.showAll;
    }
  },
  template:
  `
  <div class="page">
    <h3 v-on:click="showFlip">{{q.summary}}</h3>
    <div v-show="showAll">
      <div class = "question">
        <p>{{q.question}}</p>
        <p> question posted by -- {{q.name}}</p>
      </div>
      <div class="reply" v-for="answer in q.answers">
        <p>{{answer.answer}}</p>
        <p>answer posted by -- {{answer.name}}</p>
      </div>
      <form v-on:submit.prevent="reply(); $emit('update')">
        <textarea v-model="newAnswer" placeholder="enter your answer"></textarea>
	<button>submit</button>
      </form>
    </div>
  </div>
  `
});

Vue.component('wiki', {
  data: function() {
    return {
      name:'',
      questions: [],
      hasName: false,
    }
  },
  created: function () {
	  if (this.$cookies.isKey("name")) {
		  this.hasName = true;
		  this.name = this.$cookies.get("name")
	  }
  },
  methods: {
	print: function(){
		for (q in this.questions) {
			console.log(q);
		}
	},
	setName: function() {
		this.$cookies.set("name",this.name,'4m');
		console.log("Help me! I'm stuck inside your computer!");
		this.hasName = true;
	},
	getQuestions: function() {
		console.log("HELLO!!!!!!!");
		axios.get("/question").then(response => {
			console.log(response.data[0]);
			this.questions = response.data;
		});
	},
  },
  template:`
  <div class="page">
    <h2 v-on:click="print">Welcome to the cs-236 wiki!</h2>
    <p>When asking a question make sure to
      put a a brief summary of the question in the "header" section.
      this header will be used to sort questions by topics. you can then add more
      detail and context to the question in the following text box.
    </p>
    <p>
      Make sure your question is clear; try to make it easy for the TAs
      to understand. You can include small examples of code relevant to your
      question (one or two lines), but larger snippets of code will be removed.
    </p>
	<div v-if="hasName">
		<question-form v-on:update="getQuestions"></question-form>
	    <div v-for="(question, i) in questions">
	      <question
	        v-on:update="getQuestions"
	        v-bind:q="question"
	        v-bind:index="i"
	        v-bind:show="false">
	      </question>
	    </div>
	</div>
	<div v-else>
		enter your name to view and ask questions
		<form v-on:submit.prevent="setName">
			<input v-model="name"></input>
			<button>submit name</button>
		</form>
	</div>
</div>
  `
});
