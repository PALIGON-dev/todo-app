function TodoFilters({ filter, onFilterChange, activeCount }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <p>Осталось задач: {activeCount}</p>

      {['all', 'active', 'completed'].map(type => (
        <button
          key={type}
          onClick={() => onFilterChange(type)}
          style={{
            marginRight: '5px',
            background: filter === type ? 'blue' : 'gray',
            color: 'white'
          }}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default TodoFilters;