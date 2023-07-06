import React from "react";
import Link from "next/link";

function Device() {
  return (
    <div className="grid  place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      {" "}
      <div className="text-center">
        <p className="text-3xl font-bold text-indigo-600">Device Management</p>
        <div className="my-5">
          <Link href={"/device/add"} className="p-4 bg-pink-200">
            Add
          </Link>
        </div>
        <div className="realative flex flex-col shadow-lg mb-6 py-5 px-3 rounded-lg min-w-0">
          <table className="table-auto">
            <thead>
              <tr className="px-3">
                <th>No</th>
                <th>S/N</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>End-date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Device;
