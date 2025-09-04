import { useState } from "react";

// TarefasItem.jsx
const TarefasItem = ({ tarefa, onEditTarefa, onDeleteTarefa }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [novoTexto, setNovoTexto] = useState(tarefa.texto);

    const handleEdit = () => {
        if (isEditing) {
            if (novoTexto.trim()) {
                onEditTarefa(tarefa.id, novoTexto)
            }
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }

    const handleDelete = () => {
        onDeleteTarefa(tarefa.id)
    }

    return (
        <li>
            {isEditing ? (
                <input type="text" value={novoTexto}
                    onChange={(e) => setNovoTexto(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleEdit()
                    }}
                    />
            ) : (
                <>{tarefa.texto}</>
            )}

            <button onClick={handleEdit}>✏️</button>
            <button onClick={handleDelete}>🗑️</button>
        </li>
    );
}

export default TarefasItem;