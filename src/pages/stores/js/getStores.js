import request from "../../../utils/request";

const getStores = async (id1, id2) => {
  try {
    if(id1 && id2){
      return await request.get("api/store/"+id1+"/"+id2+"/");
      
    }else if(id1){
    return await request.get("api/store/"+id1+"/");

    }else{
    return await request.get("api/store");

    }
  } catch (error) {
    console.log("error", error);
  }
};

export default getStores;

