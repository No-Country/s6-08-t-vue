import { reactive } from "vue";
import { defineStore } from "pinia";
import { getAccessToken } from "../services/auth.service";

const profile = getAccessToken();
const authProfile = profile || {
  token: "",
};

export const useAuthStore = defineStore("auth", () => {
  const profileAuth = reactive(authProfile);

  const setProfileAuth = (profile) => {
    profileAuth.token = profile.token;
  };
  const deleteProfile = () => {
    profileAuth.token = "";
  };

  return { profileAuth, setProfileAuth, deleteProfile };
});
