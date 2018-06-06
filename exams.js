var exams = Vue.component('exams', {
  data: function () {
    return {
      //?????
    }
  },
  template: `
<div class="page">
  <h2 class="sectionedit1" id="midterm-1-review-topics">Midterm 1 Review Topics</h2>
  <div class="level2">

    <p>
    The first midterm opens October 10, 2016, and closes October 12, 2016 in the testing center. October 12th is a late day ($5.00); just be sure you check the testing center scheduler and policies to be sure your plan for when you are taking the test will work. The exam questions are short answers similar to the homework and quizzes, and you will indicate your answers (and show your work) directly on the exam. <b>The exam is double-sided so check both sides of the page.</b> The exam is closed book and closed notes, and is expected to take anywhere from 2 to 3 hours depending on your confidence level. The exam has ten problems covering the following topics:
    </p>
    <ul>
      <li class="level1"><div class="li">Basic operations on sets including union, intersection, complement, set-difference (set-minus), etc. Use these operations to define new sets with specific characteristics. <a href="/cs-236/homework-1" class="wikilink1" title="cs-236:homework-1">Homework 1</a>. Sections 2.1-2.3 in the book.</div>
      </li>
      <li class="level0"><div class="li">Define set-difference in terms of union, intersection, and complement. Concatenate sets of strings. Compute the power set for a given set.  Determine if a function is one-to-one, onto, or bijective. <a href="/cs-236/homework-1" class="wikilink1" title="cs-236:homework-1">Homework 1</a>. Sections 2.1-2.3 in the book.</div>
      </li>
      <li class="level0"><div class="li">Write regular expressions to define sets with specific characteristics. Working knowledge of concatenation, union, and Kleene star where working knowledge means you can define sets using those operations. <a href="/cs-236/homework-2" class="wikilink1" title="cs-236:homework-2">Homework 2</a>. Section 13.4.</div>
      </li>
      <li class="level0"><div class="li">Design deterministic finite state automaton (DFA) to recognize sets defined by regular expressions. <a href="/cs-236/homework-2" class="wikilink1" title="cs-236:homework-2">Homework 2</a>. Section 13.3. Good practice is to first write a regular expression for a language and then construct the DFA to recognize that language. You do not need to show edges to a reject state; rather, assume that any edge not shown means the automaton can no longer read any more input so that state it stops in determines if it accepts or rejects. </div>
      </li>
      <li class="level0"><div class="li">Write a grammar from an English specification. <a href="/cs-236/homework-3" class="wikilink1" title="cs-236:homework-3">Homework 3</a>. Section 13.1.</div>
      </li>
      <li class="level0"><div class="li">Show a right-most derivation and parse tree for a grammar given an input string. <a href="/cs-236/homework-3" class="wikilink1" title="cs-236:homework-3">Homework 3</a> is good practice. See the <a href="/cs-236/lectures" class="wikilink1" title="cs-236:lectures"> lecture notes</a> related to parsing too.</div>
      </li>
      <li class="level0"><div class="li">Left factor a grammar. <a href="/cs-236/homework-3" class="wikilink1" title="cs-236:homework-3">Homework 3</a> and <a href="/cs-236/homework-4" class="wikilink1" title="cs-236:homework-4">Homework 4</a> are good practice. See the <a href="/cs-236/lectures" class="wikilink1" title="cs-236:lectures"> lecture notes</a> related to parsing too.</div>
      </li>
      <li class="level0"><div class="li">Remove left-recursion from a given grammar. <a href="/cs-236/homework-4" class="wikilink1" title="cs-236:homework-4">Homework 4</a> is good practice.</div>
      </li>
      <li class="level0"><div class="li">Construct an LL(1) parse table for a given grammar.  <a href="/cs-236/homework-4" class="wikilink1" title="cs-236:homework-4">Homework 4</a> is good practice. See the <a href="/cs-236/lectures" class="wikilink1" title="cs-236:lectures"> lecture notes</a> related to parsing too. Review your your lecture notes from class as we have worked 3 examples now.</div>
      </li>
      <li class="level0"><div class="li">Given an LL(1) parse table, use the table to parse a given input string. Show each step of the parse with the evolution of the stack and input string either as an evolving tree as done in class or a table. <a href="/cs-236/homework-3" class="wikilink1" title="cs-236:homework-3">Homework 3</a> and <a href="/cs-236/homework-4" class="wikilink1" title="cs-236:homework-4">Homework 4</a> are good practice. See the <a href="/cs-236/lectures" class="wikilink1" title="cs-236:lectures"> lecture notes</a> related to parsing too.</div>
      </li>
    </ul>

    <p>
    The textbook has many exercises that can be used for practice; it has answers to all the odd problems to check work. Instructors and TAs will be happy to give feedback on problems you work if you would like.  Best of luck.
    </p>

  </div>

  <h2 class="sectionedit2" id="midterm-2-review-topics">Midterm 2 Review Topics</h2>
  <div class="level2">

    <p>
    Runs in testing center Monday, November 7, through Wednesday, November 9. November 9 is a late day that costs $5. <b>Be sure you check the testing center schedule and policies so your plan for the test is logically consistent.</b> The exam questions are short answers as before and similar to the homework. You will indicate your answers (and show your work) directly on the exam. <b>The exam is closed book and closed notes.</b> It is expected to take at least 2 hours and up to 3 hours depending on your confidence level. The exam has 10 problems covering the following topics:
    </p>
    <ul>
      <li class="level1"><div class="li">Show an expression is a tautology or that two expressions are logically equivalent using truth table and <b>without using truth tables.</b> (<a href="/cs-236/homework-5" class="wikilink1" title="cs-236:homework-5">Homework 5</a>)</div>
      </li>
      <li class="level0"><div class="li">Apply DeMorgan&#039;s law to negate expressions with quantifiers. Write equivalent expressions for quantifiers using disjunction, conjunction, and negation. Show two expressions with quantifiers are equivalent or not equivalent via counter example. (<a href="/cs-236/homework-5" class="wikilink1" title="cs-236:homework-5">Homework 5</a>)</div>
      </li>
      <li class="level0"><div class="li">Express English statements using multiple nested quantifiers. Apply De Morgan&#039;s law to negate expressions with multiple nested quantifiers. (<a href="/cs-236/homework-6" class="wikilink1" title="cs-236:homework-6">Homework 6</a>)</div>
      </li>
      <li class="level0"><div class="li">Express English statements in propositional logic. Prove a conclusions from a set of propositions and predicates without using resolution. Prove a conclusion from a set of propositions and predicates using only resolution. <b>Proofs should look like those done in class being in tabular form with clearly labeled inference rules.</b>(<a href="/cs-236/homework-6" class="wikilink1" title="cs-236:homework-6">Homework 6</a>)</div>
      </li>
      <li class="level0"><div class="li">Express English statements in predicate calculus. Use inference rules to prove a conclusion valid or invalid from the predicate calculus statements statements. <b>Proofs should look like those done in class being in tabular form with clearly labeled inference rules.</b>(<a href="/cs-236/homework-6" class="wikilink1" title="cs-236:homework-6">Homework 6</a>)</div>
      </li>
      <li class="level0"><div class="li">Answer a Datalog query by constructing a proof by contradiction using only resolution and universal instantiation/existential generalization. <b>Proofs should look like those done in class being in tabular form with clearly labeled inference rules.</b> (<a href="/cs-236/homework-6" class="wikilink1" title="cs-236:homework-6">Homework 6</a>)</div>
      </li>
      <li class="level0"><div class="li">Identify relations that are reflexive, irreflexive, symmetric, antisymmetric, or transitive. Add pairs to a relation to make it reflexive, symmetric, or transitive. (<a href="/cs-236/homework-7" class="wikilink1" title="cs-236:homework-7">Homework 7</a>)</div>
      </li>
      <li class="level0"><div class="li">Evaluate relational algebra expressions on relations (<a href="/cs-236/homework-7" class="wikilink1" title="cs-236:homework-7">Homework 7</a> and <a href="/cs-236/relational-database" class="wikilink1" title="cs-236:relational-database">Relational-database</a>)</div>
      </li>
      <li class="level0"><div class="li">Use relational algebra to write queries to get information from a set of relations (<a href="/cs-236/homework-7" class="wikilink1" title="cs-236:homework-7">Homework 7</a> and <a href="/cs-236/relational-database" class="wikilink1" title="cs-236:relational-database">Relational-database</a>)</div>
      </li>
      <li class="level0"><div class="li">Write a Datalog query in terms of relational algebra (select, project, and rename). Write a Datalog rule in terms of relational algebra (select, project, rename, natural join, and general set operations). (<a href="/cs-236/relational-database" class="wikilink1" title="cs-236:relational-database">Relational-database</a>)</div>
      </li>
    </ul>

    <p>
    For all of the problems related to inference, <b>proofs should look like those done in class being in tabular form with clearly labeled inference rules that identify the involved statements.</b> You will need to have a working knowledge of these rules and their names as they are not provided with the exam.  <b>You will also need to have a working knowledge of logical equivalences from chapter 1.</b>
    </p>

  </div>

  <h2 class="sectionedit3" id="final-exam-review">Final Exam Review</h2>
  <div class="level2">

    <p>
    For sections 001 and 002, the final is at the scheduled time in class. For sections 003 and 004, the final opens December 10, 2016, and closes December 15, 2016 in the testing center. Be sure you check the testing center schedule and policies so your plan for the test is logically consistent. The exam questions include multiple guess and short answers, so it is a little different than before.  You will indicate your answers (and show your work) directly on the exam except for the multiple guess section. The exam is closed book but <b>one page of notes</b> is allowed (8.5&times;11). It is expected to take at least 2.5 hours depending on your confidence level. Although the exam is comprehensive, it spends most of its time on key themes and the recent topics studied since the last midterm.
    </p>
    <ul>
      <li class="level1"><div class="li">Write regular expressions for simple patterns and identify strings that belong to the language defined by a regular expression</div>
      </li>
      <li class="level0"><div class="li">Show a derivation given a simple grammar and an input string</div>
      </li>
      <li class="level0"><div class="li">Remove left-recursion from a simple grammar</div>
      </li>
      <li class="level0"><div class="li">Build an LL(1) parse table for a grammar</div>
      </li>
      <li class="level0"><div class="li">Determine if a relation is reflexive, irreflexive, symmetric, antisymmetric, transitive</div>
      </li>
      <li class="level0"><div class="li">Add pairs into a relation to make it reflexive or transitive (reflexive and transitive closure)</div>
      </li>
      <li class="level0"><div class="li">Figure out the grammar defined by code implementing an LL(1) top-down parser and describe the language with a regular expression</div>
      </li>
      <li class="level0"><div class="li">Solve queries on a given Datalog program using resolution, De Morgan&#039;s law, and logical equivalences</div>
      </li>
      <li class="level0"><div class="li">Use relational algebra to interpret a Datalog program and answer queries</div>
      </li>
      <li class="level0"><div class="li">Compute the power-set for a given set and draw a Hasse diagram for a given relational operator</div>
      </li>
      <li class="level0"><div class="li">Draw Hasse diagrams from partial orders using the divides-by operator</div>
      </li>
      <li class="level0"><div class="li">Compute least-upper-bounds and greatest-lower-bounds on a partial order</div>
      </li>
      <li class="level0"><div class="li">Identify when a partial order is a lattice</div>
      </li>
      <li class="level0"><div class="li">Algorithmically compute strongly connected components in arbitrary graphs</div>
      </li>
      <li class="level0"><div class="li">Use Dijkstra&#039;s algorithm to compute the shortest path between two nodes in a graph including extra information to reconstruct the actual path that is the shortest path. </div>
      </li>
      <li class="level0"><div class="li">Use Prim&#039;s algorithm to compute a minimum spanning tree with its cost on a give graph including extra information to reconstruct the actual tree</div>
      </li>
      <li class="level0"><div class="li">Use Kruskal&#039;s algorithm to a compute minimum spanning tree on a given graph including the use of trees to represent disjoint sets (must know the union-rank operation for the trees)</div>
      </li>
      <li class="level0"><div class="li">Show on inductive proof for correctness on an integer summation formula</div>
      </li>
      <li class="level0"><div class="li">Write a recursive algorithm to perform simple computation and prove the algorithm correct using induction</div>
      </li>
      <li class="level0"><div class="li">Enjoy an unexpected opportunity to demonstrate deeper understanding of a choice topic from the course</div>
      </li>
      <li class="level0"><div class="li">Smugly chuckle before leaving the testing center to give the impression that the exam was ridiculously easy (regardless of reality)</div>
      </li>
    </ul>
  </div>
</div>`
});
