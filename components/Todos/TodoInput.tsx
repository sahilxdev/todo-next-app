'use client'

import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/store/todoSlice';

const TodoInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue.trim()));
      setInputValue('');
    }
  }, [inputValue, dispatch]);

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-4 p-6">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="py-2 px-4 w-96 rounded focus:outline-transparent text-black text-base font-medium"
        type="text"
        placeholder="Add a new todo"
        aria-label="Add a new todo"
      />
      <button
        type="submit"
        className="text-base font-medium p-2 rounded bg-green-500 hover:bg-green-600 text-black"
      >
        Add
      </button>
    </form>
  );
};

export default React.memo(TodoInput);