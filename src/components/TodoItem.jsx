import { useState } from 'react';

function TodoItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleSave = () => {
    if (text.trim()) {
      onEdit(task.id, text);
      setIsEditing(false);
    }
  };

  return (
    <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          autoFocus
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          style={{
            flex: 1,
            textDecoration: task.completed ? 'line-through' : 'none',
            cursor: 'pointer'
          }}
        >
          {task.text}
        </span>
      )}

      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </li>
  );
}

export default TodoItem;