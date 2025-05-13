class TodoWidget extends HTMLElement {
    constructor() {
      super();
      this.classList.add('widget', 'widget-large');
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.loadTodos();
    }
  
    loadTodos() {
      // Simulate today's synced calendar events
      const events = [
        { time: '08:30 AM', text: 'Morning workout', done: false },
        { time: '10:00 AM', text: 'Team meeting', done: false },
        { time: '1:00 PM', text: 'Finish project outline', done: true }
      ];
  
      const container = this.shadowRoot.getElementById('todos');
      container.innerHTML = events.map((event, i) => `
        <div class="todo">
          <input type="checkbox" id="task-${i}" ${event.done ? 'checked' : ''}>
          <label for="task-${i}"><strong>${event.time}</strong> – ${event.text}</label>
        </div>
      `).join('');
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .todo {
            display: flex;
            align-items: center;
            margin-bottom: 0.4rem;
          }
          input[type="checkbox"] {
            margin-right: 0.6rem;
          }
          label {
            font-size: 0.95rem;
          }
        </style>
        <div id="todos">Loading tasks...</div>
      `;
    }
  }
  
  customElements.define('todo-widget', TodoWidget);