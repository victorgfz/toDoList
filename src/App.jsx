import React from "react";
import "./App.css";
import Input from "./Input";
import Items from "./Items";
import Clear from "./Clear";

const App = () => {
  const [task, setTask] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const [errorEmpty, setErrorEmpty] = React.useState(false);
  const [errorWidth, setErrorWidth] = React.useState(false);

  function handleSubmit(event) {
    console.log(task, errorEmpty);
    event.preventDefault();
    if (task.length > 0) {
      setErrorEmpty(false);
      setTasks([...tasks, { item: task, resolved: false }]);
      setTask("");
    } else {
      setErrorEmpty(true);
    }
  }

  return (
    <div className="bg-gradient-to-b from-asteroid-300 via-asteroid-200 to-asteroid-100 min-h-screen flex flex-col align center justify-center gap-[64px] py-4">
      <form
        className="flex justify-center relative mx-auto w-10/12 lg:w-6/12 2xl:w-3/12 px-[8px]"
        onSubmit={handleSubmit}
      >
        <Input
          value={task}
          setValue={setTask}
          errorEmpty={errorEmpty}
          setErrorEmpty={setErrorEmpty}
          errorWidth={errorWidth}
          setErrorWidth={setErrorWidth}
        />
      </form>
      {errorEmpty && (
        <p className="block mx-auto border-[1px] border-red-500 p-[8px] text-red-500 uppercase font-extralight animate-drop">
          O input não pode ficar vazio!
        </p>
      )}
      {errorWidth && (
        <p className="block mx-auto border-[1px] border-red-500 p-[8px] text-red-500 uppercase font-extralight animate-drop">
          O input não pode ter mais de 25 caracteres!
        </p>
      )}
      <Items data={tasks} setResolved={setTasks} />
      {tasks[0] ? <Clear value={tasks} setValue={setTasks} /> : null}
    </div>
  );
};

export default App;
