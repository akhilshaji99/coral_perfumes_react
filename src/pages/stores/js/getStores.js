import request from "../../../utils/request";

const getStores = async (id) => {
  try {
    if(id){
      return await request.get("api/store/"+id+"/");

    }else{
    return await request.get("api/store/");

    }
  } catch (error) {
    console.log("error", error);
  }
};

export default getStores;
