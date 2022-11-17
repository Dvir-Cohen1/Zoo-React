import { createContext, useState, useContext } from "react";

const FormContext = createContext();
const UpdateFormContext = createContext();

// const MockDataContext = createContext();
// const UpdateMockDataContext = createContext();

export function useFormContext() {
     return useContext(FormContext);
}
export function useUpdateFormContext() {
     return useContext(UpdateFormContext);
}
export default function ZooContextProvider({ children }) {

     const formValues = {
          name: "asd",
          age: "asd",
          type: "asd",
          photoUrl: "asd",
     };

     const [formdata, setData] = useState(formValues);
console.log(formdata)
     const handleSubmit = (event) => {
          event.preventDefault()
          if (!formValues.name || !formValues.age || !formValues.type || !formValues.photoUrl) return
          const data = { ...formValues }
          setData(data);
     }

     return (
          <FormContext.Provider value={formdata}>
               <UpdateFormContext.Provider value={handleSubmit} >
                    {children}
               </UpdateFormContext.Provider>
          </FormContext.Provider>
     )
}

