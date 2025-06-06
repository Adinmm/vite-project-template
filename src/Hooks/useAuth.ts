import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  LoginModels,
  RegisterModel,
  type LoginModelsType,
  type RegisterModelType,
} from "../Models/AuthModels";
import { axiosInstance } from "../lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";


const login = async (data: LoginModelsType) => {
  const response = await axiosInstance.post("/api/login", data);
  return response.data;
}
export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginModelsType>({
    resolver: zodResolver(LoginModels),
  });

const mutation = useMutation({
  mutationKey:['login'],
  mutationFn: (data: LoginModelsType) => login(data),
  onSuccess:()=>{
    alert('Login Berhasil')
  },
  onError:()=>{
    alert('Login Gagal')
  }
})


  return {
    register,
    handleSubmit,
    errors,
    isLoading:mutation.isPending,
    onSubmit:mutation.mutate,
  };
};

const registration = async (data: RegisterModelType) => {
  const response = await axiosInstance.post("/api/register",data );
  return response.data;
};

export const useRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterModelType>({
    resolver: zodResolver(RegisterModel),
  });

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: RegisterModelType) => registration(data),
    onSuccess:()=>{
      alert('Registrasi Berhasil');
      window.location.href='/login'
    },
    onError:()=>{
      alert('Registrasi Gagal');
    }
  })

  return{
    register,
    handleSubmit,
    errors,
    onSubmit: mutation.mutate,
    isLoading:mutation.isPending
  }
};
