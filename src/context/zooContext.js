import { createContext, useState, useContext } from "react";

const FormContext = createContext();
const UpdateFormContext = createContext();

export function useFormContext() {
     return useContext(FormContext);
}
export function useUpdateFormContext() {
     return useContext(UpdateFormContext);
}

export default function ZooContextProvider({ children }) {
     const formValues = {
          name: "",
          age: "",
          type: "",
          photoUrl: "",
     };

     const [formdata, setData] = useState(formValues);



     return (
          <FormContext.Provider value={formdata}>
               <UpdateFormContext.Provider value={setData} >
                    {children}
               </UpdateFormContext.Provider>
          </FormContext.Provider>
     )
}

