var homework = Vue.component('homework', {
	data: function () {
		return {
			hwshow: [false, false, false, false, false, false, false, false, false, false],
		};
	},
	methods: {
		fliphw: function (index) {
			this.hwshow[index] = !this.hwshow[index];
			console.log(this.hwshow);
		},
	},
	computed: {
		display: function(index) {
			console.log(index + " blah blah " + this.hwshow[index]);
			return this.hwshow[index];
		}
	},
	template: `
<div class="page">
  <p>
  Homework are intended to help prepare for quizzes, projects, midterms, and the final.  If you work the homework, then you are adequately prepared (in theory).  Please refer to <a href="http://learningsuite.byu.edu" class="urlextern" title="http://learningsuite.byu.edu" rel="nofollow">Learning Suite</a> for due dates. Also, please see the <a href="/cs-236/syllabus" class="wikilink1" title="cs-236:syllabus">Syllabus</a> for late policy, grade composition, and other details regarding homework.
  </p>
  <ul>
    <li v-on:click="fliphw(0)"><div class="li"><a class="wikilink1" title="cs-236:homework-0">Homework 0</a></div>
    </li>
	<li v-if="hwshow && hwshow[0]"><hwzero></hwzero></li>
	<li><hwzero></hwzero></li>
    <li class="level0"><div class="li"><a href="/cs-236/homework-1" class="wikilink1" title="cs-236:homework-1">Homework 1</a></div>
    </li>
    <li class="level0"><div class="li"><a href="/cs-236/homework-2" class="wikilink1" title="cs-236:homework-2">Homework 2</a></div>
    </li>
    <li class="level0"><div class="li"><a href="/cs-236/homework-3" class="wikilink1" title="cs-236:homework-3">Homework 3</a></div>
    </li>
    <li class="level0"><div class="li"><a href="/cs-236/homework-4" class="wikilink1" title="cs-236:homework-4">Homework 4</a></div>
    </li>
    <li class="level0"><div class="li"><a href="/cs-236/homework-5" class="wikilink1" title="cs-236:homework-5">Homework 5</a></div>
    </li>
    <li class="level0"><div class="li"><a href="/cs-236/homework-6" class="wikilink1" title="cs-236:homework-6">Homework 6</a></div>
    </li>
    <li class="level0"><div class="li"><a href="/cs-236/homework-7" class="wikilink1" title="cs-236:homework-7">Homework 7</a></div>
    </li>
    <li class="level0"><div class="li"><a href="/cs-236/homework-8" class="wikilink1" title="cs-236:homework-8">Homework 8</a></div>
    </li>
    <li class="level0"><div class="li"><a href="/cs-236/homework-9" class="wikilink1" title="cs-236:homework-9">Homework 9</a></div>
    </li>
    <li class="level0"><div class="li"><a href="/cs-236/homework-10" class="wikilink1" title="cs-236:homework-10">Homework 10</a></div>
    </li>
    <li class="level0"><div class="li"><a href="/cs-236/homework-11" class="wikilink1" title="cs-236:homework-11">Homework 11</a></div>
    </li>
  </ul>
</div>`
});

