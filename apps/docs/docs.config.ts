

interface DocsConfig {
  [key: string]: ({
    title: string;
    href: string;
    disabled?: boolean;
  } | {
    title: string;
    disabled?: boolean;
    items: {
      title: string;
      href: string;
      disabled?: boolean;
      badge?: string;
    }[];
  })[];
};

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Guides',
      href: '/guides',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
        },
        {
          title: 'Installation',
          href: '/docs/instructions/installation',
          disabled: true,
        },
        {
          title: 'Configuration',
          href: '/docs/instructions/configuration',
          disabled: true,
        },
        {
          title: 'File Structure',
          href: '/docs/instructions/file-structure',
          disabled: true,
        },
        {
          title: 'Routing',
          href: '/docs/instructions/routing',
          disabled: true,
        },
        {
          title: 'Deployment',
          href: '/docs/instructions/deployment',
          disabled: true,
        },
      ],
    },
    {
      title: 'Templates',
      items: [
        {
          title: 'Base',
          href: '/templates/base',
          disabled: true,
        },
        {
          title: 'Blueprint',
          href: '/templates/blueprint',
          disabled: true,
        }
      ],
    },
    {
      title: 'Design',
      items: [
        {
          title: 'Icons',
          href: '/docs/design/icons',
        },
        {
          title: 'Colors',
          href: '/docs/design/colors',
        },
        {
          title: 'Grid',
          href: '/docs/design/grid',
        },
        {
          title: 'Typography',
          href: '/docs/design/typography',
        },
        {
          title: 'Spacing',
          href: '/docs/design/spacing',
        },
        {
          title: 'Breakpoints',
          href: '/docs/design/breakpoints',
        },
        {
          title: 'Shadows',
          href: '/docs/design/shadows',
        },
        {
          title: 'Transitions',
          href: '/docs/design/transitions',
        },
        {
          title: 'Borders',
          href: '/docs/design/borders',
        },
      ],
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Button',
          href: '/docs/components/button',
        }
      ],
    },
  ],
}
