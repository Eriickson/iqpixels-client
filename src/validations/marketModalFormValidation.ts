import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface MarketModalFormOnSubmit {
  name: string;
  direction: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Nombre requerido")
    .min(6, "Mínimo 6 caracteres")
    .max(50, "Máximo 50 caracteres"),
  direction: yup
    .string()
    .required("Dirección requerida")
    .min(6, "Mínimo 6 caracteres")
    .max(50, "Máximo 50 caracteres"),
});

export const marketModalFormResolver = yupResolver(schema);
