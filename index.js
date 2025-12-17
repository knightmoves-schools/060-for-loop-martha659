function markAsDone(todos) {
  return todos.map(todo => {
    return {
      ...todo,
      description: 'done - ' + todo.description
    };
  });
}

