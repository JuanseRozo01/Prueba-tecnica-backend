// Ejercicio 1: Consumo de APIs
// Crea una aplicación Node.js que consuma la API de GitHub y muestre los 10 repositorios 
// más populares del usuario "google".

const axios = require("axios");

async function getRepositories() {
    try {
      const response = await axios.get('https://api.github.com/users/google/repos?per_page=10&sort=stargazers');
      const repos = response.data;
  
      console.log('Los 10 repositorios más populares de google, son:');
      repos.forEach(repo => {
        console.log(repo.name, '-', repo.stargazers_count, 'estrellas');
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  getRepositories()