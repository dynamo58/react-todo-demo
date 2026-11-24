import { useState } from 'react';
import TodoItem from './components/TodoItem';

const INITIAL_TODOS = [
  { id: '1', title: 'Vyřešit Erdősovy problémy', done: true },
  { id: '2', title: 'Dokázat Riemmanovu hypotézu', done: true },
  { id: '3', title: 'Vyvrátit P=NP', done: false },
  { id: '2', title: 'Vynést koš', done: false },
];

export default function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [newTitle, setNewTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = { id: crypto.randomUUID(), title: newTitle.trim(), done: false };
    setTodos([...todos, newTodo]);
    setNewTitle('');
  }

  function toggleTodo(id) {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const remaining = todos.filter((todo) => !todo.done).length;

  return (
    <main className="app">
      <form onSubmit={handleSubmit}>
        <input
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
          placeholder="Co je potřeba udělat?"
        />
        <button>Přidat</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </ul>

      <p className="remaining">Zbývá splnit: {remaining}</p>
    </main>
  );
}
