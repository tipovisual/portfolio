const i18n = {
  en: {
    nav: { home: 'Home', about: 'About', work: 'Work', contact: 'Contact' },
    hero: {
      tag: 'Available for new projects',
      name: 'Freddy Gonzalez',
      title: 'UX/UI Designer',
      sub: 'Crafting intuitive and accessible products that prioritize usability, functionality, and visual harmony.',
      cta: 'View My Work',
      contact: 'Get in Touch'
    },
    work: { label: 'Selected Work', title: 'Case Studies', sub: 'Selected projects that showcase my design process', viewAll: 'View All Work', viewCase: 'View Case Study' },
    about: {
      label: 'About Me', title: 'About Me',
      bio: 'A graphic design background ignited my passion for how people interact with technology. This curiosity led me to the world of Human-Computer Interaction (HCI), where I discovered the power of user-centered design. Now, I leverage this knowledge to bridge the gap between technical possibilities and user needs. I create intuitive and accessible products that prioritize usability and functionality, all while maintaining a keen eye for visual harmony.',
      download: 'Download Resume',
      location: 'Panamá, Ciudad de Panamá',
      email: 'tipovisual@gmail.com',
      skillsTitle: 'Skills',
      techSkills: 'Technical Skills',
      softSkills: 'Soft Skills',
      tools: 'Tools',
      expTitle: 'Experience',
      eduTitle: 'Education',
      present: 'Present'
    },
    contact: {
      label: 'Contact', title: 'Get In Touch',
      sub: 'Interested in working together? I\'m always open to discussing new projects, creative ideas, or opportunities.',
      email: 'Email', phone: 'Phone', location: 'Location',
      formTitle: 'Send Me a Message',
      name: 'Name', emailField: 'Email', message: 'Message',
      send: 'Send Message',
      success: '✅ Message sent! I\'ll get back to you soon.'
    },
    case: {
      back: '← Back to Work',
      role: 'Role', duration: 'Duration', tools: 'Tools',
      challenge: 'The Challenge', process: 'The Process',
      research: 'Research', ideation: 'Ideation',
      wireframes: 'Wireframes', testing: 'Testing',
      solution: 'The Solution', results: 'Results',
      learnings: 'Learnings', next: 'Next Project'
    },
    footer: { copy: '© 2024 Freddy Gonzalez. All rights reserved.' }
  },
  es: {
    nav: { home: 'Inicio', about: 'Sobre Mí', work: 'Trabajo', contact: 'Contacto' },
    hero: {
      tag: 'Disponible para nuevos proyectos',
      name: 'Freddy Gonzalez',
      title: 'Diseñador UX/UI',
      sub: 'Creando productos intuitivos y accesibles que priorizan la usabilidad, funcionalidad y armonía visual.',
      cta: 'Ver Mi Trabajo',
      contact: 'Contáctame'
    },
    work: { label: 'Trabajo Selecto', title: 'Casos de Estudio', sub: 'Proyectos seleccionados que muestran mi proceso de diseño', viewAll: 'Ver Todo', viewCase: 'Ver Caso' },
    about: {
      label: 'Sobre Mí', title: 'Sobre Mí',
      bio: 'Un trasfondo en diseño gráfico encendió mi pasión por cómo las personas interactúan con la tecnología. Esta curiosidad me llevó al mundo de la Interacción Humano-Computadora (HCI), donde descubrí el poder del diseño centrado en el usuario. Creo productos intuitivos y accesibles que priorizan la usabilidad y la funcionalidad, todo mientras mantengo un ojo atento a la armonía visual.',
      download: 'Descargar Currículum',
      location: 'Panamá, Ciudad de Panamá',
      email: 'tipovisual@gmail.com',
      skillsTitle: 'Habilidades',
      techSkills: 'Habilidades Técnicas',
      softSkills: 'Habilidades Blandas',
      tools: 'Herramientas',
      expTitle: 'Experiencia',
      eduTitle: 'Educación',
      present: 'Presente'
    },
    contact: {
      label: 'Contacto', title: 'Contáctame',
      sub: '¿Interesado en trabajar juntos? Siempre estoy dispuesto a discutir nuevos proyectos e ideas creativas.',
      email: 'Correo', phone: 'Teléfono', location: 'Ubicación',
      formTitle: 'Envíame un Mensaje',
      name: 'Nombre', emailField: 'Correo', message: 'Mensaje',
      send: 'Enviar Mensaje',
      success: '✅ ¡Mensaje enviado! Me pondré en contacto contigo pronto.'
    },
    case: {
      back: '← Volver al Trabajo',
      role: 'Rol', duration: 'Duración', tools: 'Herramientas',
      challenge: 'El Desafío', process: 'El Proceso',
      research: 'Investigación', ideation: 'Ideación',
      wireframes: 'Wireframes', testing: 'Pruebas',
      solution: 'La Solución', results: 'Resultados',
      learnings: 'Aprendizajes', next: 'Siguiente Proyecto'
    },
    footer: { copy: '© 2024 Freddy Gonzalez. Todos los derechos reservados.' }
  }
};

// Language manager
const Lang = {
  current: localStorage.getItem('lang') || 'en',
  get: function(key) {
    const keys = key.split('.');
    let val = i18n[this.current];
    keys.forEach(k => val = val && val[k]);
    return val || key;
  },
  toggle: function() {
    this.current = this.current === 'en' ? 'es' : 'en';
    localStorage.setItem('lang', this.current);
    window.location.reload();
  },
  cs: function(cs, field) {
    return this.current === 'es' && cs[field + 'Es'] ? cs[field + 'Es'] : cs[field];
  }
};
