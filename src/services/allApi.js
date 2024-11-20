import { BASE_URL } from "./baseurl"
  import { commonApi } from "./commonApi"

  export const saveApi = async(Details)=>{
    return await commonApi("POST",`${BASE_URL}/user/save`,Details,"")
  }