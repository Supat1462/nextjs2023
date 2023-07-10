"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function addBrand() {
  const [name, setName] = useState("");
  const [serial, setSerial] = useState("");
  const [disc, setDisc] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const router = useRouter();

  console.log(name);

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !serial ||
      !brand ||
      !category ||
      !status ||
      !price ||
      !disc ||
      !startDate ||
      !endDate
    ) {
      alert("โปรดกรอกข้อมูลให้ครบ");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/device", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          serial,
          brand,
          category,
          price,
          startDate,
          status,
          endDate,
          disc,
        }),
      });

      if (res.ok) {
        router.push("/device");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center my-5">
        <h1 className="text-2xl font-bold text-indigo-500">Form Add Device</h1>
      </div>
      <form onSubmit={handlerSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="serial"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Serail Number :
            </label>
            <input
              type="text"
              name="serial"
              id="serial"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
              placeholder="Serial Number"
              className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name :
            </label>
            <input
              type="text"
              value={name}
              name="name"
              id="name"
              autoComplete="given-name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="brand"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Brand :
            </label>
            <div className="mt-2">
              <select
                id="brand"
                name="brand"
                value={brand}
                autoComplete="status"
                onChange={(e) => setBrand(e.target.value)}
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category :
            </label>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                value={category}
                autoComplete="status"
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="status"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Status :
            </label>
            <div className="mt-2">
              <select
                id="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                autoComplete="status"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></select>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Price :
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="price"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="start-date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Start Date Warrantry :
            </label>
            <div className="mt-2">
              <input
                type="date"
                value={startDate}
                name="start-date"
                id="start-date"
                onChange={(e) => setStartDate(e.target.value)}
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="start-date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              End Date Warrantry :
            </label>
            <div className="mt-2">
              <input
                type="date"
                value={endDate}
                name="end-date"
                id="end-date"
                onChange={(e) => setEndDate(e.target.value)}
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="discription"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Discription :
            </label>
            <div className="">
              <textarea
                name="discription"
                id="discription"
                value={disc}
                rows={3}
                onChange={(e) => setDisc(e.target.value)}
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link href="/device">
            <span className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </span>
          </Link>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default addBrand;