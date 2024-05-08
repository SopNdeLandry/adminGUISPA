export const generatePackageObjectFromFormObject = (formObject) =>{
    return {
        description: formObject.description,
        width:formObject.width,
        weight:formObject.weight,
        height:formObject.height,
        depth:formObject.depth,
        from_name:formObject.from_name,
        from_address:formObject.from_address,
        from_location:{
            lon:formObject.from_Lon,
            lat:formObject.from_Lat
        },
        to_name:formObject.to_name,
        to_address:formObject.to_address,
        to_location:{
            lon:formObject.to_Lon,
            lat:formObject.to_Lat
        }   
    }
}