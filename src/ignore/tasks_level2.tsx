import { Anchor, FormStatus, Tooltip } from "@dnb/eufemia";

export var tasks_level2 = [
  {
    id: 0,
    title: "Task 4",
    description: (
      <>
        Customer service in DNB work long hours to help our customers the best
        they can. When customers suspect fraud, they call us in the hope to find
        out what has happened, and to block the cards linked to the account. To
        be able to do this, customer service has to see all the cards of a
        customer.
        <br />
        <br />
        In this assignment, you will be creating such a page where the customer
        service in DNB can see all the cards of a customer, and block the ones
        linked to the account where suspicious transactions were found.
        <br />
        <br />
        <b>Where on the website?</b> <i>Customer's Cards</i> under{" "}
        <i>Employee page</i>
        <br />
        <b>Where is the code located?</b>{" "}
        <code className="dnb-code">CardOverview.tsx</code> in{" "}
        <code className="dnb-code">Task4</code>-folder
        <FormStatus top state="info" variant="outlined" stretch={true}>
          If you want help, we have a suggested solution in the
          <code className="dnb-code">Task4/SuggestedSolution</code>-folder you
          can look at.
        </FormStatus>
      </>
    ),
    subtask: [
      {
        id: 0,
        name: "Part A",
        level: "MEDIUM",
        description: (
          <>
            A webpage in our fictional bank consists of multiple{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/"
              target="_blank"
            >
              Eufemia components
            </Anchor>
            . One component can for instance be the title page (
            <Anchor
              href="https://eufemia.dnb.no/uilib/elements/heading/#the-most-basic-use-of-headings"
              target="_blank"
            >
              H1
            </Anchor>
            ) and another can be a paragraph (
            <Anchor
              href="https://eufemia.dnb.no/uilib/elements/paragraph/"
              target="_blank"
            >
              P
            </Anchor>
            ). <br />
            In the file <code className="dnb-code">CardOverview.tsx</code> you
            can see we use three different components:
            <ul>
              <li>
                <Anchor
                  href="https://eufemia.dnb.no/uilib/components/section/"
                  target="_blank"
                >
                  Section
                </Anchor>
                , which is used to get correct styling
              </li>
              <li>
                <Anchor
                  href="https://eufemia.dnb.no/uilib/elements/heading/#the-most-basic-use-of-headings"
                  target="_blank"
                >
                  H1
                </Anchor>
                , used to create the title
              </li>
              <li>
                <Anchor
                  href="https://eufemia.dnb.no/uilib/elements/paragraph/"
                  target="_blank"
                >
                  P
                </Anchor>
                , used to create a paragraph with explanatory text.
              </li>
            </ul>
            As you see, the page does not have any cards yet. You can start of
            by adding one card to the page. <br />
            Add the Eufemia component{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/payment-card/"
              target="_blank"
            >
              PaymentCard
            </Anchor>{" "}
            below the <code className="dnb-code">&lt;P&gt;</code> component, but
            still inside the <code className="dnb-code">&lt;Section&gt;</code>{" "}
            component.
            <FormStatus top state="info" variant="outlined" stretch={true}>
              Remember that when you create a component like so{" "}
              <code className="dnb-code">&lt;P&gt;</code> you also need to{" "}
              <i>close</i> that component with{" "}
              <code className="dnb-code">&lt;/P&gt;</code>
              <br />
              You can also write it in shortform like this:{" "}
              <code className="dnb-code">&lt;P /&gt;</code>
            </FormStatus>
          </>
        ),
        hint: (
          <>
            When you create the component{" "}
            <code className="dnb-code">&lt;PaymentCard&gt;</code> you need to
            send properties to it like so: <br />
            <code className="dnb-code">
              &lt;PaymentCard dummy_property="dummy_value"&gt;
            </code>
            <br />
            Properties are values that the component needs, that you send with
            it when you create it. <code className="dnb-code">
              PaymentCard
            </code>{" "}
            has two required properties{" "}
            <code className="dnb-code">product_code</code> and{" "}
            <code className="dnb-code">card_number</code> that you need to send
            to it when you create it. It also has numerous optional properties .
            See the full list of available properties here:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/payment-card/properties/"
              target="_blank"
            >
              PaymentCard's Properties
            </Anchor>
            <br />
            <br />
            You can adjust the spacing by using{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/layout/space/demos/"
              target="_blank"
            >
              Space
            </Anchor>
          </>
        ),
      },
      {
        id: 1,
        name: "Part B",
        level: "EASY",
        description: (
          <>
            Add two more <code className="dnb-code">PaymentCard</code>'s and
            play around with the different card types available:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/payment-card/products/"
              target="_blank"
            >
              Different card products
            </Anchor>
            .
            <br />
            <br />
            Add spacing between the cards by adding a{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/layout/space/demos/"
              target="_blank"
            >
              &lt;Space top bottom/&gt;
            </Anchor>{" "}
            between them.
            <br />
            <br />
            Play around with the different{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/payment-card/properties/"
              target="_blank"
            >
              PaymentCard's Properties
            </Anchor>{" "}
            to customize the cards the way you want.
            <br />
            <br />
            You can try to make the payment cards look similar to this:{" "}
            <Anchor href="/reference_image_card_overview" target="_blank">
              Reference image for <i>Customer's Cards</i> page
            </Anchor>.
          </>
        ),
      },
      {
        id: 2,
        name: "Part C",
        level: "MEDIUM",
        description: (
          <>
            Now that you have the different cards, you want to add a button so
            that you can block the cards that are linked to the account with
            suspicious transactions.
            <br />
            <br />
            Add a{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/switch/"
              target="_blank"
            >
              Switch
            </Anchor>{" "}
            with <code className="dnb-code">label="Block card"</code> to the
            right side of each card you have added.
            <br />
            <br />
            To be able to place the button on the right side of the card you
            need to wrap the <code className="dnb-code">
              PaymentCard
            </code> and <code className="dnb-code">Switch</code> inside a{" "}
            <code className="dnb-code">&lt;FlexContainer &gt;</code> (
            <Anchor
              href="https://eufemia.dnb.no/uilib/layout/flex/container/demos/#horizontal-fieldstring"
              target="_blank"
            >
              FlexContainer
            </Anchor>
            )
            <FormStatus
              top
              stretch={true}
              text="Note that FlexContainer is FlexContainer NOT Flex.Container. This is wrong in the documentation"
              state="warn"
              variant="outlined"
            />
          </>
        ),
        hint: (
          <>
            You can play around with the different{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/layout/flex/container/properties/"
              target="_blank"
            >
              properties of FlexContainer
            </Anchor>{" "}
            to place the components where you want. For example you can use{" "}
            <code className="dnb-code">align=&#123;center&#125;</code> to center
            the content.
          </>
        ),
      },
      {
        id: 3,
        name: "Part D",
        level: "HARD",
        description: (
          <>
            As you may have noticed, the button does not actually change
            anything. For this we need to implement some logic to the button, so
            that when the button is pressed it will change the
            <code className="dnb-code">card_status</code> of the card to{" "}
            <i>blocked</i>.
            <br />
            <br />
            Let us start with the card at the top, and implement logic to the
            button next to it. <br />
            You need to do two things for this to work:
            <ol>
              <li>
                Use a state in{" "}
                <code className="dnb-code">&lt;PaymentCard&gt;</code>
              </li>
              <li>
                Change the state in{" "}
                <code className="dnb-code">&lt;Switch&gt;</code>
              </li>
            </ol>
            In order for one component to be able to change something in another
            component we need to use a state that both of them can use and
            change. A state is created by calling{" "}
            <Anchor
              href="https://www.w3schools.com/react/react_usestate.asp"
              target="_blank"
            >
              React's useState
            </Anchor>{" "}
            which you can see we have done three times on line 12, 13 and 14 in{" "}
            <code className="dnb-code">CardOverview.tsx</code>.
            <br />
            <br />
            First, we need to use the state (ref. nr. 1 above). This is done
            setting the property <code className="dnb-code">
              card_status
            </code>{" "}
            in <code className="dnb-code">PaymentCard</code> to the state. Let
            us use the first state for the first card. <br />
            <br /> Second (ref. nr. 2 above), we need to change this state when
            the button is pressed. This is done by using the{" "}
            <code className="dnb-code">on_change</code> property in{" "}
            <code className="dnb-code">Switch</code>. Use the function to set
            the state to a new value, which in our case would be{" "}
            <code className="dnb-code">"blocked"</code>. See the documentation
            for how to do this:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/switch/demos/#checked-switch"
              target="_blank"
            >
              example of on_change in Switch
            </Anchor>
            <br />
            <br />
            Remember to also change back the state to{" "}
            <code className="dnb-code">"active"</code> when the user presses the
            button again.
            <br />
            <br />
            Add functionality for the other cards as well.
          </>
        ),
        hint: (
          <>
            In order to make the button switch the card status between{" "}
            <code className="dnb-code">"active"</code> and{" "}
            <code className="dnb-code">"blocked"</code> you need to write and{" "}
            <code className="dnb-code">if</code> statement in the{" "}
            <code className="dnb-code">on_change</code> and check if the card is{" "}
            <code className="dnb-code">checked</code> or not. If it is checked,
            set the card status to <code className="dnb-code">"blocked"</code>,
            else set it to <code className="dnb-code">"active"</code>. Remember
            to use the variable{" "}
            <code className="dnb-code">&#123;card&#125;</code> to access the
            state value.
          </>
        ),
      },
    ],
  },
  {
    id: 1,
    title: "Task 5",
    description: (
      <>
        This task covers algorithms. If you click on one of the accounts in{" "}
        <i>Customer Page</i>, the table shows a list of transactions that can be
        sorted. <br />
        <br />
        Currently, clicking on the <i>sort by</i> dropdown does nothing to the
        table. We want to replace this with a sorting algorithm called{" "}
        <b>Bubble sort</b>.
        <br />
        Bubble sort works as follows: imagine you have a row of people of
        different ages, and you want to arrange them in order from youngest to
        oldest.
        <ol>
          <li>Start at one end of the row and look at two people at a time.</li>
          <li>
            If the person on the left is older than the person on the right,
            swap their positions.
          </li>
          <li>Keep doing this for every pair of adjacent people in the row.</li>
          <li>
            Go through the row again and again until you don't need to swap any
            more people, which means they are now sorted by age.
          </li>
        </ol>
        To get a better understanding of the algorithm watch{" "}
        <Anchor
          href="https://youtu.be/Iv3vgjM8Pv4?feature=shared&t=52"
          target="_blank"
        >
          this video (or search youtube for Bubble sort with Hungarian, folk
          dance)
        </Anchor>
        .<br />
        <br />
        <b>Where on the website?</b> Click on one of the accounts in{" "}
        <i>Customer page</i>
        <br />
        <b>Where is the code located?</b>{" "}
        <code className="dnb-code">SortingAlgorithm.tsx</code> in the
        <code className="dnb-code">Task5</code>-folder
      </>
    ),
    subtask: [
      {
        id: 4,
        name: "Part A",
        level: "PROFESSIONAL",
        description: (
          <>
            In <code className="dnb-code">SortingAlgorithm.tsx</code>, implement
            the Bubble sort algorithm using the comments in the code as a guide.
            Look at the example implemented in
            <Anchor
              href="https://blog.exploringserverless.com/sorting-algorithms-implemented-in-typescript"
              target="_blank"
            >
              {" "}
              this example
            </Anchor>{" "}
            for further guidance on Bubble sort.
          </>
        ),
        hint: (
          <>
            To access an item in a list at a certain index write{" "}
            <code className="dnb-code">var item = list[index]</code>.
          </>
        ),
      },
      {
        id: 5,
        name: "Part B",
        level: "HARD",
        description: (
          <>
            Now that we have implemented a sorting algorithm which hopefully
            works, we can use it in our webpage. In the file{" "}
            <code className="dnb-code">AccountPage.tsx</code>, we outline how
            the account page will look. On line 67, we see the list of
            transactions. To sort this list with Bubble Sort, use the function{" "}
            <code className="dnb-code">BubbleSort()</code> with the parameters{" "}
            <code className="dnb-code">transactionList</code>
            and <code className="dnb-code">category</code> which we are sorting.{" "}
          </>
        ),
        hint: (
          <>
            Make use of the Bubble Sort algorithm you implemented in the
            TransactionTableForAccounts.
          </>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Task 6",
    description: (
      <>
        Until now we haven't considered where the data in the online bank comes
        from. In this task you will work with the{" "}
        <Tooltip targetElement={<a className="tooltip">database</a>}>
          An organised collection of structured information, or data, typically
          stored electronically in a computer system.
        </Tooltip>{" "}
        which contains the data that is exposed on the web page.
        <br />
        <br />
        Inside the
        <code className="dnb-code">data</code> folder holds several files that
        contain data for our online bank. These files act like the database in
        our system. In these files you can, for instance, see the list of
        accounts and their associated transactions on the <i>Customer page</i>.
        Try to identify these three parts in the code:
        <ul>
          <li>
            The file
            <code className="dnb-code">CustomerModel.tsx</code> under{" "}
            <code className="dnb-code">data</code> contains the data models
            related to the customers. This is not data, but a definition of how
            the data we will have should be structured in the database.
          </li>
          <li>
            The file <code className="dnb-code">customer.tsx</code> under{" "}
            <code className="dnb-code">data</code> contains the actual data. You
            see that it is structured according to the data models, where each
            customer has a name and a list of accounts.
          </li>
          <li>
            The <i>Accounts</i> table on the <i>Customer page</i>, found in{" "}
            <code className="dnb-code">AccountTable.tsx</code> in the{" "}
            <code className="dnb-code">Extra</code> folder, exposes some of the
            data in these files.
          </li>
        </ul>
        These three aspects of data storage and visualisation will be used to
        complete the parts of this task.
        <br />
        <br />
        <b>Where on the website?</b> <i>Customer page</i>
        <br />
        <b>Where is the code located? </b> Files listed above
      </>
    ),
    subtask: [
      {
        id: 6,
        name: "Part A",
        level: "EASY",
        description: (
          <>
            Add another account for the customer in the bank. The new account
            should be on the same format as the others and should have at least
            two transactions. The new account can for instance be <i>BSU 2</i>.
            <br />
            <br />
            Make sure the new account is displayed in the table when you are
            finished and pay attention to the accounts' and transactions' ID's.
          </>
        ),
        hint: (
          <>
            After the closing tag for the{" "}
            <code className="dnb-code">id: 3</code> account named <i>BSU</i>,
            add a similar object with the same structure and new data. This
            account follows the Account model that is already defined. The new
            data will be listed in the table automatically because the current
            code lists all the customer's accounts.
          </>
        ),
      },
      {
        id: 7,
        name: "Part B",
        level: "HARD",
        description: (
          <>
            Oh no, the product owner in PM has a new requirement for the online
            bank. She wants to display the owner of each account on the web
            page, along with the account name, number and balance that is
            already there.
            <br />
            <br />
            At this point, the owner is not even included in the database model,
            so displaying it in the table is not possible. Therefore, you have
            to make changes in all the three logical steps listed above. That
            means:
            <ul>
              <li>Adding owner as a field in the data model for an account</li>
              <li>Adding actual data in the database file</li>
              <li>
                Adding code for displaying the data in the frontend table so the
                customer can see it
              </li>
            </ul>
            Complete the three steps and choose yourself who is the owner of
            each account - the customer themself, a partner, or a parent for
            instance.
          </>
        ),
        hint: (
          <>
            Code needs to be added in three different files:{" "}
            <code className="dnb-code">CustomerModel.tsx</code>,{" "}
            <code className="dnb-code">customer.tsx</code> and{" "}
            <code className="dnb-code">AccountTable.tsx</code>. Look at the
            other data fields displayed in the table, like the account number,
            and implement similar logic for an account owner inn all three
            files.
          </>
        ),
      },
      {
        id: 8,
        name: "Part C",
        level: "PROFESSIONAL",
        description: (
          <>
            Now the product owner wants to launch a new feature; a customer
            should be able to see all the funds they own in the online bank. The
            funds should be listed in a new table under the accounts table in a
            similar design (or another if you want).
            <br />
            <br />
            The data model is not defined yet and it is up to you to design and
            implement it. Think about what info about the fund that is
            interesting to see for the customer, like fund name and value
            addition for example.
            <br />
            <br />
            Create a new <code className="dnb-code">.tsx</code>
            (Typescript)-file in the
            <code className="dnb-code">data</code> folder that will contain the
            list of the customer's funds, structured according to your data
            model.
            <br />
            <br />
            Complete the three steps and verify your changes in the frontend
            table you have created. Pay attention to the imports at the top of
            the file, and to how the account data is imported, to make sure you
            get the new data in the table.
          </>
        ),
        hint: (
          <>
            First, create a model for Fund that holds the information you think
            is needed. Then add the data with the same structure in the new
            database file you created. Lastly, copy the{" "}
            <code className="dnb-code">Provider</code> element in the{" "}
            <code className="dnb-code">AccountTable</code> and change it
            according to your funds data structure.
          </>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "Task 7",
    description: (
      <>
        Hopefully you have got an insight in how it is to be a software engineer
        now, and you would like to apply for a job as a developer in DNB!
        <br />
        <br />
        To be able to apply for a job, you first need to create a new page and
        create an application form. To create the page, you will use{" "}
        <Anchor href="https://eufemia.dnb.no/uilib/components/" target="_blank">
          Eufemia components
        </Anchor>{" "}
        and add functionality to them.
        <br />
        <br />
        This task is built up of two reference images, and you may try to
        recreate them. But feel free to create your own design and
        functionality.
        <br />
        <br />
        <b>Where on the website?</b> A new page you will create that's called{" "}
        <i>Apply for a job</i> <br />
        <b>Where is the code located?</b>{" "}
        <code className="dnb-code">App.tsx</code> in the{" "}
        <code className="dnb-code">code</code>-folder and the files in the
        <code className="dnb-code">Task7</code>-folder
        <FormStatus top state="info" variant="outlined" stretch={true}>
          If you want help we have a suggested solution in the
          <code className="dnb-code">Task7/SuggestedSolution</code>-folder you
          can look at.
        </FormStatus>
      </>
    ),
    subtask: [
      {
        id: 9,
        name: "Part A",
        level: "EASY",
        description: (
          <>
            First you need to create a new tab after the <i>Employee page</i>.
            Go to the file <code className="dnb-code">App.tsx</code> in the{" "}
            <code className="dnb-code">code</code>-folder. Then find the{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/tabs/"
              target="_blank"
            >
              Tabs
            </Anchor>
            -element on line 100. Under <code className="dnb-code">data</code>{" "}
            on line 108 you can see we have three different elements, each
            representing one tab.
            <br />
            You need to add a fourth element here, where the title is{" "}
            <b>Apply for a job</b> and the key is{" "}
            <code className="dnb-code">new_tab</code>.
            <br />
            <br />
            To also add content to the tab you need to add a new{" "}
            <code className="dnb-code">else if</code> check in the{" "}
            <code className="dnb-code">Tabs.Content</code> section (on approx.
            line 150) where you check against the key{" "}
            <code className="dnb-code">new_tab</code>. The page to return is{" "}
            <code className="dnb-code">&lt;Application /&gt;</code>
          </>
        ),
        hint: (
          <>
            You need to add a new <code className="dnb-code">else if</code>{" "}
            clause that checks for the key that the new tab has. Then you need
            to return a new page similar to what has been done to the other
            pages right above.
          </>
        ),
      },
      {
        id: 10,
        name: "Part B",
        level: "HARD",
        description: (
          <>
            Now that we have the tab where the application form will be, you
            will need to add the UI components that make up the form. The
            application form you will make can look like this:{" "}
            <Anchor href="/reference_image_application" target="_blank">
              Reference image for application form
            </Anchor>
            .
            <br />
            <br />
            Go to the file <code className="dnb-code">Application.tsx</code> in
            the <code className="dnb-code">Task7</code>-folder. This file has
            some skelton code now to get you started. You will fill this file
            with code to create the application form. To do this you will use
            numerous Eufemia components. Please feel free to try other
            components as well, do not feel restricted to use only the ones we
            suggest here:
            <br />
            Text elements:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/elements/heading/#heading-styles-in-react"
              target="_blank"
            >
              H1 and H2
            </Anchor>{" "}
            and {""}
            <Anchor
              href="https://eufemia.dnb.no/uilib/elements/paragraph/#paragraphs-in-react"
              target="_blank"
            >
              P
            </Anchor>
            <br />
            Card to split up content:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/card/"
              target="_blank"
            >
              Card
            </Anchor>
            <br />
            Heading inside cards:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/forms/extended-features/Form/SubHeading/"
              target="_blank"
            >
              Form.Subheading
            </Anchor>{" "}
            <br />
            To create input fields inside cards{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/forms/base-fields/String/"
              target="_blank"
            >
              Field.String
            </Anchor>{" "}
            and{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/upload/"
              target="_blank"
            >
              Upload
            </Anchor>
            <br />
            Button to send application:{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/forms/extended-features/Form/SubmitButton/"
              target="_blank"
            >
              Form.SubmitButton
            </Anchor>
          </>
        ),
        hint: (
          <>
            This is a quite open task where you are supposed to use different UI
            components. Try to use the ones listed in the assignment and use the
            documentation actively to see the possibility in each component and
            what customisation you can do.
            <br />
            For insance, the{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/forms/base-fields/String/"
              target="_blank"
            >
              Field.String
            </Anchor>{" "}
            has many different <i>properties</i> you can use to make the text
            fields in the <b>"Personal details"</b> card different from the text
            field in the <b>"Why should we choose you?"</b> card.
          </>
        ),
      },
      {
        id: 11,
        name: "Part C",
        level: "PROFESSIONAL",
        description: (
          <>
            Now that we have the form, we need to store the user input
            somewhere. To do this we will use{" "}
            <Anchor
              href="https://www.w3schools.com/react/react_usestate.asp"
              target="_blank"
            >
              React's useState
            </Anchor>{" "}
            which enables us to store the values that the user fills into the
            form. Look at the documentation and create 3 states, one for each
            text field in the form:
            <ul>
              <li>firstName</li>
              <li>lastName</li>
              <li>motivationLetter</li>
            </ul>
            Then you need to assign the values from the fields to the different
            states. This is done by using{" "}
            <code className="dnb-code">onChange</code> in the{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/extensions/forms/base-fields/String/"
              target="_blank"
            >
              Field.String
            </Anchor>{" "}
            and setting the value to the different states.
            <br />
            <br />
            For storing the files that is uploaded to{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/upload/"
              target="_blank"
            >
              Upload
            </Anchor>{" "}
            you need to use the{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/upload/demos/#useupload-react-hook"
              target="_blank"
            >
              Upload.useUpload
            </Anchor>
            .
          </>
        ),
        hint: (
          <>
            Each <code className="dnb-code">Field.String</code> component that
            you added should include a{" "}
            <code className="dnb-code">onChange</code> where you inside set the
            value to the correct state.
            <br />
            <br />
            For storing the files you need to use the{" "}
            <code className="dnb-code">Upload.useUpload("id")</code>. Make sure
            the id you use here is the same as the id you use when creating the{" "}
            <code className="dnb-code">Upload</code> component.
          </>
        ),
      },
      {
        id: 12,
        name: "Part D",
        level: "PROFESSIONAL",
        description: (
          <>
            We want to be redirected to a new page when we click the{" "}
            <b>Check application</b> button at the bottom (see{" "}
            <Anchor href="/reference_image_application" target="_blank">
              Reference image for application form
            </Anchor>
            ).
            <br />
            To do this we need to add <code className="dnb-code">
              onClick
            </code>{" "}
            on the <b>Check Application</b> button where we set the state{" "}
            <code className="dnb-code">submittedApplication</code> to{" "}
            <code className="dnb-code">true</code> that will then show a new
            page (the <code className="dnb-code">ApplicationResult</code> page)
            where we get a summary of the application.
          </>
        ),
        hint: (
          <>
            You need to call the{" "}
            <code className="dnb-code">setSubmittedApplication</code> to{" "}
            <code className="dnb-code">true</code> inside of the{" "}
            <code className="dnb-code">onClick</code> in the{" "}
            <code className="dnb-code">Form.SubmitButton</code> component.
            <br />
            <br />
            Also ensure that you switch out all the{" "}
            <code className="dnb-code">undefined</code> values when
            <code className="dnb-code">ApplicationResult</code> is called in <code className="dnb-code">Application.tsx</code> to the
            actual values.
          </>
        ),
      },
      {
        id: 13,
        name: "Part E",
        level: "HARD",
        description: (
          <>
            Now we need to create the{" "}
            <code className="dnb-code">ApplicationResult.tsx</code> page. This
            you can use as a reference picture:{" "}
            <Anchor href="/reference_image_application_result" target="_blank">
              Reference image for application summary
            </Anchor>
            .
            <br />
            To create this page, you can use some layout components to make it
            look similar to the reference image:
            <br />
            <Anchor
              href="https://eufemia.dnb.no/uilib/layout/flex/container/"
              target="_blank"
            >
              FlexContainer
            </Anchor>{" "}
            and{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/layout/flex/item/"
              target="_blank"
            >
              FlexItem
            </Anchor>
            <FormStatus
              top
              stretch={true}
              text="Note that FlexContainer is FlexContainer NOT Flex.Container, and FlexItem is FlexItem NOT Flex.Item. It is wrong in the documentation"
              state="warn"
              variant="outlined"
            />
            Use the input values to fill the content of this page.
          </>
        ),
        hint: (
          <>
            Be sure to send with the values from the application form when you
            call <code className="dnb-code">ApplicationResult</code> in{" "}
            <code className="dnb-code">Application.tsx</code> so that you can
            use those values.
            <br />
            <br />
            To create a layout similar to the{" "}
            <Anchor href="/reference_image_application_result" target="_blank">
              Reference image for application summary
            </Anchor>
            , you can adjust the <code className="dnb-code">size</code> of the{" "}
            <code className="dnb-code">FlexItem</code>. One row on a page
            consist of 12 units, which means that if the size of one{" "}
            <code className="dnb-code">FlexItem</code> is 2 like so:{" "}
            <code className="dnb-code">
              &lt;FlexItem size=&#123;2&#125;&gt;
            </code>{" "}
            and another one is 12 like so:
            <code className="dnb-code">
              &lt;FlexItem size=&#123;12&#125;&gt;
            </code>{" "}
            they will make up one row on the page.
            <br />
            <br />
          </>
        ),
      },
      {
        id: 14,
        name: "Part F",
        level: "PROFESSIONAL",
        description: (
          <>
            Add the two buttons on the bottom of the application summary page,
            see{" "}
            <Anchor href="/reference_image_application_result" target="_blank">
              Reference image for application summary
            </Anchor>
            .
            <br />
            Use the{" "}
            <Anchor href="primary" target="_blank">
              Button
            </Anchor>{" "}
            component and create one secondary button (<b>Back</b>) and one
            primary button (<b>Send application to DNB</b>).
            <br />
            The <b>Back</b> button should return to the previous page (the
            application form page) when pressed, and the{" "}
            <b>Send application to DNB</b> button should aslo return to the
            previous page when pressed as well as reset all the input fields.
          </>
        ),
        hint: (
          <>
            To be able to return back to the previous page (the application form
            page) you need to set the state{" "}
            <code className="dnb-code">submittedApplication</code> to{" "}
            <code className="dnb-code">false</code>.
            <br />
            <br />
            To reset all the input fields, you need to set all the states you
            created in Part C to <code className="dnb-code">undefined</code> for
            the text fields and <code className="dnb-code">[]</code> for the
            file state.
          </>
        ),
      },
      {
        id: 15,
        name: "Part G",
        level: "MEDIUM",
        description: (
          <>
            To make the application form more secure towards wrong usage, we
            need to check if the user has actually filled in all the text
            fields. To do this we can have a check before setting the{" "}
            <code className="dnb-code">submittedApplication</code> in{" "}
            <code className="dnb-code">Application.tsx</code> to{" "}
            <code className="dnb-code">true</code> where we check that all the
            states (<code className="dnb-code">firstName</code>,{" "}
            <code className="dnb-code">lastName</code> and{" "}
            <code className="dnb-code">motivationLetter</code>) has values in
            them. If not, give the user an error message (for this you can for
            instance use{" "}
            <Anchor
              href="https://eufemia.dnb.no/uilib/components/form-status/#formstatus-displaying-error-status"
              target="_blank"
            >
              FormStatus
            </Anchor>
            ).
          </>
        ),
        hint: (
          <>
            In <code className="dnb-code">onClick</code> in the submit button
            check first if all the user input is not{" "}
            <code className="dnb-code">undefined</code>. If they are, display an
            error message.
            <br />
            <br />
            It can be easier here to add a function{" "}
            <code className="dnb-code">isUserInputNull</code> that checks every
            state if it is <code className="dnb-code">undefined</code> or not,
            and then call this function inside of{" "}
            <code className="dnb-code">onClick</code>.
            <br />
            <br />
            Remember that <code className="dnb-code">||</code> is <i>or</i>.
          </>
        ),
      },
    ],
  },
];
