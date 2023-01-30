export const getData = (data) => {
    return {
        type : "GetData",
        payload:data
    }
}   
export const getTag = (data) => {
        return {
            type : "GetTag",
            payload:data
        }
    }
    
export const deleteTag = (data) => {
    return {
        type : "deleteTag",
        payload:data
    }
}
    