Vue.component('hwzero', {
	template: "<div><h2>Does anything work?</h2></div>",/*
	template: `
	<div>
<h2 class="sectionedit1" id="goals">Goals</h2>
<div class="level2">

<p>
Learn the basics of the command line, refresh C++, command line compilation, and basic gdb (lldb) commands
</p>

</div>

<h2 class="sectionedit2" id="concepts">Concepts</h2>
<div class="level2">
<ul>
<li class="level1"><div class="li">Basic command line literacy: navigation, process management, piping, etc.</div>
</li>
<li class="level0"><div class="li">Refresh C++ literacy: memory management, references, and const</div>
</li>
<li class="level0"><div class="li">Command line compilation</div>
</li>
<li class="level0"><div class="li">Debugging with LLDB or GDB</div>
</li>
</ul>

</div>

<h2 class="sectionedit3" id="problems">Problems</h2>
<div class="level2">
<ol>
<li class="level1"><div class="li">(<b>3 points</b>) Complete the <a href="http://ryanstutorials.net/linuxtutorial/commandline.php" class="urlextern" title="http://ryanstutorials.net/linuxtutorial/commandline.php" rel="nofollow">command line tutorial</a> and report your experience in one paragraph: what was new, what was review, and what was a waste.</div>
</li>
<li class="level0"><div class="li">(<b>3 points</b>) Complete the <a href="http://www.tutorialspoint.com/cplusplus/cpp_dynamic_memory.htm" class="urlextern" title="http://www.tutorialspoint.com/cplusplus/cpp_dynamic_memory.htm" rel="nofollow">dynamic memory tutorial</a> and report your experience in one paragraph: what was new, what was review, and what was a waste.</div>
</li>
<li class="level0"><div class="li">(<b>3 points</b>) Complete the <a href="http://www.tutorialspoint.com/cplusplus/cpp_references.htm" class="urlextern" title="http://www.tutorialspoint.com/cplusplus/cpp_references.htm" rel="nofollow">references tutorial</a> and report your experience in one paragraph: what was new, what was review, and what was a waste.</div>
</li>
<li class="level0"><div class="li">(<b>3 points</b>) Complete the <a href="http://www.cprogramming.com/tutorial/const_correctness.html" class="urlextern" title="http://www.cprogramming.com/tutorial/const_correctness.html" rel="nofollow">const tutorial</a> and report your experience in one paragraph: what was new, what was review, and what was a waste.</div>
</li>
<li class="level0"><div class="li">(<b>3 points</b>) Complete the <a href="http://pages.cs.wisc.edu/~beechung/ref/gcc-intro.html" class="urlextern" title="http://pages.cs.wisc.edu/~beechung/ref/gcc-intro.html" rel="nofollow">compiling with the command line tutorial</a> and report your experience in one paragraph: what was new, what was review, and what was a waste. </div>
</li>
<li class="level0"><div class="li">(<b>1 point</b>) Review the <a href="/cs-236/project-standards" class="wikilink1" title="cs-236:project-standards">project standards</a> and report any questions.</div>
</li>
<li class="level0"><div class="li">(<b>3 points</b>) Complete either the <a href="http://lldb.llvm.org/tutorial.html" class="urlextern" title="http://lldb.llvm.org/tutorial.html" rel="nofollow">LLDB tutorial</a> or the <a href="http://www.unknownroad.com/rtfm/gdbtut/" class="urlextern" title="http://www.unknownroad.com/rtfm/gdbtut/" rel="nofollow">GDB tutorial</a> depending on if you are using the <b>clang++</b> (<abbr title="Operating System">OS</abbr> X) or <b>g++</b> (<abbr title="Operating System">OS</abbr> X and Linux) compiler. Report your experience in one paragraph: what was new, what was review, and what was a waste. Typically, the two compilers behave the same, and if it works in <b>clang++</b>, then it is going to be fine in <b>g++</b> on pass-off. Although <abbr title="Operating System">OS</abbr> X has both compilers installed, it only has LLDB available for debugging (or Xcode that wraps LLDB into a nice user interface). </div>
</li>
</ol>

</div>
`*/
});

