import { isAxiosError } from "axios";
import type { AxiosError } from "axios";
import { ref } from "vue";

import instance from "../axiosInstances/api";

interface ApiData {
  data: object;
  status: "success" | "fail";
  token: string;
}

interface ApiError {
  data: {
    message: string;
  };
  status: "fail";
}

export const loading = ref(false);

export async function useGet(url: string) {
  loading.value = true;
  try {
    const res = await instance.get<ApiData>(url);
    loading.value = false;
    return res.data;
  } catch (err) {
    loading.value = false;
    return err as AxiosError<ApiError>;
  }
}

export async function usePost(url: string, body: object) {
  loading.value = true;
  try {
    const res = await instance.post<ApiData>(url, body);
    loading.value = false;
    return res.data;
  } catch (err) {
    loading.value = false;

    return err as AxiosError<ApiError>;
  }
}

export const isError = isAxiosError;
