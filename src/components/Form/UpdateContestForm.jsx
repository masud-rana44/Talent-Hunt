import { useState } from "react";
import { updateContest } from "../../api/apiContests";
import { imageUpload } from "../../api/utils";
import FormLayout from "./FormLayout";
import FormRow from "./FormRow";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateContestForm = ({ contest, refetch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: contest?.title,
      description: contest?.description,
      instruction: contest?.instruction,
      type: contest?.type,
    },
  });
  const navigate = useNavigate();
  const [image, setImage] = useState(contest?.image);
  const { state } = useLocation();

  const from = state?.from?.pathname || "/dashboard";

  const onSubmit = async (data) => {
    try {
      // save the contest to the database
      const res = await updateContest(contest._id, {
        ...data,
        image,
        priceMoney: parseFloat(data.prizeMoney),
        entryFee: parseFloat(data.entryFee),
      });

      if (res) {
        toast.success("Contest updated");
        refetch();
        navigate(from);
      }
    } catch (error) {
      toast.error(error?.message || "Error updating contest");
    }
  };

  const handleImageChange = async (e) => {
    try {
      const imageUrl = await imageUpload(e.target.files[0]);
      setImage(imageUrl);
    } catch (error) {
      toast.error(error?.message || "Error uploading image");
    }
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold text-center">Update Contest</h1>
      <FormRow label="Title*" error={errors?.title?.message}>
        <input
          className="input"
          type="text"
          id="contestName"
          {...register("title", {
            required: "Contest title is required",
          })}
        />
      </FormRow>
      <FormRow label="Image*">
        <input
          className="input "
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          id="image"
        />
      </FormRow>
      <img src={image} className="h-40 object-contain" />
      <FormRow label="Description*" error={errors?.description?.message}>
        <textarea
          className="input"
          id="description"
          {...register("description", {
            required: "Contest Description is required",
          })}
        />
      </FormRow>
      <FormRow label="Price Money*" error={errors?.prizeMoney?.message}>
        <input
          className="input"
          type="number"
          id="priceMoney"
          step="any"
          defaultValue={contest?.prizeMoney}
          {...register("prizeMoney", {
            required: "Price Money is required",
            validate: (value) =>
              value > 0 || "Price Money must be greater than 0",
          })}
        />
      </FormRow>
      <FormRow label="Entry fee*" error={errors?.entryFee?.message}>
        <input
          className="input"
          type="number"
          step="any"
          id="entryFee"
          defaultValue={contest?.entryFee}
          {...register("entryFee", {
            required: "Entry fee is required",
            validate: (value) =>
              value > 0 || "Entry fee must be greater than 0",
          })}
        />
      </FormRow>
      <FormRow label="Instructions*" error={errors?.instruction?.message}>
        <textarea
          className="input"
          id="instruction"
          {...register("instruction", {
            required: "Contest instruction is required",
          })}
        />
      </FormRow>
      <FormRow label="Type*" error={errors?.type?.message}>
        <select className="input" id="type" {...register("type")}>
          <option value="business">Business Contest</option>
          <option value="medical">Medical Contest</option>
          <option value="writing">Article Writing</option>
          <option value="gaming">Gaming</option>
        </select>
      </FormRow>
      <FormRow label="Deadline*" error={errors?.deadline?.message}>
        <input
          type="datetime-local"
          className="input"
          id="deadline"
          defaultValue={new Date(contest?.deadline)
            .toISOString()
            .substring(0, 16)}
          {...register("deadline", {
            required: "Contest Deadline is required",
            // validate: (value) =>
            //   new Date(value) > new Date() ||
            //   "Contest Deadline must be greater than today",
          })}
        />
      </FormRow>
      <button className="btn">Update Contest</button>
    </FormLayout>
  );
};

export default UpdateContestForm;
