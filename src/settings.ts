export const profile = {
	fullName: 'Lucas Petruccelli',
	title: 'Ingeniero Mecánico',
	shortTitle: 'Ing.',
	institute: 'Universidad Tecnológica Nacional (F.R.S.F.)',
	author_name: '', // Author name to be highlighted in the papers section
	research_areas: [
		 { title: 'Acero Inoxidable', description: 'Diseño de equipos sanitarios para la industria alimenticia y famaceutica.', field: 'Metalúrgica' },
		 { title: 'Diseño CAD', description: 'Manejo fluido de Solidworks, AutoCAD y Fusion360.', field: 'Metalúrgica' },
		 { title: 'Gestión de equipos', description:'Coordinación de personal para tareas de mantenimiento y montaje.', field: 'Metalúrgica' }
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'lucaspetru98@hotmail.com',
	linkedin: 'https://www.linkedin.com/in/lucas-francisco-petruccelli-a23603162/',
	x: '',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'corporate', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'business', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '/curriculum' // Repository name starting with /
}

export const seo = {
	default_title: 'Ing. Lucas Petruccelli',
	default_description: 'Online resume of a mechanical engineer',
	default_image: '/images/astro-academia.png',
}
