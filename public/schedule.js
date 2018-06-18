var schedule = Vue.component('schedule', {
  data: function () {
    return {
      weeks: [
         {
           monday: {topic:"Course overview, sets, strings, languages, and expressiveness (2.1, 2.2, 2.3, and 13.2)", homework: "<insert homework here>"},
           wednesday: {topic:"Sets, functions, and finite state machines with outputs", homework:"<insert homework here>"},
           friday: {topic:"some stuff", homework:""},
         },
         {
           monday: {topic:"Finite state machines, multiple outputs, no output, and regular expressions (13.2 and 13.3)", homework:"<insert homework here>"},
           wednesday: {topic:"Regular expressions and the Lexical Analyzer (13.1 and 13.4)", homework:"<insert homework here>"},
           friday: {topic:"", homework:""},
         },
         {
           monday: {topic:"Grammars, derivations, and parse trees (13.1)", homework:"<insert homework here>"},
           wednesday: {topic:"Top-down parsing (recursive descent, removing left-recursion, LL(1))", homework:"<insert homework here>"},
           friday: {topic:"", homework:""},
         },
         {
           monday: {topic:"Top-down parsing and the Datalog Parser", homework:"<insert homework here>"},
           wednesday: {topic:"Propositional logic, logical equivalences, tautologies, and contradictions (1.1, 1.2, and 1.3)", homework:"<insert homework here>"},
           friday: {topic:"", homework:""},
         },
         {
           monday: {topic:"Predicates, quantifiers, and predicate logic equivalences (1.4)", homework:"<insert homework here>"},
           wednesday: {topic:"Validity, equivalences, locgical implications, and derivations (1.6)", homework:"<insert homework here>"},
           friday: {topic:"", homework:""},
         },
         {
           monday: {topic:"Inference and resolution with predicate calculus and derivations (1.6 and 1.7)", homework:"<insert homework here>"},
           wednesday: {topic:"Solving Datalog queries with resolution and proof by contradiction", homework:"<insert homework here>"},
           friday: {topic:"", homework:""},
         },
         {
           monday:{topic:"Resolution and inference", homework:"<insert homework here>"},
           wednesday:{topic:"Relational Algebra (9.1, 9.2, and 9.3)", homework:"<insert homework here>"},
           friday: {topic:"", homework:""},
         },
         {
           monday: {topic:"Closures, equivalence relations, and relational algebra (9.4, 9.5, 9.6)", homework:"<insert homework here>"},
           wednesday: {topic:"Relational algebra, relational databases, and Datalog Interpreter (9.5 and 9.6)", homework:"<insert homework here>"},
           friday: {topic:"", homework:""},
         },
         {
           monday: {topic:"Equivalence relations and partial orders", homework:"<insert homework here>"},
           wednesday: {topic:"Graphs, adjacency lists, matrices, Warshall's algorithm, Floyd's algorithms (10.1 and 10.3)", homework:"<insert homework here>"},
           friday: {topic:"", homework:""},
         },
         {
           monday: {topic:"Depth-first search, breadth first search, strongly connected components (10.4)", homework:"<insert homework here>"},
           wednesday: {topic:"Strongly connected components, and Optimizing Rule Evaluation", homework:"<insert homework here>"},
           friday: {topic:"", homework:""},
         },
         {
           monday: {topic:"Dijkstra's Algorithm (10.6)", homework:"<insert homework here>"},
           wednesday: {topic:"Trees and tree traversal (11.1, 11.2, and 11.3)", homework:"<insert homework here>"},
           friday: {topic:"", homework:""},
         },
         {
           monday: {topic:"Spanning trees and minimal spanning trees (11. 4 and 11.5)", homework:"<insert homework here>"},
           wednesday: {topic:"Minimal spanning trees (11.5)", homework:"<insert homework here>"},
           friday: {topic:"", homework:""},
         },
         {
           monday: {topic:"Thanksgiving Break", homework:""},
           wednesday: {topic:"Thanksgiving Break", homework:""},
           friday: {topic:"Thanksgiving Break", homework:""},
         },
         {
           monday: {topic:"Induction (5.1, 5.2, 5.3)", homework:"<insert homework here>"},
           wednesday: {topic:"Induction (5.4 and 5.5)", homework:"<insert homework here>"},
           friday: {topic:"" , homework:""},
         },
         {
           monday: {topic:"Induction", homework:"<insert homework here>"},
           wednesday: {topic:"Course Wrap-up and Review", homework:"<insert homework here>"},
           friday: {topic:"" , homework:""},
         },
      ],
    }
  },
  template: `
<div class="page">
  <div class="hwGrid">
  	<div> Week </div><div> Day </div><div> Topic and Reading </div><div> Due </div>
  </div>
  <div v-for="(week, i) in weeks" class="hwGrid">
    <div class="dayEl"> Week {{i+1}} </div>
    <div class="dayGrid"> <div class="dayEl"> Monday </div><div class="dayEl"> Wednesday </div><div class="dayEl"> friday </div></div>
    <div class="dayGrid"> <div class="dayEl">{{week.monday.topic}} </div><div class="dayEl"> {{week.wednesday.topic}} </div><div class="dayEl"> {{week.friday.topic}} </div></div>
    <div class="dayGrid"> <div class="dayEl">{{week.monday.homework}} </div><div class="dayEl"> {{week.wednesday.homework}} </div><div class="dayEl"> {{week.friday.homework}} </div></div>
  </div>
</div>
`
});
