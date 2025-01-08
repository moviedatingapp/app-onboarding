import { SignUpFormSchema } from "@/schemas/types";
import axios from "axios";
import envConfigs from "../configs";

const signUpWithCredentials = async (data: SignUpFormSchema) => {
  await axios
    .post(`${envConfigs.rootUrl}sign-up`, {
      name: data.name,
      email: data.email,
      password: data.password,
      userName: data.userName,
      confirmPassword: data.confirmPassword,
    })
    .then((res) => {
      console.log(res);
    });
};

export { signUpWithCredentials };
