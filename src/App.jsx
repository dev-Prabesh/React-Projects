// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Container from "./components/Container";

// function App() {

//   let [todoLists, setTodoLists] = useState([
//     {
//       name: "ghee",
//       date: "2/23/2025",
//     },
//     {
//       name: "orange",
//       date: "3/22/2024",
//     },
//     {
//       name: "apple",
//       date: "5/13/2025",
//     },
//   ]);

//   let [inputValue, setInputValue] = useState("");
//   let [inputDate, setDateValue] = useState("");

//   let getInputValue = (e) => {
//     setInputValue(e.target.value);
//   }

//   let getDateValue = (e) => {
//     setDateValue(e.target.value);
//   }

//   let haveValue = () => {
//     console.log(inputValue)
//     console.log(inputDate)

//     let newarr = [...todoLists, {name:inputValue, date:inputDate}]
//     setTodoLists(newarr);
//     console.log(newarr);
//   }

//   let todelete = (name) => {
//     let newarr = todoLists.filter(list => name !== list.name);
//     setTodoLists(newarr);

//     // console.log(`${name} is deleted successfully.`);
//   };

//   return (
//     <div>
//       {/* <Container /> */}

//       <div className="mt-10">
//         <div className="rounded-lg min-h-7 mt-55 w-[400px] border-2 border-black">
//           <div className=" flex justify-around">
//             <h1 className="font-bold  text-xl text-orange-600">Todo App</h1>
//           </div>

//           <div className="flex justify-around mt-2 px-4">
//             <input placeholder="input here..." onChange={getInputValue}
//               type="text"
//               className="border-2 w-full rounded-lg py-0 px-2"
//             />
//             <input type="date" onChange={getDateValue} className="border-2 mx-2 w-full rounded-lg py-0 px-2"/>
//             <button onClick={haveValue}  className="bg-green-500 border-3 mx-1 border-green-600 px-2 py-1 rounded-lg cursor-pointer">
//               Add
//             </button>
//           </div>

//           <div className="mt-2 py-4 px-4">
//             {todoLists.map((list, index) => (
//               <div key={index} className="flex mt-2 justify-between border-2 px-2 rounded-lg py-2">
//                 <p className="bg-blue-400 px-2 py-1 rounded-lg">{list.name}</p>
//                 <p className="bg-blue-400 px-2 py-1 rounded-lg">{list.date}</p>
//                 <button onClick={() => todelete(list.name)} className="bg-red-500 px-2 py-1 cursor-pointer rounded-lg">
//                   Delete
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;






//version 2 updated

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Container from "./components/Container";
// import { useRef } from "react";

// function App() {
//   let inputElement = useRef();
//   let dateElement = useRef();

//   let [todoLists, setTodoLists] = useState([
//     {
//       name: "ghee",
//       date: "2/23/2025",
//     },
//     {
//       name: "orange",
//       date: "3/22/2024",
//     },
//     {
//       name: "apple",
//       date: "5/13/2025",
//     },
//   ]);

//   // let getInputValue = (e) => {
//   //   setInputValue(e.target.value);
//   // }

//   // let getDateValue = (e) => {
//   //   setDateValue(e.target.value);
//   // }

//   let haveValue = () => {
//     let element = inputElement.current.value;
//     let date = dateElement.current.value;

//     let newarr = [...todoLists, { name: element, date: date }];
//     setTodoLists(newarr);
//     // console.log(newarr);
//   };

//   let todelete = (name) => {
//     let newarr = todoLists.filter((list) => name !== list.name);
//     setTodoLists(newarr);

//     // console.log(`${name} is deleted successfully.`);
//   };

//   return (
//     <div>
//       {/* <Container /> */}

//       <div className="mt-10">
//         <div className="rounded-lg min-h-7 mt-55 w-[400px] border-2 border-black">
//           <div className=" flex justify-around">
//             <h1 className="font-bold  text-xl text-orange-600">Todo App</h1>
//           </div>

//           <div className="flex justify-around mt-2 px-4">
//             <input
//               placeholder="input here..."
//               ref={inputElement}
//               type="text"
//               className="border-2 w-full rounded-lg py-0 px-2"
//             />
//             <input
//               ref={dateElement}
//               type="date"
//               className="border-2 mx-2 w-full rounded-lg py-0 px-2"
//             />
//             <button
//               onClick={haveValue}
//               className="bg-green-500 border-3 mx-1 border-green-600 px-2 py-1 rounded-lg cursor-pointer"
//             >
//               Add
//             </button>
//           </div>

//           <div className="mt-2 py-4 px-4">
//             {todoLists.length === 0 && <div>Welcome</div>}
//             {todoLists.map((list, index) => (
//               <div
//                 key={index}
//                 className="flex mt-2 justify-between border-2 px-2 rounded-lg py-2"
//               >
//                 <p className="bg-blue-400 px-2 py-1 rounded-lg">{list.name}</p>
//                 <p className="bg-blue-400 px-2 py-1 rounded-lg">{list.date}</p>
//                 <button
//                   onClick={() => todelete(list.name)}
//                   className="bg-red-500 px-2 py-1 cursor-pointer rounded-lg"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




// version 3 with much better styling



import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputElement = useRef();
  const dateElement = useRef();
  const [todoLists, setTodoLists] = useState([
    {
      name: "Grocery Shopping",
      date: "2024-03-25",
    },
    {
      name: "Team Meeting",
      date: "2024-03-26",
    },
    {
      name: "Project Deadline",
      date: "2024-04-01",
    },
  ]);

  const handleAddTask = () => {
    const element = inputElement.current.value;
    const date = dateElement.current.value;

    if (element.trim() && date) {
      setTodoLists([...todoLists, { name: element, date: date }]);
      inputElement.current.value = "";
      dateElement.current.value = "";
    }
  };

  const handleDeleteTask = (name) => {
    setTodoLists(todoLists.filter((list) => name !== list.name));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-start justify-center py-12">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Todo App
          </h1>
          <p className="mt-2 text-gray-500">Organize your day efficiently</p>
        </div>

        {/* Input Section */}
        <div className="flex flex-col space-y-4 mb-8">
          <div className="flex gap-2">
            <input
              ref={inputElement}
              type="text"
              placeholder="Add a new task..."
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <input
              ref={dateElement}
              type="date"
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>
          <button 
            onClick={handleAddTask}
            className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 transform hover:scale-[1.02]"
          >
            Add Task
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todoLists.length === 0 ? (
            <div className="text-center py-6 text-gray-400">
              <p className="text-lg">🎉 All caught up! Time to relax.</p>
              <p className="mt-2">Add a new task to get started</p>
            </div>
          ) : (
            todoLists.map((list, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg group transition-all duration-300"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-700">{list.name}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {new Date(list.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteTask(list.name)}
                  className="cursor-pointer ml-4 p-2 text-red-500 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;