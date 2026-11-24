export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.done ? 'todo done' : 'todo'}>
      <label>
        <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
        {todo.title}
      </label>
      <button onClick={() => onDelete(todo.id)} aria-label="Smazat">×</button>
    </li>
  );
}
