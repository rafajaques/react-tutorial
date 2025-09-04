// AppTarefas.jsx
import { useState } from "react";
import TarefasForm from "./TarefasForm";
import TarefasLista from "./TarefasLista";

const AppTarefas = () => {
    const [tarefas, setTarefas] = useState([]);

    const addTarefa = (texto) => {
        const novaTarefa = {
            id: Date.now(), // Usamos a data, pois não temos gerenciamento de ID sem um backend
            texto: texto,
        };

        setTarefas([...tarefas, novaTarefa]);
    }

    const editTarefa = (id, novoTexto) => {
        setTarefas(tarefas.map(
            tarefa => tarefa.id === id ? { ...tarefa , texto: novoTexto } : tarefa
        ));
    }

    const deleteTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
    }

    return (
        <div>
            <h1>💡 Keepão React</h1>
            <TarefasForm onAddTarefa={addTarefa} />
            <TarefasLista
                tarefas={tarefas}
                onEditTarefa={editTarefa}
                onDeleteTarefa={deleteTarefa}
                />
        </div>
    );
}

export default AppTarefas;