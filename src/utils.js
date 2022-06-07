const validateArray = (data,setErrorMsg, setShowAlert) => {
  for (const key in data){
    let element = data[key]
    if(element === null || element === "" ){
      setErrorMsg("All the fields are required. Type only integers or floats.");
      return setShowAlert(true)
    }
    element = parseFloat(element);
  }
  let dataKeys = Object.keys(data);
  let newArray = [];
  dataKeys.forEach(element => {
      newArray.push(parseFloat(data[element]))
  });
  return newArray
};

const initialValues = {
  age: "",
  gender: "0",
  cp: "",
  trestbps: "",
  chol: "",
  fbs: "",
  restecg: "",
  thalach: "",
  exang: "",
  oldpeak: "",
  slope: "",
  ca: "",
  thal: "",
}

export { validateArray, initialValues };
