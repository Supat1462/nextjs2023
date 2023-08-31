"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function AddBrand() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("โปรดกรอกข้อมูลให้ครบ");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/category", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (res.ok) {
        router.push("/settings/category");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold text-indigo-500">
          Form Add Category
        </h1>
      </div>

      <form
        onSubmit={handlerSubmit}
        className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1"
      >
        <div>
          <label
            htmlFor="Category"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Name Category :
          </label>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link href="/settings/category">
            <span className="rounded-md bg-red-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
              Cancel
            </span>
          </Link>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default AddBrand;
