import { saveContest } from "../../api/apiContests";
import { imageUpload } from "../../api/utils";
import useUser from "../../hooks/useUser";
import FormLayout from "./FormLayout";
import FormRow from "./FormRow";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateContestForm = ({ contest }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: contest?.title,
      description: contest?.description,
      prizeMoney: contest?.priceMoney,
      instruction: contest?.instruction,
      type: contest?.type,
      deadline: contest?.deadline,
    },
  });
  const navigate = useNavigate();
  const { userData, isLoading } = useUser();

  if (isLoading && !userData) return <p>Loading...</p>;

  const onSubmit = async (data) => {
    try {
      // upload image
      // const imageUrl = await imageUpload(data.image[0]);
      console.log(data);

      // save the contest to the database
      // const res = await saveContest({
      //   ...data,
      //   image: imageUrl,
      //   priceMoney: parseFloat(data.prizeMoney),
      //   creator: userData._id,
      // });

      // console.log(res);

      // if (res) {
      //   toast.success("Contest added successfully");
      //   navigate("/dashboard/creator/contests");
      // }
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Error adding contest");
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
      <FormRow label="Image*" error={errors?.image?.message}>
        <input
          className="input"
          type="file"
          accept="image/*"
          id="image"
          {...register("image", {
            required: "Contest Image is required",
          })}
        />
      </FormRow>
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
          // step="any"
          id="priceMoney"
          defaultValue={contest?.priceMoney}
          {...register("prizeMoney", {
            required: "Price Money is required",
            validate: (value) =>
              value > 0 || "Price Money must be greater than 0",
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
      <FormRow label="Deadline" error={errors?.deadline?.message}>
        <input
          type="datetime-local"
          className="input"
          id="deadline"
          defaultValue={contest?.deadline}
          {...register("deadline", {
            required: "Contest Deadline is required",
            validate: (value) =>
              new Date(value) > new Date() ||
              "Contest Deadline must be greater than today",
          })}
        />
      </FormRow>
      <button className="btn">Update Contest</button>
    </FormLayout>
  );
};

export default UpdateContestForm;
