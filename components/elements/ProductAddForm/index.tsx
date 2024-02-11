"use client";

import { IProduct } from "@/models/Product.model";
import { Button, Card, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useForm } from "react-hook-form";
import { ProductAddFormContainer } from "./ProductAddForm.styled";

type ProductAddFormValues = Omit<IProduct, "id" | "rate">;

export default function ProductAddForm() {
  const form = useForm<ProductAddFormValues>({
    defaultValues: {
      title: "",
      description: "",
      stock: 0,
      price: 0,
    },
  });

  const { register, handleSubmit, formState, reset } = form;

  const onFormSubmitted = (data: ProductAddFormValues) => {
    console.log(data);
  };

  const onFormReset = () => {
    reset();
  };

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onFormSubmitted)}
    >
      <Grid
        container
        xs={12}
        md={8}
        lg={6}
        sx={{
          marginInline: "auto",
          marginBlock: "5rem",
          paddingInline: "1rem",
        }}
        spacing={2}
      >
        <ProductAddFormContainer elevation={3}>
          <Grid xs={12}>
            <TextField
              type="text"
              fullWidth
              label="Title*"
              {...register("title", {
                required: "Title is required",
              })}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              type="text"
              multiline
              fullWidth
              label="Description*"
              {...register("description", {
                required: "Description is required",
              })}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              type="number"
              fullWidth
              label="Stock*"
              {...register("stock", {
                required: "Stock is required",
              })}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              type="number"
              fullWidth
              label="Price*"
              {...register("price", {
                required: "Price is required",
              })}
            />
          </Grid>
          <Grid xs={12}>
            <Stack
              direction={{ xs: "column", lg: "row" }}
              useFlexGap
              gap={2}
              alignItems="flex-end"
              marginBlock="1rem"
            >
              <Button
                fullWidth
                type="submit"
                color="primary"
                variant="outlined"
                onClick={onFormReset}
              >
                Reset
              </Button>
              <Button
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
              >
                Confirm
              </Button>
            </Stack>
          </Grid>
        </ProductAddFormContainer>
      </Grid>
    </form>
  );
}
