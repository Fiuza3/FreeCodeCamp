document.querySelector('#search-button').addEventListener('click', async () => {
  const searchValue = document.querySelector('#search-input').value.trim().toLowerCase();
  if (!searchValue) return;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`);
    if (!response.ok) throw new Error('Creature not found');

    const data = await response.json();

    // Preenche campos
    document.querySelector('#creature-name').textContent = data.name.toUpperCase();
    document.querySelector('#creature-id').textContent = `#${data.id}`;
    document.querySelector('#weight').textContent = `Weight: ${data.weight}`;
    document.querySelector('#height').textContent = `Height: ${data.height}`;
    document.querySelector('#hp').textContent = data.stats[0].base_stat;
    document.querySelector('#attack').textContent = data.stats[1].base_stat;
    document.querySelector('#defense').textContent = data.stats[2].base_stat;
    document.querySelector('#special-attack').textContent = data.stats[3].base_stat;
    document.querySelector('#special-defense').textContent = data.stats[4].base_stat;
    document.querySelector('#speed').textContent = data.stats[5].base_stat;

    // Limpa e adiciona tipos
    const typesContainer = document.querySelector('#types');
    typesContainer.innerHTML = '';
    data.types.forEach(t => {
      const div = document.createElement('div');
      div.textContent = t.type.name.toUpperCase();
      typesContainer.appendChild(div);
    });

  } catch (error) {
    console.error(error);
  }
});