import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ProductModalFormOnSubmit {
  name: string;
  price: string;
  category: string;
  stock: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Nombre requerido"),
  price: yup
    .number()
    .typeError("El precio debe ser un número")
    .required("Precio requerido")
    .min(0, "El precio debe de ser mayor a 0"),
  category: yup.string().required("Categoria requerido"),
  stock: yup
    .number()
    .typeError("La cantidad debe ser un número")
    .required("Cantidad requerida")
    .min(0, "La cantidad debe de ser mayor a 0"),
});

export const productModalFormResolver = yupResolver(schema);
