var tas = Vue.component('tas', {
  data: function () {
    return {
      //?????
    }
  },
  template: `
<div>
  <p>
  Please review the <a href="/cs-236/ta-help-policy" class="wikilink1" title="cs-236:ta-help-policy">TA Help Policy</a> before visiting with any TA. Any concerns with the policy should be discussed in person with the instructor. TAs are located in the TA cubicles in the basement of the TMCB. Please submit to the <a href="https://students.cs.byu.edu/~cs236ta/helpqueue/" class="urlextern" title="https://students.cs.byu.edu/~cs236ta/helpqueue/" rel="nofollow">help queue</a> first to get in line if needed.
  </p>

  <p>
  You may also post questions in the “Digital Dialog” section of Learning Suite. TAs will monitor and answer questions posted there as time allows.
  </p>

  <h1 class="sectionedit1" id="help-queue">Help Queue</h1>
  <div class="level1">

  <p>
  Please review the <a href="/cs-236/ta-help-policy" class="wikilink1" title="cs-236:ta-help-policy">TA Help Policy</a> before submitting questions to the <a href="https://students.cs.byu.edu/~cs236ta/helpqueue/" class="urlextern" title="https://students.cs.byu.edu/~cs236ta/helpqueue/" rel="nofollow">Help Queue</a> or requesting a pass-off on the <a href="https://students.cs.byu.edu/~cs236ta/helpqueue/" class="urlextern" title="https://students.cs.byu.edu/~cs236ta/helpqueue/" rel="nofollow">Help Queue</a>. The <a href="https://students.cs.byu.edu/~cs236ta/helpqueue/" class="urlextern" title="https://students.cs.byu.edu/~cs236ta/helpqueue/" rel="nofollow">Help Queue</a> is only active during office hours, and the submitter is expected to be present when at the top of queue. The <a href="https://students.cs.byu.edu/~cs236ta/helpqueue/" class="urlextern" title="https://students.cs.byu.edu/~cs236ta/helpqueue/" rel="nofollow">Help Queue</a> reports to the submitter where in the queue the request is located, as the submission nears the top of the queue (within 5) it sends a notification so the submitter may go to the TA office for help. The queue automatically refreshes as the TAs work through each submission.
  </p>

  <p>
  Please note, the queue is inactive when there is no on-duty TA, and it may be reset at night, so there is no saving a place.
  </p>

  </div>

  <h1 class="sectionedit2" id="ta-schedule">TA Schedule</h1>
  <div class="level1">

  <p>
  The Fall 2017 TA schedule is in the table below. Help sessions are in blue. The TA lab is closed during the red times.
  </p>

  <p>
  <b>NOTE</b>: These times are subject to change, including the help sessions.
  </p>

  <p>
  <b>Help sessions will be held in TMCB 1042 if the room is available; otherwise, come into the TA office to find where the location is.</b>
  </p>

  <p>

  <style>
  table {
  border-collapse: collapse;
  }

  td, th {
  border: 1px solid #000000;
  text-align: left;
  padding: 8px;
  width: 90px;
  text-align: center;
  }

  th {
  background-color: #444444;
  color: white;
  }

  .topCell {
  border-bottom: 0px;
  }

  .middleCell {
  border-top: 0px;
  border-bottom: 0px;
  }

  .bottomCell {
  border-top: 0px;
  }

  .helpSession {
  background-color: #00ddff;
  }

  .closed {
  background-color: #EE5555;
  }

  </style>
  <table id="schedule">
  <tr>
  <th></th>
  <th>Monday</th>
  <th>Tuesday</th>
  <th>Wednesday</th>
  <th>Thursday</th>
  <th>Friday</th>
  <th>Saturday</th>
  </tr>
  <tr>
  <th rowspan="2">8:00 AM</th>
  <td class="topCell">Ryan</td>
  <td class="topCell">Ryan</td>
  <td class="topCell">Ryan</td>
  <td class="topCell">Ryan</td>
  <td class="topCell">Ryan</td>
  <td class="topCell">Caleb</td>
  </tr>
  <tr>
  <td class="bottomCell">Zach</td>
  <td class="bottomCell">Zach</td>
  <td class="bottomCell">Zach</td>
  <td class="bottomCell">Zach</td>
  <td class="bottomCell">Zach</td>
  <td class="bottomCell">Zach</td>
  </tr>
  <tr>
  <th rowspan="2">9:00 AM</th>
  <td class="topCell">Ryan</td>
  <td class="topCell">Ryan</td>
  <td class="topCell">Ryan</td>
  <td class="topCell">Ryan</td>
  <td class="topCell">Ryan</td>
  <td class="topCell">Caleb</td>
  </tr>
  <tr>
  <td class="bottomCell">Kyle</td>
  <td class="bottomCell">Zach</td>
  <td class="bottomCell">Kyle</td>
  <td class="bottomCell">Zach</td>
  <td class="bottomCell">Kyle</td>
  <td class="bottomCell">Zach</td>
  </tr>
  <tr>
  <th rowspan="3">10:00 AM</th>
  <td class="topCell">Claire</td>
  <td class="topCell helpSession">Ryan</td>
  <td class="topCell">Claire</td>
  <td class="topCell helpSession">Ryan</td>
  <td class="topCell">Kyle</td>
  <td class="topCell helpSession">Caleb</td>
  </tr>
  <tr>
  <td class="middleCell"></td>
  <td class="middleCell helpSession">Zach</td>
  <td class="middleCell"></td>
  <td class="middleCell helpSession">Zach</td>
  <td class="middleCell"></td>
  <td class="middleCell helpSession">Zach</td>
  </tr>
  <tr>
  <td class="bottomCell"></td>
  <td class="bottomCell helpSession">Claire</td>
  <td class="bottomCell"></td>
  <td class="bottomCell helpSession">Jake</td>
  <td class="bottomCell"></td>
  <td class="bottomCell helpSession">Brian</td>
  </tr>
  <tr>
  <th rowspan="3">11:00 AM</th>
  <td class="topCell helpSession">Ryan</td>
  <td class="topCell closed"></td>
  <td class="topCell">Ryan</td>
  <td class="topCell">Kyle</td>
  <td class="topCell helpSession">Paul</td>
  <td class="topCell">Brian</td>
  </tr>
  <tr>
  <td class="middleCell helpSession">Joseph</td>
  <td class="middleCell closed">Devotional</td>
  <td class="middleCell">Joseph</td>
  <td class="middleCell">Jake</td>
  <td class="middleCell helpSession">Joseph</td>
  <td class="middleCell"></td>
  </tr>
  <tr>
  <td class="bottomCell helpSession">Claire</td>
  <td class="bottomCell closed"></td>
  <td class="bottomCell"></td>
  <td class="bottomCell">Brian</td>
  <td class="bottomCell helpSession"></td>
  <td class="bottomCell"></td>
  </tr>
  <tr>
  <th rowspan="3">12:00 PM</th>
  <td class="topCell">Paul</td>
  <td class="topCell">Paul</td>
  <td class="topCell helpSession">Paul</td>
  <td class="topCell helpSession">Paul</td>
  <td class="topCell">Paul</td>
  <td class="topCell helpSession">Paul</td>
  </tr>
  <tr>
  <td class="middleCell">Joseph</td>
  <td class="middleCell">Jake</td>
  <td class="middleCell helpSession">Joseph</td>
  <td class="middleCell helpSession">Jake</td>
  <td class="middleCell"></td>
  <td class="middleCell helpSession">Brian</td>
  </tr>
  <tr>
  <td class="bottomCell"></td>
  <td class="bottomCell"></td>
  <td class="bottomCell helpSession"></td>
  <td class="bottomCell helpSession">Caleb</td>
  <td class="bottomCell"></td>
  <td class="bottomCell helpSession"></td>
  </tr>
  <tr>
  <th rowspan="2">1:00 PM</th>
  <td class="topCell">Paul</td>
  <td class="topCell">Joseph</td>
  <td class="topCell">Paul</td>
  <td class="topCell">Caleb</td>
  <td class="topCell">Caleb</td>
  <td class="topCell">Paul</td>
  </tr>
  <tr>
  <td class="bottomCell">Brian</td>
  <td class="bottomCell">Jake</td>
  <td class="bottomCell">Brian</td>
  <td class="bottomCell">Jake</td>
  <td class="bottomCell">Brian</td>
  <td class="bottomCell"></td>
  </tr>
  <tr>
  <th rowspan="2">2:00 PM</th>
  <td class="topCell">Brian</td>
  <td class="topCell">Brian</td>
  <td class="topCell">Brian</td>
  <td class="topCell">Brian</td>
  <td class="topCell">Brian</td>
  <td class="topCell"></td>
  </tr>
  <tr>
  <td class="bottomCell">Caleb</td>
  <td class="bottomCell">Joseph</td>
  <td class="bottomCell">Caleb</td>
  <td class="bottomCell">Caleb</td>
  <td class="bottomCell">Caleb</td>
  <td class="bottomCell"></td>
  </tr>
  <tr>
  <th rowspan="3">3:00 PM</th>
  <td class="topCell">Joseph</td>
  <td class="topCell helpSession">Joseph</td>
  <td class="topCell helpSession">Paul</td>
  <td class="topCell helpSession">Joseph</td>
  <td class="topCell helpSession">Joseph</td>
  <td class="topCell"></td>
  </tr>
  <tr>
  <td class="middleCell">Jake</td>
  <td class="middleCell helpSession">Brian</td>
  <td class="middleCell helpSession">Caleb</td>
  <td class="middleCell helpSession">Caleb</td>
  <td class="middleCell helpSession">Caleb</td>
  <td class="middleCell"></td>
  </tr>
  <tr>
  <td class="bottomCell"></td>
  <td class="bottomCell helpSession">Claire</td>
  <td class="bottomCell helpSession">Jake</td>
  <td class="bottomCell helpSession">Claire</td>
  <td class="bottomCell helpSession">Paul</td>
  <td class="bottomCell"></td>
  </tr>
  <tr>
  <th rowspan="4">4:00 PM</th>
  <td class="topCell helpSession">Joseph</td>
  <td class="topCell">Joseph</td>
  <td class="topCell">Kyle</td>
  <td class="topCell">Joseph</td>
  <td class="topCell">Joseph</td>
  <td class="topCell"></td>
  </tr>
  <tr>
  <td class="middleCell helpSession">Jake</td>
  <td class="middleCell"></td>
  <td class="middleCell">Caleb</td>
  <td class="middleCell">Caleb</td>
  <td class="middleCell">Caleb</td>
  <td class="middleCell"></td>
  </tr>
  <tr>
  <td class="middleCell helpSession"></td>
  <td class="middleCell"></td>
  <td class="middleCell">Paul</td>
  <td class="middleCell"></td>
  <td class="middleCell">Paul</td>
  <td class="middleCell"></td>
  </tr>
  <tr>
  <td class="bottomCell helpSession"></td>
  <td class="bottomCell"></td>
  <td class="bottomCell">Jake</td>
  <td class="bottomCell"></td>
  <td class="bottomCell"></td>
  <td class="bottomCell"></td>
  </tr>
  <tr>
  <th rowspan="3">5:00 PM</th>
  <td class="topCell">Claire</td>
  <td class="topCell">Joseph</td>
  <td class="topCell">Caleb</td>
  <td class="topCell closed"></td>
  <td class="topCell">Joseph</td>
  <td class="topCell"></td>
  </tr>
  <tr>
  <td class="middleCell">Jake</td>
  <td class="middleCell">Kyle</td>
  <td class="middleCell">Kyle</td>
  <td class="middleCell closed">TA Meeting</td>
  <td class="middleCell">Kyle</td>
  <td class="middleCell"></td>
  </tr>
  <tr>
  <td class="bottomCell"></td>
  <td class="bottomCell"></td>
  <td class="bottomCell">Jake</td>
  <td class="bottomCell closed"></td>
  <td class="bottomCell"></td>
  <td class="bottomCell"></td>
  </tr>
  <tr>
  <th rowspan="2">6:00 PM</th>
  <td class="topCell">Brian</td>
  <td class="topCell">Brian</td>
  <td class="topCell">Brian</td>
  <td class="topCell">Brian</td>
  <td class="topCell">Brian</td>
  <td class="topCell"></td>
  </tr>
  <tr>
  <td class="bottomCell"></td>
  <td class="bottomCell">Kyle</td>
  <td class="bottomCell">Caleb</td>
  <td class="bottomCell">Kyle</td>
  <td class="bottomCell">Kyle</td>
  <td class="bottomCell"></td>
  </tr>
  <tr>
  <th rowspan="2">7:00 PM</th>
  <td class="topCell"></td>
  <td class="topCell"></td>
  <td class="topCell">Brian</td>
  <td class="topCell"></td>
  <td class="topCell"></td>
  <td class="topCell"></td>
  </tr>
  <tr>
  <td class="bottomCell"></td>
  <td class="bottomCell"></td>
  <td class="bottomCell">Caleb</td>
  <td class="bottomCell"></td>
  <td class="bottomCell"></td>
  <td class="bottomCell"></td>
  </tr>
  <tr>
  <th rowspan="2">8:00 PM</th>
  <td class="topCell"></td>
  <td class="topCell"></td>
  <td class="topCell">Zach</td>
  <td class="topCell"></td>
  <td class="topCell"></td>
  <td class="topCell"></td>
  </tr>
  <tr>
  <td class="bottomCell"></td>
  <td class="bottomCell"></td>
  <td class="bottomCell">*Pass-off only*</td>
  <td class="bottomCell"></td>
  <td class="bottomCell"></td>
  <td class="bottomCell"></td>
  </tr>
  </table>

  </p>

  </div>

  <h1 class="sectionedit3" id="help-session-times">Help Session Times</h1>
  <div class="level1">

  <p>
  Help sessions will be held at the following times during the Fall 2017 semester:
  </p>
  <ul>
  <li class="level1"><div class="li">Monday 11:00 AM and 4:00 PM</div>
  </li>
  <li class="level0"><div class="li">Tuesday 10:00 AM and 3:00 PM</div>
  </li>
  <li class="level0"><div class="li">Wednesday 12:00 Noon and 3:00 PM</div>
  </li>
  <li class="level0"><div class="li">Thursday 10:00 AM, 12:00 Noon, and 3:00 PM</div>
  </li>
  <li class="level0"><div class="li">Friday 11:00 AM and 3:00 PM</div>
  </li>
  <li class="level0"><div class="li">Saturday 10:00 AM and 12:00 PM</div>
  </li>
  </ul>

  <p>
  If you would like to communicate with the TAs via email, please use <a href="mailto:&#x63;&#x73;&#x32;&#x33;&#x36;&#x74;&#x61;&#x40;&#x63;&#x73;&#x2e;&#x62;&#x79;&#x75;&#x2e;&#x65;&#x64;&#x75;" class="mail" title="&#x63;&#x73;&#x32;&#x33;&#x36;&#x74;&#x61;&#x40;&#x63;&#x73;&#x2e;&#x62;&#x79;&#x75;&#x2e;&#x65;&#x64;&#x75;">&#x63;&#x73;&#x32;&#x33;&#x36;&#x74;&#x61;&#x40;&#x63;&#x73;&#x2e;&#x62;&#x79;&#x75;&#x2e;&#x65;&#x64;&#x75;</a>.
  </p>

  </div>

  <h1 class="sectionedit4" id="discussion-sessions">Discussion Sessions</h1>
  <div class="level1">

  <p>
  Discussion sessions are meant to provide a forum for peer instruction where students exchange questions and answers. In general, a TA attends each session to moderate the discussion, but if the pass-off queue is exceptionally high, students are expected to moderate the discussion.
  </p>

  <p>
  In general, if there are no <b>specific questions</b> then the TA will have students gather in groups to review the current project specification, and discuss, as a group, any questions or concerns. If a group is unable to resolve any given question or concern related to the project, then it will be put forth to the entire room. The TA, if present, will facilitate the discussion.
  </p>

  <p>
  If there are <b>specific questions</b>, then those will be put forth to the entire room for peer instruction. The TA again is the moderator or facilitator in that discussion, and occasionally will provide clarification or direction if needed.
  </p>

  <p>
  <b>The discussion session is just a mechanism to gather students working on a common problem in one place to share what they have learned and what they are struggling to learn. It is not an additional lecture to augment the classroom experience. Think of it as a gathering of people all in the same situation, and the goal is for those folks to realize that they are all in the same situation and then improve that situation by working together.</b>
  </p>

  </div>
</div>`
});
