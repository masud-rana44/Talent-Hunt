import { imageUpload } from "../../api/utils";
import useAuth from "../../hooks/useAuth";
import FormLayout from "./FormLayout";
import FormRow from "./FormRow";
import { useForm } from "react-hook-form";

const AddContestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const onSubmit = async (data) => {
    const { name, description, price, instructions, type, deadline } = data;

    // upload image
    const imageUrl = await imageUpload(data.image[0]);

    // create contest
    const contestData = {
      name,
      description,
      price: parseFloat(price),
      instructions,
      type,
      deadline,
      image: imageUrl,
      creatorId: user?.uid,
    };
    console.log(contestData);

    // save the contest to the database
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold text-center">Add New Contest</h1>
      <FormRow label="Contest Name*" error={errors?.name?.message}>
        <input
          className="input"
          type="text"
          id="contestName"
          {...register("name", {
            required: "Contest Name is required",
          })}
        />
      </FormRow>
      <FormRow label="Contest Image*" error={errors?.image?.message}>
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
      <FormRow label="Price Money*" error={errors?.price?.message}>
        <input
          className="input"
          type="number"
          step="any"
          id="priceMoney"
          {...register("price", {
            required: "Price Money is required",
            validate: (value) =>
              value > 0 || "Price Money must be greater than 0",
          })}
        />
      </FormRow>
      <FormRow label="Instructions*" error={errors?.instructions?.message}>
        <textarea
          className="input"
          id="instructions"
          {...register("instructions", {
            required: "Contest Instructions is required",
          })}
        />
      </FormRow>
      <FormRow label="Contest Type*" error={errors?.type?.message}>
        <select className="input" id="type" {...register("type")}>
          <option value="business">Business Contest</option>
          <option value="medical">Medical Contest</option>
          <option value="writing">Article Writing</option>
          <option value="gaming">Gaming</option>
        </select>
      </FormRow>
      <FormRow label="Contest Deadline" error={errors?.deadline?.message}>
        <input
          type="date"
          className="input"
          id="deadline"
          {...register("deadline", {
            required: "Contest Deadline is required",
            validate: (value) =>
              new Date(value) > new Date() ||
              "Contest Deadline must be greater than today",
          })}
        />
      </FormRow>
      <button className="btn">Add Contest</button>
    </FormLayout>
  );
};

export default AddContestForm;
