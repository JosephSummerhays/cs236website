var qst = []

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
        name: this.name,
        answers: [],
      };
      qst.push(newQuestion);
      console.log(qst);
      this.questionHeader="";
      this.question ="";
      this.name="";
    }
  },
  template:
`
<div class="page">
  <form v-on:submit.prevent="createQuestion">
    <input v-model="questionHeader" placeholder="enter header"></input>
    <br/>
    <textarea v-model="question" placeholder="enter your question"></textarea>
    <br/>
    <input v-model="name" placeholder="enter your name"></p>
    <br/>
    <button>Post Question</button>
  </form>
</div>
`
});

Vue.component('question', {
  data: function() {
    return {
      newAnswer:"",
      newName:"",
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
        name: this.newName
      };
      qst[this.index].answers.push(answer)
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
    <h3 v-on:click="showFlip">{{q.head}}</h3>
    <div v-show="showAll">
      <div class = "question">
        <p>{{q.question}}</p>
        <p> question posted by -- {{q.name}}</p>
      </div>
      <div class="reply" v-for="answer in q.answers">
        <p>{{answer.answer}}</p>
        <p>answer posted by -- {{answer.name}}</p>
      </div>
      <form v-on:submit.prevent="reply">
        <textarea v-model="newAnswer" placeholder="enter your answer"></textarea>
        <br/>
        <input v-model="newName" placeholder="enter your name"></p>
        <br/>
        <button>Post answer</button>
      </form>
    </div>
  </div>
  `
});

Vue.component('wiki', {
  data: function() {
    return {
      questions: qst,
    }
  },
  template:
`
<div class="page">
  <h2>Welcome to the cs-236 wiki!</h2>
  <p>When asking a question make sure to
  put a a brief summary of the question in the "header" section.
  this header will be used to sort questions by topics. you can add more detail
  and context to the question in the following text box.
  </p>
  <p>
    Make sure your question is clear; try to make it easy for the TAs
    to understand. You can include small examples of code relevant to your
    question (one or two lines), but larger snippets of code will be removed.
  </p>
  <question-form></question-form>
  <div v-for="(question, i) in questions">
    <question v-bind:q="question" v-bind:index="i" v-bind:show="false"></question>
  </div>
</div>
`
});
