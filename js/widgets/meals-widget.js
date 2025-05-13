class MealWidget extends HTMLElement {
    constructor() {
      super();
      this.classList.add('widget', 'widget-large');
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.loadMeals();
    }
  
    async loadMeals() {
      // Simulated fetch from Perplexity
      const meals = [
        {
          type: "Breakfast",
          title: "Greek Yogurt Protein Parfait",
          recipe: "Layer plain Greek yogurt with oats, almond butter, sliced banana, and a sprinkle of chia seeds."
        },
        {
          type: "Lunch",
          title: "Egg & Bean Wrap",
          recipe: "Scramble 2 eggs with canned black beans and salsa. Wrap in a whole wheat tortilla with cheese."
        }
      ];
  
      const container = this.shadowRoot.getElementById('meals');
      container.innerHTML = meals.map(meal => `
        <div class="meal">
          <strong>${meal.type}:</strong> ${meal.title}<br>
          <span class="recipe">${meal.recipe}</span>
        </div>
      `).join('');
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .meal {
            margin-bottom: 1rem;
          }
          .recipe {
            font-size: 0.85rem;
            display: block;
            margin-top: 0.25rem;
            color: #444;
          }
        </style>
        <div id="meals">Fetching today’s meals...</div>
      `;
    }
  }
  
  customElements.define('meal-widget', MealWidget);