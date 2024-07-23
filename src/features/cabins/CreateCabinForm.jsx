/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

function CreateCabinForm({ cabinToEdit = {} , onClose }) {
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();

  const isWorking = isEditing || isCreating;
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditId = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditId ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditId)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onClose?.();
          },
        }
      );
  }
  function onError(err) {
    console.log(err);
  }
  return (
    <>
      <h1>{isEditId ? 'Edit a cabin' : 'Add a new cabin'}</h1>
      <Form onSubmit={handleSubmit(onSubmit, onError)} type={ onClose ? 'modal' : 'regular'}>
        <FormRow label="Cabin Name" error={errors?.name?.message}>
          <Input
            type="text"
            id="name"
            disabled={isWorking}
            {...register("name", { required: "Name is required!" })}
          />
        </FormRow>

        <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
          <Input
            type="number"
            id="maxCapacity"
            disabled={isWorking}
            {...register("maxCapacity", {
              required: "Max capacity is required!",
              min: {
                value: 1,
                message: "Capacity should be at least 1!",
              },
            })}
          />
        </FormRow>

        <FormRow label="Regular price" error={errors?.regularPrice?.message}>
          <Input
            type="number"
            id="regularPrice"
            disabled={isWorking}
            {...register("regularPrice", {
              required: "Price is required!",
              min: {
                value: 1,
                message: "Capacity should be at least 1!",
              },
            })}
          />
        </FormRow>

        <FormRow label="Discount" error={errors?.discount?.message}>
          <Input
            type="number"
            id="discount"
            defaultValue={0}
            disabled={isWorking}
            {...register("discount", {
              required: "Discount amount is required!",
              validate: (value) =>
                value <= getValues().regularPrice ||
                "Discount should be less than regular price!",
            })}
          />
        </FormRow>

        <FormRow
          label="Description for cabin"
          error={errors?.description?.message}
        >
          <Textarea
            type="number"
            id="description"
            disabled={isWorking}
            defaultValue=""
            {...register("description", {
              required: "Description is required!",
            })}
          />
        </FormRow>

        <FormRow label="Cabin photo">
          <FileInput
            id="image"
            type="file"
            accept="image/*"
            {...register("image", {
              required: isEditId ? false : "Image is required!",
            })}
          />
        </FormRow>

        <FormRow>
          <Button variation="secondary" type="reset" onClick={() => onClose?.()}>
            Cancel
          </Button>
          <Button disabled={isWorking}>
            {isEditId ? "Edit Cabin" : "Add Cabin"}
          </Button>
        </FormRow>
      </Form>
    </>
  );
}

export default CreateCabinForm;
