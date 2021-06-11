import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface SignupFormOnSubmit {
  name: string;
  lastname: string;
  birthday: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Nombre requerido"),
  lastname: yup.string().required("Apellido requerido"),
  birthday: yup.string().required("Fecha requerida"),
  email: yup
    .string()
    .required("Correo electrónico obligatorio")
    .min(6, "Mínimo 6 caracteres")
    .max(50, "Máximo 50 caracteres"),
  password: yup
    .string()
    .required("Ingrese una contraseña")
    .min(8, "Mínimo 8 caracteres")
    .max(25, "Máximo 25 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirma tu contraseña")
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
});

export const signupFormResolver = yupResolver(schema);
