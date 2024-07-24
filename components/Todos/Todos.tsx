'use client'

import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { RootState } from '@/store/store';

const Todos: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);

  const sortedTodos = useMemo(() => {
    const undoneTodos = todos.filter(todo => !todo.done);
    const doneTodos = todos.filter(todo => todo.done);
    return [...undoneTodos, ...doneTodos];
  }, [todos]);

  return (
    <div className="bg-[#565151] min-h-screen text-white">
      <h1 className="text-center pt-8 pb-4 text-4xl font-bold">Todos</h1>
      <TodoInput />
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;