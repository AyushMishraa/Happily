// this will return the path which type we want
export const getImageUrl=(path)=>{
    return new URL(`/assets/${path}`,import.meta.url).href;
 };