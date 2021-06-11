import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface SignInFormOnSubmit {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Correo electrónico obligatorio")
    .min(6, "Mínimo 6 caracteres")
    .max(50, "Máximo 50 caracteres"),
  password: yup
    .string()
    .required("Contraseña obligatoria")
    .min(8, "Mínimo 8 caracteres")
    .max(25, "Máximo 25 caracteres"),
});

export const signinFormResolver = yupResolver(schema);
