import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { btFormActions } from "../StoreReduxToolkit/BTForm/SliceForm";

export const Form = () => {
  const { SVEdit } = useSelector((state) => state.btFormReducer);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: SVEdit,
  });

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    reset(SVEdit);
    setIsDisabled(!!SVEdit);
  }, [SVEdit, reset]);

  const onSubmit = (values) => {
    if (SVEdit) {
      dispatch(btFormActions.updateSV(values));
      setIsDisabled(false);
    } else {
      dispatch(btFormActions.setSVList(values));
    }

    reset({
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    });
    reset();
    dispatch(btFormActions.clearSVEdit());
  };

  return (
    <div>
      <p className="p-2 fs-3 mt-5 bg-dark text-white ">Thông tin sinh viên</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-6">
            <p>Mã Sinh Viên</p>
            <input
              placeholder="Nhập mã sinh viên"
              type="text"
              className="form-control"
              disabled={isDisabled}
              {...register("maSV", {
                required: "Vui lòng nhập mã sinh viên",
                minLength: {
                  value: 4,
                  message: "Mã sinh viên phải từ 6 kí tự",
                },
                maxLength: {
                  value: 8,
                  message: "Mã sinh viên không được vượt quá 10 kí tự",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Mã sinh viên phải là số",
                },
              })}
            />
            {errors?.maSV && (
              <p className="text-danger">{errors?.maSV?.message}</p>
            )}
          </div>

          <div className="col-6">
            <p>Họ Tên</p>
            <input
              placeholder="Nhập họ tên"
              type="text"
              className="form-control"
              {...register("hoTen", {
                required: "Vui lòng nhập họ tên",
              })}
            />
            {errors?.hoTen && (
              <p className="text-danger">{errors?.hoTen?.message}</p>
            )}
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-6">
            <p>Số Điện Thoại</p>
            <input
              placeholder="Nhập số điện thoại"
              type="number"
              className="form-control"
              {...register("soDienThoai", {
                required: "Vui lòng nhập số điện thoại",
                pattern: {
                  value: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                  message: "Hãy nhập đúng định dạng số điện thoại Việt Nam",
                },
              })}
            />
            {errors?.soDienThoai && (
              <p className="text-danger">{errors?.soDienThoai?.message}</p>
            )}
          </div>

          <div className="col-6">
            <p>Email</p>
            <input
              placeholder="Nhập địa chỉ Email"
              type="text"
              className="form-control"
              {...register("email", {
                required: "Vui lòng nhập địa chỉ email",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Vui lòng điền đúng định dạng email",
                },
              })}
            />
            {errors?.email && (
              <p className="text-danger">{errors?.email?.message}</p>
            )}
          </div>
        </div>

        <div className="mt-3">
          {!SVEdit ? (
            <button className="btn btn-success">Thêm Sinh Viên</button>
          ) : (
            <button className="btn btn-warning ms-3">Update Sinh Viên</button>
          )}
        </div>
      </form>
    </div>
  );
};
