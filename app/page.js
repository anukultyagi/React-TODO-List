"use client"
import React, { useState } from "react";

const page = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const submitHandeler = (e) => {
    e.preventDefault();
    console.log(taskTitle, taskDesc)
    setTaskTitle('')
    setTaskDesc('')
  }

  return (
    <>
      <h1 className="p-5 bg-black text-3xl font-semibold text-white text-center">
        Your Personal Todo List
      </h1>
      <form className="sm:w-100 w-96 m-auto my-10" onSubmit={submitHandeler}>
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
            className="px-4 py-1 border-1 bg-black text-white rounded-sm hover:translate-y-2">
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default page;
