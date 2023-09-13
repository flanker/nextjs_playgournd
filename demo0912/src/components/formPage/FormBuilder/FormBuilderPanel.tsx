import {createFormStore} from "@/components/formPage/FormBuilder/store";
import {useStore} from "zustand";
import {useEffect} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {saveForm} from "@/lib/client_fetches";

const store = createFormStore()

export function FormBuilderPanel({formData}) {

  const {form, initData, changeName, changeDescription} = useStore(store, (state: any) => ({
    form: state.form,
    initData: state.initData,
    changeName: state.changeName,
    changeDescription: state.changeDescription,
  }))

  useEffect(() => {
    if (formData) {
      initData(formData)
    }
  }, [formData])

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: saveForm,
    onSuccess: data => {
      const update = data.form
      // queryClient.setQueryData(['forms', token], { ...form, ...update })
      queryClient.invalidateQueries({
        predicate: query => {
          return (query.queryKey as string[]).some(key => key.startsWith('forms'))
        },
      })
    },
  })

  const saveButtonClicked = () => {
    mutation.mutate({
      id: form.id,
      name: form.name,
      description: form.description,
    })
  }

  return (
    <div>
      <div>
        ID:
        {form.id}
      </div>
      <div>
        Name:
        <input type="text" value={form.name} onChange={e => changeName(e.target.value)}/>
      </div>
      <div>
        Description:
        <input type="text" value={form.description} onChange={e => changeDescription(e.target.value)}/>
      </div>
      <div>
        <button onClick={saveButtonClicked}>Save</button>
      </div>
    </div>
  )
}
