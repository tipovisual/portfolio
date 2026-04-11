/**
 * ENGINE.JS - El motor dinámico de tu Portafolio
 */

// 1. Obtener el ID del proyecto desde la URL (ej: case.html?id=educastic-platform)
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

import { supabase } from './supabase-config.js';

async function loadProject() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('id'); // Antes era projectId

    if (!slug) return;

    try {
        // En lugar de fetch local, consultamos Supabase
        const { data: project, error } = await supabase
            .from('portfolio_projects')
            .select('*')
            .eq('slug', slug)
            .single();

        if (error) throw error;

        // Detectar idioma usando tu objeto Lang existente en i18n.js
        const lang = Lang.current; 

        // Inyectar usando tu lógica actual pero ajustada al objeto JSONB
        renderProject(project, lang);

    } catch (error) {
        console.error("Error:", error);
    }
}

function renderProject(data, lang) {
    // Antes: data.title o data.titleEs
    // Ahora:
    document.querySelector('.case-title').textContent = data.title[lang];
    document.querySelector('.case-cat').textContent = data.category[lang];
    
    // Lo mismo para el desafío y la historia
    document.querySelector('#challenge').textContent = data.story.challenge[lang];
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', loadProject);