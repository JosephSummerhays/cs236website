var syllabus = Vue.component('syllabus', {
  data: function () {
    return {
      //?????
    }
  },
  template: `
<div class="page">
  <h2 class="sectionedit1" id="description">Description</h2>
  <div class="level2">

  <p>
  The course covers fundamental ideas in discrete mathematics and their application to computer science. Topics include but are not limited to:
  </p>
  <ul>
  <li class="level1"><div class="li">regular expressions and finite state machines</div>
  </li>
  <li class="level0"><div class="li">grammars, languages, and parsing</div>
  </li>
  <li class="level0"><div class="li">propositional logic </div>
  </li>
  <li class="level0"><div class="li">predicate calculus</div>
  </li>
  <li class="level0"><div class="li">prolog and datalog</div>
  </li>
  <li class="level0"><div class="li">sets and relations</div>
  </li>
  <li class="level0"><div class="li">relational database fundamentals</div>
  </li>
  <li class="level0"><div class="li">functions; and graphs</div>
  </li>
  </ul>

  <p>
  The course is a blend of basic theoretical concepts in computer science and hands-on applications of those ideas in programming.
  </p>

  </div>

  <h2 class="sectionedit2" id="learning-outcomes">Learning Outcomes</h2>
  <div class="level2">

  <p>
  <b>Use Mathematical Structures to Solve Programming Problems</b>
  </p>
  <ul>
  <li class="level1"><div class="li">Understand and be conversant with basic discrete mathematical structures (finite state machines, regular expressions, grammars, propositional calculus, proof techniques, predicate calculus, sets, relations, functions, graphs).</div>
  </li>
  <li class="level0"><div class="li">Write complex programs by using mathematical concepts as the basis for solving programming problems (finite state machines for lexical analysis; grammars for parsing; propositional and predicate calculus for logic programming; sets and algebras for relational databases; algebras, graphs, and topological sorting for optimizing datalog query processing).</div>
  </li>
  <li class="level0"><div class="li">Incrementally build sophisticated programs by a systematic design process based on discrete mathematics.</div>
  </li>
  <li class="level0"><div class="li">Design a solution for a programming problem and justify the design as one that is maintainable and extendable by other programmers who understand and are conversant with discrete mathematical structures.</div>
  </li>
  </ul>

  <p>
  Contributes to 2 program outcomes
  </p>

  <p>
  <b>Write Code From Diverse Program Components</b>
  </p>
  <ul>
  <li class="level1"><div class="li">Demonstrate ability to build large programs by writing and integrating code from a diverse spectrum of program components.</div>
  </li>
  </ul>

  <p>
  Contributes to 4 program outcomes
  </p>

  <p>
  Full details are found in the <a href="https://learningoutcomes.byu.edu/#college=-Z6czUKBNzwp&amp;department=e6gPosIhghkh&amp;program=QvOHHzg1w1zP" class="urlextern" title="https://learningoutcomes.byu.edu/#college=-Z6czUKBNzwp&amp;department=e6gPosIhghkh&amp;program=QvOHHzg1w1zP" rel="nofollow">Computer Science learning outcomes</a>.
  </p>

  </div>

  <h2 class="sectionedit3" id="prerequisites">Prerequisites</h2>
  <div class="level2">

  <p>
  You must complete CS 235 with a passing grade before taking CS 236. Please see the <a href="https://cs.byu.edu/curriculum-bs-computer-science" class="urlextern" title="https://cs.byu.edu/curriculum-bs-computer-science" rel="nofollow">program requirements</a> for further details.
  </p>

  </div>

  <h2 class="sectionedit4" id="text-book">Text Book</h2>
  <div class="level2">

  <p>
  <a href="http://highered.mcgraw-hill.com/sites/0073383090/information_center_view0/" class="urlextern" title="http://highered.mcgraw-hill.com/sites/0073383090/information_center_view0/" rel="nofollow">Discrete Mathematics and Its Application, 7/e</a>, ISBN: 0073383090,
  Copyright year: 2012.
  </p>

  </div>

  <h2 class="sectionedit5" id="grading-scale">Grading Scale</h2>
  <div class="level2">

  <p>
  See <a href="http://learningsuite.byu.edu" class="urlextern" title="http://learningsuite.byu.edu" rel="nofollow">Learning Suite for details</a>. The instructor reserves the right to alter the grading scale in favor of the students.
  </p>

  </div>

  <h2 class="sectionedit6" id="grade-composition">Grade Composition</h2>
  <div class="level2">
  <ul>
  <li class="level1"><div class="li">Homework and In-class Quizzes (20%)</div>
  </li>
  <li class="level0"><div class="li">Projects (30%)</div>
  </li>
  <li class="level0"><div class="li">Midterm 1 (15%)</div>
  </li>
  <li class="level0"><div class="li">Midterm 2 (15%)</div>
  </li>
  <li class="level0"><div class="li">Final (20%)</div>
  </li>
  </ul>

  </div>

  <h2 class="sectionedit7" id="learning-activities">Learning Activities</h2>
  <div class="level2">

  <p>
  The learning activities are intended to help you learn the major course topics and achieve the learning outcomes. A diligent student should receive most all points on the learning activities; they exist to provide an opportunity for practice and feedback on core topics. The course is easily passed if you engage fully in the learning activities (i.e., earn most all of the available points).
  </p>

  </div>

  <h3 class="sectionedit8" id="homework">Homework</h3>
  <div class="level3">

  <p>
  Homework assignments are due in <a href="http://learningsuite.byu.edu" class="urlextern" title="http://learningsuite.byu.edu" rel="nofollow">learningsuite</a> as an uploaded PDF file before 11:59 PM on the day it is due. Late homework will not be accepted except under circumstances as decided by the professor. The student will need to talk to the professor to determine if his/her situation allows a late submission of the homework. The professor will decide an acceptable due date for the late work and if any deductions will be applied, as well as how the homework will be turned in. Homework submitted after the last day of class is not accepted. As most (all) homework is math based, conversion to PDF is best done with a copier or as pictures with a smartphone. <b>Only homework in PDF format uploaded to <a href="http://learningsuite.byu.edu" class="urlextern" title="http://learningsuite.byu.edu" rel="nofollow">learningsuite</a> is accepted</b>.
  </p>

  </div>

  <h3 class="sectionedit9" id="projects">Projects</h3>
  <div class="level3">

    <p>
    The goals of writing code in this class are (a) to help you understand some of the mathematical abstractions in the class by implementing them in code and (b) to help you learn a little about relational databases. The projects are intended to bridge the gap between what is in the lectures/textbook and what you need to do in actual code.
    </p>

    <p>
    Please review the <a href="/cs-236/project-standards" class="wikilink1" title="cs-236:project-standards"> project standards</a> that define build standards, interfaces, code quality, and performance requirements for all projects. These will be <b>strictly</b> enforced. Key aspects are here for convenience:
    </p>
    <ul>
    <li class="level1"><div class="li">All projects must be implemented in C++.</div>
    </li>
    <li class="level0"><div class="li">All projects must <a href="/cs-236/project-standards" class="wikilink1" title="cs-236:project-standards"> take a single command line argument</a> indicating the input file.</div>
    </li>
    <li class="level0"><div class="li">Any solution must satisfy all requirements given in the project specification.</div>
    </li>
    <li class="level0"><div class="li">All projects must be submitted by the last day of class to be considered in the grade.</div>
    </li>
    <li class="level0"><div class="li">All projects must be completed individually including test case generation.</div>
    </li>
    <li class="level0"><div class="li">All projects must meet the indicated time bound in the <a href="/cs-236/project-standards" class="wikilink1" title="cs-236:project-standards"> project standards</a>.</div>
    </li>
    <li class="level0"><div class="li">All projects must meet the complexity and style standard.</div>
    </li>
    </ul>

    <p>
      <b>Project Grading:</b> Each project has a possible score of 100 points with <b>10 of the 100 points awarded for the programming style with the rest allocated to passing private test cases.</b>  The TAs are instructed to show enough of any failed test case to facilitate debugging. The 100 points is further divided into the equal parts depending on each project, which each part contributing 50 points.
    </p>

    <p>
      <b>Bonuses</b> (incentives for early completion and correct output):
    </p>
    <ul>
      <li class="level1"><div class="li">+2% if you submit and pass-off a day before a project is due or earlier.</div>
      </li>
      <li class="level0"><div class="li">+5 points if you pass-off all private test (part 2 submissions) cases perfectly on the first try (i.e., spacing, punctuation, caps, sorting/order—everything, according to the output examples provided in the project specifications).</div>
      </li>
      <li class="level0"><div class="li">No extra credit will be given until all test cases pass successfully.</div>
      </li>
    </ul>

    <p>
      <b>Deductions:</b>
    </p>
    <ul>
      <li class="level1"><div class="li">-3% per pass-off after 5 tries.</div>
      </li>
      <li class="level0"><div class="li">-3% per school day late (up to 25%). Example: If a project is due on Thursday but turned in on Friday, it is one day late; and it is two days late if turned in on Monday. The biggest penalty for turning in late projects is not the points lost, but rather that you will be behind for the next project.</div>
      </li>
    </ul>

    <p>
      <b>Partial Credit for Projects:</b>
    </p>
    <ul>
      <li class="level1"><div class="li">Partial credit is computed based on how many of the test cases you successfully pass. Projects have a varying number of test cases.</div>
      </li>
      <li class="level0"><div class="li">You will be given partial credit if your project does not pass all of the test cases. You may continue working on your project after this point and pass off again to improve your score. Whatever score is highest will be the one kept for your project score.</div>
      </li>
      <li class="level0"><div class="li">The pass-off script does have a time-out (around 1 minute). Any solution that is based on the mathematical concepts should complete easily in the time limit.</div>
      </li>
    </ul>

    <p>
      <b>Project Submission/Pass-off:</b>
      Pass-off projects directly to a TA during normal <a href="/cs-236/teaching-assistants" class="wikilink1" title="cs-236:teaching-assistants">TA hours</a> after the solution is uploaded to <a href="http://learningsuite.byu.edu" class="urlextern" title="http://learningsuite.byu.edu" rel="nofollow">learningsuite</a> which is where the TAs will obtain the code. TAs help students on a first-come/first-serve basis and are under no obligation to stay later than designated hours.
    </p>
    <ul>
      <li class="level1"><div class="li">Programs should be passed off on or before the due date specified in the schedule. (Do not wait until the last hour of the last day.) </div>
      </li>
      <li class="level0"><div class="li">Projects submitted with a time-stamp of midnight or before on the due date may be passed off for full credit on the next school day. (Note: We do not recommend this method. If you miss one test case or fail the code quality requirements, you do not get full credit.) </div>
      </li>
      <li class="level0"><div class="li">Pass-off adheres to the <a href="/cs-236/project-standards" class="wikilink1" title="cs-236:project-standards"> project standards</a>. Test your programs thoroughly in Linux before coming to the TAs. Supplied tests are private by intention. </div>
      </li>
      <li class="level0"><div class="li">The TAs provide feedback on code quality at in-person pass-off enabling an opportunity to refactor code for full credit.</div>
      </li>
    </ul>

  </div>

  <h3 class="sectionedit10" id="quizzes">Quizzes</h3>
  <div class="level3">

    <p>
    At the instructor&#039;s discretion, there may be in-class quizzes. These are both <i>assessment</i> and <i>learning</i> activities. The frequency and topic of the quizzes depend on the instructor. It is not possible to make up a missed in-class quiz unless it is due to emergency, illness, or in coordination with the instructor as a planned absence.
    </p>

  </div>

  <h2 class="sectionedit11" id="ta-support-policy">TA Support Policy</h2>
  <div class="level2">

    <p>
    The <a href="/cs-236/ta-help-policy" class="wikilink1" title="cs-236:ta-help-policy">TA Help Policy</a> is intended to help you gain deeper learning of the course material by providing time and space for you to independently interact with the book, homework, and projects. It also assists in making sure that all may receive feedback and guidance in a timely way.
    </p>

    <p>
    Please review and re-review the <a href="/cs-236/ta-help-policy" class="wikilink1" title="cs-236:ta-help-policy"> policy</a> before visiting the TAs and expectations are reasonable. The student has the primary responsibility for debugging, testing, and providing solutions. That responsibility may not be shifted to the TAs.
    Concerns with the TA support policy should be addressed directly with the course instructors.
    </p>

  </div>

  <h2 class="sectionedit12" id="learning-assessments">Learning Assessments</h2>
  <div class="level2">

    <p>
    The are two midterms and a final in the course. The final is comprehensive. These exams are intended to assess what you have learned. All of these will be given in the testing center. If you miss the midterm, for whatever reason, then contact the professor as soon as possible to discuss options.
    </p>

  </div>

  <h2 class="sectionedit13" id="cheating-is-not-cool">Cheating is not Cool</h2>
  <div class="level2">

    <p>
    The goal of the learning activities is to help students learn. Students can easily abort that learning by not completing their own work and rather submitting work by others. Solutions to all of the projects and homework can be found with very little effort. Indulging in the temptation to cheat, for any reason, leads to sorrow either in a failed learning assessment, a guilty conscience followed by an unpleasant conversation with the instructor, or some other consequence that is unwelcome. The outcome of an individual taken in cheating is at the discretion of the instructor.
    </p>

    <p>
    Students are encouraged to work on homework and projects as groups. The proper way to do group work is for each student in the group to have made an honest effort to solve each problem prior to meeting with the group.  Then the group discusses places where students are struggling in an effort to help each other master challenging concepts.  Students should then individually complete the problems on their own. Copying work, even in a group setting, aborts learning, is not ethical, and is not cool.
    </p>

    <p>
    The following are specific examples of non-compliance (note that this list is not exhaustive):
    </p>
    <ul>
      <li class="level1"><div class="li">Participating in a group homework meeting without having attempted each problem before the meeting.</div>
      </li>
      <li class="level0"><div class="li">Copying homework or exam answers from another student, from the internet, from an answer key, or from a solutions manual.</div>
      </li>
      <li class="level0"><div class="li">Allowing someone to copy from your homework or exam answers.</div>
      </li>
      <li class="level0"><div class="li">Copying test cases or code from another student, from the internet, or from a textbook.</div>
      </li>
      <li class="level0"><div class="li">Allowing someone to use your test cases or code.</div>
      </li>
      <li class="level0"><div class="li">Using any part of another person&#039;s test cases or code to complete an assignment.</div>
      </li>
      <li class="level0"><div class="li">Copying solutions or parts of solutions from group-work notes or TA-consultation notes.</div>
      </li>
    </ul>

    <p>
      <i>And finally, I cannot tell you all the things whereby ye may cheat; for there are divers ways and means, even so many that I cannot number them. But this much I can tell you, that if ye do not watch yourselves and observe to do your own work, and learn the material, even unto the end of the semester, ye must fail. And now, O student, remember and fail not.</i>
    </p>

  </div>

  <h2 class="sectionedit14" id="study-habits">Study Habits</h2>
  <div class="level2">

    <p>
      <b>Read before coming to class</b>.  Even if all you do is read bold headings and words in italics, you will learn more in lecture than coming to class without having read.
    </p>

    <p>
      <b>Read before coming to class</b>.  Lecture is one of five learning activities in this class, with the other four being homework assignments, projects, exams, and studying the textbook.   Studying the textbook before class will enable you to learn more during the lecture.
    </p>

    <p>
      <b>Read before coming to class</b>.  It is more difficult to read the textbook before you come to class than to read it after, but you will learn and retain more if you read before class than if you wait until after class to read the assigned material.  Additionally, reading before class will ultimately save you study time because it is a more effective way to learn.
    </p>

    <p>
      <b>Attend help sessions and talk with TAs</b>.  The TAs are great. Their availability can be viewed by going to <a href="/cs-236/teaching-assistants" class="wikilink1" title="cs-236:teaching-assistants">Teaching Assistants</a>.
    </p>

  </div>

  <h2 class="sectionedit15" id="teaching-philosophy">Teaching Philosophy</h2>
  <div class="level2">

    <p>
    <i>Education is the great conversion process under which abstract knowledge becomes useful and a productive activity.</i>—  Gordon B. Hinckley in <i>Standing For Something</i>.
    </p>

  </div>

  <h2 class="sectionedit16" id="preventing-responding-to-sexual-misconduct">Preventing &amp; Responding to Sexual Misconduct</h2>
  <div class="level2">

    <p>
    In accordance with Title IX of the Education Amendments of 1972, Brigham Young University prohibits unlawful sex discrimination against any participant in its education programs or activities. The university also prohibits sexual harassment—including sexual violence—committed by or against students, university employees, and visitors to campus. As outlined in university policy, sexual harassment, dating violence, domestic violence, sexual assault, and stalking are considered forms of “Sexual Misconduct” prohibited by the university.
    </p>

    <p>
    University policy requires all university employees in a teaching, managerial, or supervisory role to report all incidents of Sexual Misconduct that come to their attention in any way, including but not limited to face-to-face conversations, a written class assignment or paper, class discussion, email, text, or social media post.  Incidents of Sexual Misconduct should be reported to the Title IX Coordinator at t9coordinator@byu.edu or (801) 422-8692.  Reports may also be submitted through EthicsPoint at <a href="https://titleix.byu.edu/report" class="urlextern" title="https://titleix.byu.edu/report" rel="nofollow">https://titleix.byu.edu/report</a> or 1-888-238-1062 (24-hours a day).
    </p>

    <p>
    BYU offers confidential resources for those affected by Sexual Misconduct, including the university’s Victim Advocate, as well as a number of non-confidential resources and services that may be helpful. Additional information about Title IX, the university’s Sexual Misconduct Policy, reporting requirements, and resources can be found at <a href="http://titleix.byu.edu" class="urlextern" title="http://titleix.byu.edu" rel="nofollow">http://titleix.byu.edu</a> or by contacting the university’s Title IX Coordinator.
    </p>

  </div>

  <h2 class="sectionedit17" id="university-policies">University Policies</h2>
  <div class="level2">

    <p>
    This course adheres strictly to all <a href="http://policy.byu.edu/" class="urlextern" title="http://policy.byu.edu/" rel="nofollow">university policies</a>. You are advised to review and be familiar with these policies as part of the course.
    </p>

  </div>
</div>
`
});
