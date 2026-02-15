import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Nicolás Espinosa Estrada'
    },
    title: 'Nicolás Espinosa',
    subtitle: 'Ingeniería de Sistemas - Universidad El Bosque',
    description: 'Portafolio profesional de Nicolás Espinosa Estrada, enfocado en redes, infraestructura e ingeniería de sistemas.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Nicolás Espinosa - Portafolio'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Presentación',
            href: '/blog'
        },
        {
            text: 'Github',
            href: 'https://github.com/Gattocho888'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/nicolas-espinosa-estrada-605618343'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/nicolas_espinosa8/?hl=es-la'
        },
    ],
    hero: {
        title: '¡Hola! Bienvenido a mi entorno tecnológico',
        text: "Soy **Nicolás Espinosa Estrada**, estudiante de **Ingeniería de Sistemas en la Universidad El Bosque** (Bogotá, Colombia).\n\nMe especializo en redes, telecomunicaciones e infraestructura tecnológica. Mi enfoque está en la optimización de sistemas y la gestión de entornos críticos, buscando siempre mejorar la estabilidad operativa y la seguridad. Actualmente desarrollo habilidades avanzadas en infraestructura, bases de datos y software para ofrecer soluciones técnicas de alto impacto.",
        image: {
            src: hero,
            alt: 'Nicolás Espinosa trabajando en infraestructura y redes'
        },
        actions: [
            {
                text: 'Ver Proyectos',
                href: '/projects'
            }
        ]
    },
    subscribe: {
        enabled: false, // Desactivado por ahora, puedes activarlo si tienes un newsletter
        title: 'Suscríbete a mis actualizaciones',
        text: 'Recibe información sobre mis últimos proyectos en infraestructura y redes.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;