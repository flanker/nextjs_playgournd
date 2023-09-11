"use client"

import {useState} from "react";
import {useAppStore} from "@/lib/store";

export default function FormBuilder(props: { formToken: any }) {
  const {formByToken, updateForm} = useAppStore()

  const [form, setForm] = useState(formByToken(props.formToken));

  function handleFormNameChange(event: any) {
    setForm({...form, name: event.target.value});
  }

  function handleFormDescriptionChange(event: any) {
    setForm({...form, description: event.target.value});
  }

  function handleSaveClick() {
    if (form) {
      updateForm(form)
    }
  }

  return (
    <>
      <div>
        <label>Form Name:
          <input type='text' value={form?.name} onChange={handleFormNameChange}/>
        </label>
      </div>
      <div>
        <label>Form Description:
          <textarea value={form?.description || ''} onChange={handleFormDescriptionChange}/>
        </label>
      </div>
      <div>
        <button>Add Entry</button>
        <button>Delete Entry</button>
      </div>
      <div>
        <button onClick={handleSaveClick}>Save</button>
      </div>
    </>
  );
}
