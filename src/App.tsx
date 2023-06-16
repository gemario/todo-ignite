import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { PlusCircle } from "phosphor-react";
import Clipboard from "./assets/clipboard.svg";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./App.module.css";

import "./global.css";
import { ITask } from "./Interfaces";

export function App() {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  function handleCreateNewTask(): void {
    if (task === "") {
      toast.error("Digite uma tarefa!");
    } else {
      const idRandom = (num: number) => Math.floor(Math.random() * num);
      const newTask: ITask = {
        id: idRandom(999999999999),
        content: task,
        isCompleted: false,
      };

      setTodoList([...todoList, newTask]);

      toast.success("Tarefa criada com sucesso!");
    }
    setTask("");
  }

  function deleteTask(taskId: number): void {
    setTodoList(todoList.filter((taskItem) => taskItem.id !== taskId));
  }

  const handleTaskCompleted = (taskId: number) => {
    const updatedTodoList = todoList.map((taskItem) => {
      if (taskItem.id === taskId) {
        return { ...taskItem, isCompleted: true };
      }
      return taskItem;
    });
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <ToastContainer autoClose={2500} pauseOnHover={false} theme="light" />
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.newTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            required
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
          <button type="submit" onClick={handleCreateNewTask}>
            Criar
            <PlusCircle />
          </button>
        </div>
        <div className={styles.tasks}>
          <div className={styles.tasksInfo}>
            <div className={styles.tasksCreated}>
              <strong>Tarefas criadas</strong>
              <span>{todoList.length}</span>
            </div>
            <div className={styles.tasksCompleted}>
              <strong>Concluídas</strong>
              <span>
                {
                  todoList.filter((todoItem) => todoItem.isCompleted === true)
                    .length
                }
              </span>
            </div>
          </div>

          {todoList.length > 0 ? (
            todoList.map((task, key) => (
              <Card
                key={key}
                task={task}
                deleteTask={deleteTask}
                handleTaskCompleted={handleTaskCompleted}
              />
            ))
          ) : (
            <div className={styles.tasksContent}>
              <img src={Clipboard} alt="" />
              <div className={styles.paragraph}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
