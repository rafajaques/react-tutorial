// TarefasForm.jsx
import { useState } from "react";

const TarefasForm = ({ onAddTarefa }) => {
    const [tarefa, setTarefa] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Não deixa trocar de página

        if (tarefa.trim()) {
            onAddTarefa(tarefa.trim())
            setTarefa('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite sua tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
                />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default TarefasForm;