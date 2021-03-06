/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import Loadable from '../Loadable';

type Page = {
  component: React$ComponentType<*>,
  description: string,
  id?: string,
  path: string,
  hiddenInNav?: boolean,
  title: string
};

type Pages = Array<Page>;

type Section = {
  heading: string,
  pages: Pages
};

const sections: Array<Section> = [
  {
    heading: 'Guidelines',
    pages: [
      {
        component: Loadable({
          loader: () => import('./GettingStarted')
        }),
        description:
          'Mineral UI’s React component library helps you quickly build elegantly accessible apps. Use npm or yarn to install components and themes tested across modern browsers.',
        path: '/getting-started',
        title: 'Getting Started'
      },
      {
        component: Loadable({
          loader: () => import('./Color')
        }),
        description:
          'Make your apps beautiful and accessibile with Mineral UI color palettes and themes.',
        path: '/color',
        title: 'Color'
      },
      {
        component: Loadable({
          loader: () => import('./Typography')
        }),
        description:
          'Mineral UI provides a simple set of typographic elements to easily apply structure to your interface.',
        path: '/typography',
        title: 'Typography'
      }
    ]
  },
  {
    heading: 'What’s New',
    pages: [
      {
        component: Loadable({
          loader: () => import('./ComponentStatus')
        }),
        description:
          'Check back here anytime to see current component status information for Mineral UI. Check our GitHub for issues or to suggest a new feature!',
        path: '/component-status',
        title: 'Component Status'
      },
      {
        component: Loadable({
          loader: () => import('./Roadmap')
        }),
        description:
          'Mineral UI is committed to stable and predictable releases. Learn more about our plans for the future.',
        path: '/roadmap',
        title: 'Roadmap'
      }
    ]
  },
  {
    heading: 'Customization',
    pages: [
      {
        component: Loadable({
          loader: () => import('./Styling')
        }),
        description:
          'Mineral UI is built on a design system with styles ready to go out of the box. Learn the techniques for customizing styles in your application.',
        path: '/styling',
        title: 'Styling'
      },
      {
        component: Loadable({
          loader: () => import('./Theming')
        }),
        description:
          'Theming is a core concept in Mineral UI. Mineral UI makes it simple to implement and maintain theming across your app.',
        path: '/theming',
        title: 'Theming'
      },
      {
        component: Loadable({
          loader: () => import('./PaletteDemo')
        }),
        description:
          'Select from the main theme colors in the picker to see how components are affected. Mineral UI themes are composed of a main color ramp and the base gray ramp.',
        path: '/palette-demo',
        title: 'Palette Demo'
      }
    ]
  }
];

export default sections;
