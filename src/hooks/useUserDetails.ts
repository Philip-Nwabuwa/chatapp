import axios from "axios";

export const useUserDetails = async () => {
  try {
    const response = await axios.post("/api/user-details");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
