import Button from "@dnb/eufemia/components/Button";

export var tasks_level2 = [
  {
    id: 0,
    title: "Task 4",
    description: (
      <>
        <p className="dnb-p">FILL OUT</p>
        <br></br>
        <p className="dnb-p">
          <b>Where on the website?</b> <i>FILL OUT</i>
        </p>
        <p className="dnb-p">
          <b>Where is the code located?</b>{" "}
          <code className="dnb-code">FILL OUT</code> in{" "}
          <code className="dnb-code">FILL OUT</code>-folder
        </p>
      </>
    ),
    subtask: [
      {
        id: 0,
        name: "Part A",
        level: "MEDIUM",
        description: <p className="dnb-p">FILL OUT</p>,
        hint: <p className="dnb-p">FILL OUT</p>,
      },
    ],
  },
  {
    id: 1,
    title: "Task 5",
    description: (
      <>
        <p className="dnb-p">FILL OUT</p>
        <br></br>
        <p className="dnb-p">
          <b>Where on the website?</b> <i>FILL OUT</i>
        </p>
        <p className="dnb-p">
          <b>Where is the code located?</b>{" "}
          <code className="dnb-code">FILL OUT</code> in{" "}
          <code className="dnb-code">FILL OUT</code>-folder
        </p>
      </>
    ),
    subtask: [
      {
        id: 0,
        name: "Part A",
        level: "MEDIUM",
        description: <p className="dnb-p">FILL OUT</p>,
        hint: <p className="dnb-p">FILL OUT</p>,
      },
    ],
  },
  {
    id: 2,
    title: "Task 6",
    description: (
      <>
        <p className="dnb-p">the law says that you can request what companies have of data on you. This is called a subject access request (SAR) and it is part of your right to access your personal data under the General Data Protection Regulation (GDPR).</p>
        <br></br>
        <p className="dnb-p">
          <b>Where on the website?</b>  
          <i>GDPR</i> under{" "}
          <i>Employee page</i>
        </p>
        <p className="dnb-p">
          <b>Where is the code located?</b>{" "}
          <code className="dnb-code">GDPR.tsx</code> in{" "}
          <code className="dnb-code">Task6</code>-folder
        </p>
      </>
    ),
    subtask: [
      {
        id: 0,
        name: "Part A",
        level: "EASY",
        description: <p className="dnb-p">In this part, we will start by coding the button, so the user later on can request for their data from DNB. </p>,
        hint: 
        <p className="dnb-p">
          Buttons are created by coding: 
          <br />
            <code className="dnb-code">&lt;Button <br />
              text="Get GDPR data"<br />
              title="Get GDPR Data"<br />
              variant="secondary"<br />
              icon="chevron_right"<br />
              size="default"<br />
              right
            <br />/&gt;</code>
          <br />
          <br />The resoult should be looking somthing like this:<br />
            <Button
              text="Apply" 
              title="apply"
              variant="secondary"
              icon="chevron_right"
              size="default"
              right
            />
          <br />Feel free to put your personal touch with the design of button.
        </p>,
      },
      {
        id: 0,
        name: "Part B",
        level: "MEDIUM",
        description: <p className="dnb-p">FILL OUT</p>,
        hint: <p className="dnb-p">FILL OUT</p>,
      },
    ],
  },
  {
    id: 3,
    title: "Task 7",
    description: (
      <>
        <p className="dnb-p">FILL OUT</p>
        <br></br>
        <p className="dnb-p">
          <b>Where on the website?</b> <i>FILL OUT</i>
        </p>
        <p className="dnb-p">
          <b>Where is the code located?</b>{" "}
          <code className="dnb-code">FILL OUT</code> in{" "}
          <code className="dnb-code">FILL OUT</code>-folder
        </p>
      </>
    ),
    subtask: [
      {
        id: 0,
        name: "Part A",
        level: "MEDIUM",
        description: <p className="dnb-p">FILL OUT</p>,
        hint: <p className="dnb-p">FILL OUT</p>,
      },
    ],
  },
];
