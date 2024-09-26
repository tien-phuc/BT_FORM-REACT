import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { btFormActions } from "../StoreReduxToolkit/BTForm/SliceForm";

export const Table = () => {
  const { SVList } = useSelector((state) => state.btFormReducer);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSVList = SVList.filter((item) =>
    item.maSV.toString().includes(searchTerm)
  );

  return (
    <div className="mt-5">
      <h1 className="text-center fw-bold mt-5 mb-5">Danh Sách Sinh Viên</h1>
      <div className="mb-3">
        <div className="d-flex justify-content-center mt-3">
          <input
            type="text"
            className="form-control w-75 focus:border-primary"
            placeholder="Tìm kiếm bằng mã sinh viên..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: "3px solid orange", borderRadius: "18px" }}
          />
        </div>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Mã SV</th>
            <th>Họ Tên</th>
            <th>Số Điện Thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredSVList.map((item) => (
            <tr key={item.maSV}>
              <td>{item.maSV}</td>
              <td>{item.hoTen}</td>
              <td>{item.soDienThoai}</td>
              <td>{item.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(btFormActions.deleteSV(item.maSV));
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-info ms-2"
                  onClick={() => {
                    dispatch(btFormActions.editSV(item));
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
