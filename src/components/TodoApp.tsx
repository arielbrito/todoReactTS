import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {
    const [tarea, setTarea] = useState<string>('')
    const [listaTareas, setListaTareas] = useState<string[]>([])

 const handleAddTask = () => {
        if (tarea.trim() === '') return
        setListaTareas([...listaTareas, tarea])
        setTarea('')
    }

    const borrarTarea = (index: number) => {
        const newListaTareas = listaTareas.filter((_, i) => i !== index)
        setListaTareas(newListaTareas)
    }

  
  return (
    <>
        <h1>Lista de Tareas</h1>
        <div>
            <input type="text" value={tarea} onChange={(e)=>setTarea(e.target.value)} placeholder="Nueva Tarea" />
            <button onClick={handleAddTask} >Agregar</button>
        </div>
        <ListaTareas listaTareas={listaTareas} borrarTarea={borrarTarea} />

    </>
  )
}