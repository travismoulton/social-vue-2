import { defineStore } from "pinia";
import { reactive } from "vue";

export interface User {
  email: string;
  groupMemberships: string[];
  id: string;
  name: string;
  photo: string;
  createdAt: string;
}

export interface UserResponse extends User {
  _id: string;
  password: null;
  _v: number;
}

export const useUserStore = defineStore("user", () => {
  const userTemplate: User = {
    email: "",
    groupMemberships: [],
    id: "",
    name: "",
    photo: "",
    createdAt: "",
  };
  const user = reactive({ ...userTemplate });

  function loginUser(userObj: UserResponse) {
    const { email, groupMemberships, id, name, photo, createdAt } = userObj;
    Object.assign(user, { email, groupMemberships, id, name, photo, createdAt });
  }

  function logoutUser() {
    Object.assign(user, userTemplate);
  }

  return { user, loginUser, logoutUser };
});
