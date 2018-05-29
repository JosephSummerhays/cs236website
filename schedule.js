var schedule = Vue.component('schedule', {
  data: function () {
    return {
      topics: [
        `Course overview, sets, strings, languages, and expressiveness (2.1, 2.2, 2.3, and 13.2)
	       Sets, functions, and finite state machines with outputs`,
         `Finite state machines, multiple outputs, no output, and regular expressions (13.2 and 13.3)
         Regular expressions and the Lexical Analyzer (13.1 and 13.4)`,
         `Grammars, derivations, and parse trees (13.1)
         Top-down parsing (recursive descent, removing left-recursion, LL(1))`,
         `Top-down parsing and the Datalog Parser
         Propositional logic, logical equivalences, tautologies, and contradictions (1.1, 1.2, and 1.3)`,
         `Predicates, quantifiers, and predicate logic equivalences (1.4)
         Validity, equivalences, locgical implications, and derivations (1.6)`,
         `Inference and resolution with predicate calculus and derivations (1.6 and 1.7)
         Solving Datalog queries with resolution and proof by contradiction`,
         `Resolution and inference
         Relational Algebra (9.1, 9.2, and 9.3)`,
         `Closures, equivalence relations, and relational algebra (9.4, 9.5, 9.6)
         Relational algebra, relational databases, and Datalog Interpreter (9.5 and 9.6)`,
         `Equivalence relations and partial orders
         Graphs, adjacency lists, matrices, Warshall's algorithm, Floyd's algorithms (10.1 and 10.3)`,
         `Depth-first search, breadth first search, strongly connected components (10.4)
         Strongly connected components, and Optimizing Rule Evaluation`,
         `Dijkstra's Algorithm (10.6)
	        Trees and tree traversal (11.1, 11.2, and 11.3) `,
          `Spanning trees and minimal spanning trees (11. 4 and 11.5)
          Minimal spanning trees (11.5)`,
          `Thanksgiving Break`,
          `Induction (5.1, 5.2, 5.3)
          Induction (5.4 and 5.5)`,
          `Induction
          Course Wrap-up and Review`,
          `Finals`,
      ],
      homeworks:[
        ``
      ],
    }
  },
  template: `
  <div>
<div class="page">

  <p>
  The official schedule for the semester is found on <a href="http://learningsuite.byu.edu" class="urlextern" title="http://learningsuite.byu.edu" rel="nofollow">BYU Learning Suite</a>. Here is the general template for the schedule for fall semester with the <b>Thanksgiving break</b>.
  </p>
  <div class="table sectionedit1">
  <table class="inline">
  	<thead>
  	<tr class="row0">
  		<th class="col0"> Week </th><th class="col1"> Topic and Reading </th><th class="col2"> Due </th>
  	</tr>
  	</thead>


    <!--
    <tr v-for="(topic, i) in topics">
      <td> Week {{i+1}} </td><td> {{topics[i]}} </td><td> still haven't added the homeworks yet </td>
    </tr>
    -->
  	<tr class="row1">
  		<td class="col0"> Week 1 </td><td class="col1"> Course overview, sets, strings, languages, and expressiveness (2.1, 2.2, 2.3, and 13.2) </td><td class="col2"> </td>
  	</tr>
  	<tr class="row2">
  		<td class="col0 leftalign">        </td><td class="col1"> Sets, functions, and finite state machines with outputs </td><td class="col2"><a href="/cs-236/homework-0" class="wikilink1" title="cs-236:homework-0">Homework 0</a> </td>
  	</tr>
  	<tr class="row3">
  		<td class="col0"> Week 2 </td><td class="col1"> Finite state machines, multiple outputs, no output, and regular expressions (13.2 and 13.3) </td><td class="col2"> <a href="/cs-236/homework-1" class="wikilink1" title="cs-236:homework-1">Homework 1</a></td>
  	</tr>
  	<tr class="row4">
  		<td class="col0 leftalign">        </td><td class="col1"> Regular expressions and the <a href="/cs-236/lexical-analyzer" class="wikilink1" title="cs-236:lexical-analyzer">Lexical Analyzer</a> See <a href="/cs-236/lectures" class="wikilink1" title="cs-236:lectures"> scanner-algorithm.pptx</a> (13.1 and 13.4) </td><td class="col2"> </td>
  	</tr>
  	<tr class="row5">
  		<td class="col0"> Week 3 </td><td class="col1"> Grammars, derivations, and parse trees (13.1) </td><td class="col2"> <a href="/cs-236/homework-2" class="wikilink1" title="cs-236:homework-2">Homework 2</a> </td>
  	</tr>
  	<tr class="row6">
  		<td class="col0 leftalign">        </td><td class="col1"> Top-down parsing (recursive descent, removing left-recursion, LL(1)) See <a href="/cs-236/lectures" class="wikilink1" title="cs-236:lectures"> top-down-parsing.pptx</a> </td><td class="col2"> </td>
  	</tr>
  	<tr class="row7">
  		<td class="col0"> Week 4 </td><td class="col1"> Top-down parsing and the <a href="/cs-236/datalog-parser" class="wikilink1" title="cs-236:datalog-parser">Datalog Parser</a> </td><td class="col2"> <a href="/cs-236/homework-3" class="wikilink1" title="cs-236:homework-3">Homework 3</a> </td>
  	</tr>
  	<tr class="row8">
  		<td class="col0 leftalign">        </td><td class="col1"> Propositional logic, logical equivalences, tautologies, and contradictions (1.1, 1.2, and 1.3) </td><td class="col2"> <a href="/cs-236/lexical-analyzer" class="wikilink1" title="cs-236:lexical-analyzer">Lexical Analyzer</a> </td>
  	</tr>
  	<tr class="row9">
  		<td class="col0"> Week 5 </td><td class="col1"> Predicates, quantifiers, and predicate logic equivalences (1.4) </td><td class="col2"> <a href="/cs-236/homework-4" class="wikilink1" title="cs-236:homework-4">Homework 4</a> </td>
  	</tr>
  	<tr class="row10">
  		<td class="col0 leftalign">        </td><td class="col1"> Validity, equivalences, locgical implications, and derivations (1.6) </td><td class="col2"><a href="/cs-236/datalog-parser" class="wikilink1" title="cs-236:datalog-parser"> Datalog Parser Part 1</a> </td>
  	</tr>
  	<tr class="row11">
  		<td class="col0"> Week 6 </td><td class="col1"> Inference and resolution with predicate calculus and derivations (1.6 and 1.7) </td><td class="col2"> <a href="/cs-236/homework-5" class="wikilink1" title="cs-236:homework-5">Homework 5</a> </td>
  	</tr>
  	<tr class="row12">
  		<td class="col0 leftalign">        </td><td class="col1"> Solving Datalog queries with resolution and proof by contradiction </td><td class="col2"><a href="/cs-236/datalog-parser" class="wikilink1" title="cs-236:datalog-parser"> Datalog Parser Part 2</a> </td>
  	</tr>
  	<tr class="row13">
  		<td class="col0"> Week 7 </td><td class="col1"> Resolution and inference </td><td class="col2"> </td>
  	</tr>
  	<tr class="row14">
  		<td class="col0 leftalign">        </td><td class="col1"> Relational Algebra (9.1, 9.2, and 9.3) See <a href="/cs-236/lectures" class="wikilink1" title="cs-236:lectures"> relational-algebra.pptx</a> </td><td class="col2"> <a href="/cs-236/exams" class="wikilink1" title="cs-236:exams"> Midterm 1</a> </td>
  	</tr>
  	<tr class="row15">
  		<td class="col0"> Week 8 </td><td class="col1"> Closures, equivalence relations, and relational algebra (9.4, 9.5, 9.6) </td><td class="col2"> <a href="/cs-236/homework-6" class="wikilink1" title="cs-236:homework-6">Homework 6</a> </td>
  	</tr>
  	<tr class="row16">
  		<td class="col0 leftalign">        </td><td class="col1"> Relational algebra, relational databases, and <a href="/cs-236/datalog-interpreter" class="wikilink1" title="cs-236:datalog-interpreter">Datalog Interpreter</a> (9.5 and 9.6) </td><td class="col2"><a href="/cs-236/relational-database" class="wikilink1" title="cs-236:relational-database"> Relational Database Part 1</a> </td>
  	</tr>
  	<tr class="row17">
  		<td class="col0"> Week 9 </td><td class="col1"> Equivalence relations and partial orders </td><td class="col2"> <a href="/cs-236/homework-7" class="wikilink1" title="cs-236:homework-7">Homework 7</a> </td>
  	</tr>
  	<tr class="row18">
  		<td class="col0 leftalign">        </td><td class="col1"> Graphs, adjacency lists, matrices, Warshall&#039;s algorithm, Floyd&#039;s algorithms (10.1 and 10.3) </td><td class="col2"> <a href="/cs-236/relational-database" class="wikilink1" title="cs-236:relational-database"> Relational Database Part 2</a> </td>
  	</tr>
  	<tr class="row19">
  		<td class="col0"> Week 10 </td><td class="col1"> Depth-first search, breadth first search, strongly connected components (10.4) </td><td class="col2"> <a href="/cs-236/homework-8" class="wikilink1" title="cs-236:homework-8">Homework 8</a> </td>
  	</tr>
  	<tr class="row20">
  		<td class="col0 leftalign">         </td><td class="col1"> Strongly connected components, and <a href="/cs-236/optimizing-rule-evaluation" class="wikilink1" title="cs-236:optimizing-rule-evaluation">Optimizing Rule Evaluation</a> </td><td class="col2"> </td>
  	</tr>
  	<tr class="row21">
  		<td class="col0"> Week 11 </td><td class="col1 leftalign"> Dijkstra&#039;s Algorithm (10.6)  </td><td class="col2 leftalign">  </td>
  	</tr>
  	<tr class="row22">
  		<td class="col0 leftalign">         </td><td class="col1"> Trees and tree traversal (11.1, 11.2, and 11.3) </td><td class="col2"> <a href="/cs-236/exams" class="wikilink1" title="cs-236:exams"> Midterm 2</a> and <a href="/cs-236/datalog-interpreter" class="wikilink1" title="cs-236:datalog-interpreter"> Datalog Interpreter Part 1</a> </td>
  	</tr>
  	<tr class="row23">
  		<td class="col0"> Week 12 </td><td class="col1"> Spanning trees and minimal spanning trees (11. 4 and 11.5) </td><td class="col2 leftalign"> <a href="/cs-236/homework-9" class="wikilink1" title="cs-236:homework-9">Homework 9</a>  </td>
  	</tr>
  	<tr class="row24">
  		<td class="col0 leftalign">         </td><td class="col1"> Minimal spanning trees (11.5) </td><td class="col2"> <a href="/cs-236/datalog-interpreter" class="wikilink1" title="cs-236:datalog-interpreter"> Datalog Interpreter Part 2</a> </td>
  	</tr>
  	<tr class="row25">
  		<td class="col0"> Week 13 </td><td class="col1"> <b>Thanksgiving Break</b> </td><td class="col2"> </td>
  	</tr>
  	<tr class="row26">
  		<td class="col0"> Week 14 </td><td class="col1"> Induction (5.1, 5.2, 5.3) </td><td class="col2"> <a href="/cs-236/homework-10" class="wikilink1" title="cs-236:homework-10">Homework 10</a> </td>
  	</tr>
  	<tr class="row27">
  		<td class="col0 leftalign">         </td><td class="col1 leftalign"> Induction (5.4 and 5.5)   </td><td class="col2"> <a href="/cs-236/optimizing-rule-evaluation" class="wikilink1" title="cs-236:optimizing-rule-evaluation"> Optimizing Rule Evaluation Part 1</a></td>
  	</tr>
  	<tr class="row28">
  		<td class="col0"> Week 15 </td><td class="col1"> Induction </td><td class="col2"> <a href="/cs-236/homework-11" class="wikilink1" title="cs-236:homework-11">Homework 11</a> </td>
  	</tr>
  	<tr class="row29">
  		<td class="col0 leftalign">         </td><td class="col1"> Course Wrap-up and Review </td><td class="col2"> <a href="/cs-236/optimizing-rule-evaluation" class="wikilink1" title="cs-236:optimizing-rule-evaluation"> Optimizing Rule Evaluation Part 2</a> </td>
  	</tr>
  	<tr class="row30">
  		<td class="col0"> Week 16 </td><td class="col1"> Finals </td><td class="col2"> <a href="/cs-236/exams" class="wikilink1" title="cs-236:exams"> Final</a> </td>
  	</tr>
  </table></div>

</div>
</div>`
});
