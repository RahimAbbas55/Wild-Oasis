/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from '../../ui/FormRow'

function CreateCabinForm( {cabinToEdit} ) {
  const queryCLient = useQueryClient();
  const { register, handleSubmit, reset , getValues , formState } = useForm();
  const { errors } = formState
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New Cabin created successfully!");
      queryCLient.invalidateQueries({
        queryKey: ["Cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  function formSubmissiom(data) {
    mutate({...data , image: data.image[0]});
  }
  function onError(err) {
    console.log(err);
  }
  return (
    <Form onSubmit={handleSubmit(formSubmissiom, onError)}>

      <FormRow label='Cabin Name' error={errors?.name?.message} >
          <Input
            type="text"
            id="name"
            disabled={isCreating}
            {...register("name", { required: "Name is required!" })}
          />
      </FormRow>

      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message} >
      <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "Max capacity is required!",
            min: {
              value: 1,
              message: "Capacity should be at least 1!",
            },
          })}
        />
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message} >
      <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "Price is required!",
            min: {
              value: 1,
              message: "Capacity should be at least 1!",
            },
          })}
        />
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message} >
      <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isCreating}
          {...register("discount", {
            required: "Discount amount is required!",
            validate: (value) => value <= getValues().regularPrice || 'Discount should be less than regular price!',
          })}
        />
      </FormRow>

      <FormRow label='Description for cabin' error={errors?.description?.message} >
      <Textarea
          type="number"
          id="description"
          disabled={isCreating}
          defaultValue=""
          {...register("description", { required: "Description is required!" })}
        />
      </FormRow>
    
      <FormRow label='Cabin photo' >
        <FileInput id="image" type='file' accept="image/*" {...register("image", { required: "Image is required!" })} />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
