"use client"
import React, { useState } from "react";

const page = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [mainTask, setMainTask] = useState([])


  const submitHandeler = (e) => {
    e.preventDefault();
    // console.log(taskTitle, taskDesc)
    setMainTask([...mainTask, { taskTitle, taskDesc }])
    setTaskTitle('')
    setTaskDesc('')

  }
  const deleteHandler = (i) => {
    let copyTaskData = [...mainTask]
    copyTaskData.splice(i, 1)
    setMainTask(copyTaskData)
  }

  let renderTask = <li>No Tasks Available</li>

  return (
    <>
      <h1 className="p-5 bg-black text-3xl font-semibold text-white text-center">
        Your Personal Todo List
      </h1>
      <div className="flex justify-around mt-10">
        <form className="sm:w-100 w-96  my-10" onSubmit={submitHandeler}>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="taskTitle" className="text-lg">Title</label>
            <input
              id="taskTitle"
              type="text"
              placeholder="Enter Title"
              className="p-1 px-2 border-2 border-zinc-800 rounded-none"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value)
              }}
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="taskDesc" className="text-lg">Description </label>
            <textarea
              id="taskDesc"
              type="text"
              placeholder="Enter Description"
              rows={4}
              className="p-1 px-2 border-2 border-zinc-800 rounded-none"
              value={taskDesc}
              onChange={(e) => {
                setTaskDesc(e.target.value)
              }}
            />
          </div>
          <div className="">
            <button
              className="px-4 py-1 border-1 bg-black text-white rounded-sm hover:translate-y-1">
              Add Task
            </button>
          </div>
        </form>
        <div className="w-96 mt-5 p-5 bg-slate-200">
          <ul className="px-3">
            {mainTask.length === 0 ? renderTask : mainTask.map((task, i) => {
              return <li key={i} className="list-disc flex flex-col gap-1 mt-2">
                <div className="flex justify-between">
                  <div className="text-xl font-semibold">{task.taskTitle} </div>
                  <button
                    onClick={() => {
                      deleteHandler(i)
                    }}
                    className="px-2 text-xl font-bold text-slate-500 hover:bg-slate-300 hover:rounded-sm">X</button>
                </div>
                <div className="">{task.taskDesc}</div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
