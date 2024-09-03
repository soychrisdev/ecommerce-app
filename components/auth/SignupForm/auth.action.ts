"use server";

import { LoginClientType } from "@/lib/loginSchemaValidation";
import { UserType } from "@/lib/schemaValidation";
import axios from "axios";


export const registerClientAction = async (data: UserType) => {
  const dataTransform = {
    name: data.name,
    email: data.email,
    password: data.password,
    passwordConfirmation: data.password
  }

  const response = await axios.post('http://localhost:3001/api/v1/auth/register', dataTransform);
  return response.status
};


export const loginClientAction = async (data: LoginClientType) => {
  const dataTransform = {
    email: data.email,
    password: data.password,
  }

  const response = await axios.post('http://localhost:3001/api/v1/auth/login', dataTransform);
  return response.data
};