Vue.component('hw1', {
	template:`
	<h2 class="sectionedit1" id="goals-of-homework">Goals of Homework</h2>
<div class="level2">
<ul>
<li class="level1"><div class="li">Learn to use sets and functions, and see how they act as formalisms for CS concepts.</div>
</li>
<li class="level0"><div class="li">Understand the differences between symbols, strings, and languages; see how they appear in CS concepts.</div>
</li>
</ul>

</div>

<h2 class="sectionedit2" id="concepts">Concepts</h2>
<div class="level2">
<ul>
<li class="level1"><div class="li">Set-builder notation</div>
</li>
<li class="level0"><div class="li">Set notation</div>
</li>
<li class="level0"><div class="li">Set operations: union, intersection, complement, Cartesian product</div>
</li>
<li class="level0"><div class="li">Relationship between C++ iterators and sets</div>
</li>
<li class="level0"><div class="li">Function notation</div>
</li>
<li class="level0"><div class="li">Function vocabulary: domain, range, onto (surjective), one-to-one (injective), and both (bijective).</div>
</li>
<li class="level0"><div class="li">Relationship between C++ functions or methods and mathematical functions.</div>
</li>
<li class="level0"><div class="li">(<b>3 points</b>) Complete the <a href="http://www.tutorialspoint.com/cplusplus/cpp_dynamic_memory.htm" class="urlextern" title="http://www.tutorialspoint.com/cplusplus/cpp_dynamic_memory.htm" rel="nofollow">dynamic memory tutorial</a> and report your experience in one paragraph: what was new, what was review, and what was a waste.</div>
</li>
<li class="level0"><div class="li">(<b>3 points</b>) Complete the <a href="http://www.tutorialspoint.com/cplusplus/cpp_references.htm" class="urlextern" title="http://www.tutorialspoint.com/cplusplus/cpp_references.htm" rel="nofollow">references tutorial</a> and report your experience in one paragraph: what was new, what was review, and what was a waste.</div>
</li>
<li class="level0"><div class="li">(<b>3 points</b>) Complete the <a href="http://www.cprogramming.com/tutorial/const_correctness.html" class="urlextern" title="http://www.cprogramming.com/tutorial/const_correctness.html" rel="nofollow">const tutorial</a> and report your experience in one paragraph: what was new, what was review, and what was a waste.</div>
</li>
<li class="level0"><div class="li">(<b>3 points</b>) Complete the <a href="http://pages.cs.wisc.edu/~beechung/ref/gcc-intro.html" class="urlextern" title="http://pages.cs.wisc.edu/~beechung/ref/gcc-intro.html" rel="nofollow">compiling with the command line tutorial</a> and report your experience in one paragraph: what was new, what was review, and what was a waste. </div>
</li>
<li class="level0"><div class="li">(<b>1 point</b>) Review the <a href="/cs-236/project-standards" class="wikilink1" title="cs-236:project-standards">project standards</a> and report any questions.</div>
</li>
<li class="level0"><div class="li">(<b>3 points</b>) Complete either the <a href="http://lldb.llvm.org/tutorial.html" class="urlextern" title="http://lldb.llvm.org/tutorial.html" rel="nofollow">LLDB tutorial</a> or the <a href="http://www.unknownroad.com/rtfm/gdbtut/" class="urlextern" title="http://www.unknownroad.com/rtfm/gdbtut/" rel="nofollow">GDB tutorial</a> depending on if you are using the <b>clang++</b> (<abbr title="Operating System">OS</abbr> X) or <b>g++</b> (<abbr title="Operating System">OS</abbr> X and Linux) compiler. Report your experience in one paragraph: what was new, what was review, and what was a waste. Typically, the two compilers behave the same, and if it works in <b>clang++</b>, then it is going to be fine in <b>g++</b> on pass-off. Although <abbr title="Operating System">OS</abbr> X has both compilers installed, it only has LLDB available for debugging (or Xcode that wraps LLDB into a nice user interface). </div>
</li>
</ol>

</div>
	</div>
`
});

Vue.component('hw1', {
	template:`
	<h2 class="sectionedit1" id="goals-of-homework">Goals of Homework</h2>
<div class="level2">
<ul>
<li class="level1"><div class="li">Learn to use sets and functions, and see how they act as formalisms for CS concepts.</div>
</li>
<li class="level0"><div class="li">Understand the differences between symbols, strings, and languages; see how they appear in CS concepts.</div>
</li>
</ul>

</div>

<h2 class="sectionedit2" id="concepts">Concepts</h2>
<div class="level2">
<ul>
<li class="level1"><div class="li">Set-builder notation</div>
</li>
<li class="level0"><div class="li">Set notation</div>
</li>
<li class="level0"><div class="li">Set operations: union, intersection, complement, Cartesian product</div>
</li>
<li class="level0"><div class="li">Relationship between C++ iterators and sets</div>
</li>
<li class="level0"><div class="li">Function notation</div>
</li>
<li class="level0"><div class="li">Function vocabulary: domain, range, onto (surjective), one-to-one (injective), and both (bijective).</div>
</li>
<li class="level0"><div class="li">Relationship between C++ functions or methods and mathematical functions.</div>
</li>
<li class="level0"><div class="li">Symbols, strings, and languages</div>
</li>
</ul>

</div>

<h2 class="sectionedit3" id="problems">Problems</h2>
<div class="level2">
<ol>
<li class="level1"><div class="li">(4 points) Section 2.1 problem 1 parts b and d.</div>`
});
