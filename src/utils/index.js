export async function fetchRecipes(filter) {
    const { query, limit } = filter;
  
    // Properly referencing your app_id and app_key as strings
    const appId = '6b8b776b';
    const appKey = 'db936d40ff497a890630d077881103ff';
  
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=${limit}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    return data?.hits;
  }
  
  export async function fetchRecipe(id) {
    const appId = '6b8b776b';
    const appKey = 'db936d40ff497a890630d077881103ff';
  
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${appId}&app_key=${appKey}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    return data[0];
  }
  