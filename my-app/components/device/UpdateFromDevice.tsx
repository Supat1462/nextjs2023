"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function UpdateFromDevice({
  name,
  serial,
  id,
  disc,
  brand,
  category,
  status,
  price,
  startDate,
  endDate,
}) {
  const [newName, setName] = useState(name);
  const [newSerial, setSerial] = useState(serial);
  const [newDisc, setDisc] = useState(disc);
  const [newBrand, setBrand] = useState(brand);
  const [newCategory, setCategory] = useState(category);
  const [newStatus, setStatus] = useState(status);
  const [newPrice, setPrice] = useState(price);
  const [newStartDate, setStartDate] = useState(startDate);
  const [newEendDate, setEndDate] = useState(endDate);

  const router = useRouter();
  const [brands, setBrands] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [statusdevices, setStatusDevices] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/brand");
        if (!response.ok) {
          throw new Error("Failed to fetch brands");
        }
        const data = await response.json();
        setBrands(data.brands);
      } catch (error) {
        console.log("Error loading brands", error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchCategorys = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/category");
        if (!response.ok) {
          throw new Error("Failed to fetch categorys");
        }
        const data = await response.json();
        setCategorys(data.categorys);
      } catch (error) {
        console.log("Error loading categorys", error);
      }
    };

    fetchCategorys();
  }, []);

  useEffect(() => {
    const fetchStatusDevice = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/statusdevice");
        if (!response.ok) {
          throw new Error("Failed to fetch statusdevices");
        }
        const data = await response.json();
        setStatusDevices(data.statusdevices);
      } catch (error) {
        console.log("Error loading statusdevices", error);
      }
    };

    fetchStatusDevice();
  }, []);

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/device/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newName,
          newSerial,
          newBrand,
          newCategory,
          newDisc,
          newEendDate,
          newPrice,
          newStartDate,
          newStatus,
        }),
      });

      // เครียร์ข้อผิดพลาดเมื่อข้อมูลถูกต้อง

      if (res.ok) {
        router.push("/device");
      } else {
        throw new Error("Failed to create a device");
      }
    } catch (error) {
      error;
    }
  };

  // console.log(newStartDate, "newstartDate");
  // console.log(startDate, "startDate");

  const mongodbStartDate = new Date(newStartDate);
  const mongodbEndDate = new Date(newEendDate);

  return (
    <div>
      <div className="flex items-center justify-center my-2">
        <h1 className="text-2xl font-bold text-indigo-500">
          Form Update Device
        </h1>
      </div>
      <form onSubmit={handlerSubmit}>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
              value={newSerial}
              onChange={(e) => setSerial(e.target.value)}
              placeholder="serial Number"
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
              value={newName}
              name="name"
              id="name"
              autoComplete="given-name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                value={newBrand}
                autoComplete="status"
                onChange={(e) => setBrand(e.target.value)}
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select a brand</option>
                {brands.map((brand) => (
                  <option key={brand._id} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
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
                value={newCategory}
                autoComplete="status"
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select a category</option>
                {categorys.map((category) => (
                  <option key={category._id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="status"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Status Device :
            </label>
            <div className="mt-2">
              <select
                id="status"
                name="status"
                value={newStatus}
                onChange={(e) => setStatus(e.target.value)}
                autoComplete="status"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select a status</option>
                {statusdevices.map((status) => (
                  <option key={status._id} value={status.name}>
                    {status.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                value={newPrice}
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
                name="start-date"
                id="start-date"
                value={mongodbStartDate.toISOString().split("T")[0]}
                onChange={(e) => {
                  const selectedDate = e.target.value;
                  const dateParts = selectedDate.split("-");
                  const formattedDate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
                  if (/^\d{4}-\d{2}-\d{2}$/.test(formattedDate)) {
                    setStartDate(formattedDate);
                  } else {
                    // ถ้าไม่ถูกต้อง ให้กำหนดค่าเป็นว่าง
                    setStartDate("");
                  }
                  setStartDate(formattedDate);
                  // ตอนนี้ formattedDate มีรูปแบบ "yyyy-MM-dd" และสามารถนำมาใช้กับ MongoDB ได้
                }}
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="end-date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              End Date Warrantry :
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="end-date"
                id="end-date"
                value={mongodbEndDate.toISOString().split("T")[0]}
                onChange={(e) => {
                  const selectedDate = e.target.value;
                  const dateParts = selectedDate.split("-");
                  const formattedDate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
                  setEndDate(formattedDate);
                  // ตอนนี้ formattedDate มีรูปแบบ "yyyy-MM-dd" และสามารถนำมาใช้กับ MongoDB ได้
                }}
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                value={newDisc}
                rows={5}
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateFromDevice;
