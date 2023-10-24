import {
  Dialog,
  Drawer,
  FormRow,
  FormStatus,
  Input,
  P,
  Tabs,
} from "@dnb/eufemia";
import React, { ReactNode, useEffect } from "react";
import Progress from "./Progress";
import TaskTab from "./TaskTab";
import "./styles.css";
import { tasks_level1 } from "./tasks_level1";
import { tasks_level2 } from "./tasks_level2";

export interface TaskNavigatorProps {
  progressValue: number;
  setProgressValue: Function;
  currentTabLevel1: number;
  setCurrentTabLevel1: Function;
  checkedTasksLevel1: boolean[];
  setCheckedTasksLevel1: Function;
  currentTabLevel2: number;
  setCurrentTabLevel2: Function;
  checkedTasksLevel2: boolean[];
  setCheckedTasksLevel2: Function;
}

export interface Task {
  id: number;
  title: String;
  description: ReactNode;
  subtask: {
    id: number;
    name: string;
    level: string;
    description: ReactNode;
    hint: ReactNode;
  }[];
}

export default function TaskNavigator(props: TaskNavigatorProps) {
  const {
    progressValue,
    setProgressValue,
    currentTabLevel1,
    setCurrentTabLevel1,
    checkedTasksLevel1,
    setCheckedTasksLevel1,
    currentTabLevel2,
    setCurrentTabLevel2,
    checkedTasksLevel2,
    setCheckedTasksLevel2,
  } = props;

  const [inputText, setInputText] = React.useState("");
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    setProgressValue(
      ((checkedTasksLevel1.filter((x) => x == true).length +
        checkedTasksLevel2.filter((x) => x == true).length) *
        100) /
        (checkedTasksLevel1.length + checkedTasksLevel2.length)
    );
  }, [checkedTasksLevel1, checkedTasksLevel2]);

  return (
    <Drawer
      title="Tasks"
      space
      triggerAttributes={{ text: "Tasks", variant: "secondary" }}
    >
      <Drawer.Header>
        <FormStatus state="info">
          <p className="dnb-p">
            All files needed for the tasks are located in the{" "}
            <code className="dnb-code">src/code</code>folder
          </p>
        </FormStatus>

        <Progress progressValue={progressValue} />

        <Tabs
          id="task-navigator"
          data={[
            {
              title: "Level 1",
              key: "level_1",
            },
            {
              title: "Level 2",
              key: "level_2",
            },
          ]}
        />
      </Drawer.Header>
      <Drawer.Body>
        <Tabs.Content id="task-navigator">
          {({ key }) => {
            if (key == "level_1") {
              return (
                <>
                  <FormRow vertical>
                    <Input
                      label="Report the suspicious person here:"
                      type="text"
                      onChange={handleInputText}
                      value={inputText}
                      placeholder="Name of person"
                      stretch
                      style={{ minWidth: "200px" }}
                      suffix={
                        <Dialog
                          triggerAttributes={{
                            text: "Report",
                          }}
                          title={
                            inputText.toLowerCase().split(" ").join("") ===
                            "sindrefinnes"
                              ? "Congratulations!"
                              : "Oooops... try again!"
                          }
                        >
                          {inputText.toLowerCase().split(" ").join("") ===
                          "sindrefinnes" ? (
                            <P>
                              You solved the case and reported the correct person
                              to the police.
                              <br />
                              <br />
                              It was Sindre Finnes who transferred money 
                              to the Evil corporation!
                              <br />
                              <br />
                              Luckily for us, you were able to use technology to
                              effectivly track him down so he can be investigated by the police!
                            </P>
                          ) : (
                            <P>
                              Looks like you have not submitted the correct
                              name.
                              <br />
                              <br />
                              Go back and look through the transactions again to
                              find a suspicious transaction.
                            </P>
                          )}
                        </Dialog>
                      }
                    />
                  </FormRow>
                  <TaskTab
                    currentTab={currentTabLevel1}
                    setCurrentTab={setCurrentTabLevel1}
                    checkedTasks={checkedTasksLevel1}
                    setCheckedTasks={setCheckedTasksLevel1}
                    checkedTaskString="checkedTasksLevel1"
                    currentTaskString="currentTaskTabLevel1"
                    tabId="tasks-level1-tab"
                    tasks={tasks_level1}
                  />
                </>
              );
            }
            if (key == "level_2") {
              return (
                <TaskTab
                  currentTab={currentTabLevel2}
                  setCurrentTab={setCurrentTabLevel2}
                  checkedTasks={checkedTasksLevel2}
                  setCheckedTasks={setCheckedTasksLevel2}
                  checkedTaskString="checkedTasksLevel2"
                  currentTaskString="currentTaskTabLevel2"
                  tabId="tasks-level2-tab"
                  tasks={tasks_level2}
                />
              );
            }
          }}
        </Tabs.Content>
      </Drawer.Body>
    </Drawer>
  );
}
