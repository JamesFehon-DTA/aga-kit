import { generateSlots, knobNumber, knobRadios, knobText, randomLinks, shouldRender } from '../../00-base/base.utils';

import CivicThemeServiceCard from './service-card.twig';

export default {
  title: 'Molecules/Service Card',
  parameters: {
    layout: 'centered',
    storyLayoutSize: 'small',
  },
};

export const ServiceCard = (parentKnobs = {}) => {
  const knobs = {
    theme: knobRadios(
      'Theme',
      {
        Light: 'light',
        Dark: 'dark',
      },
      'light',
      parentKnobs.theme,
      parentKnobs.knobTab,
    ),
    title: knobText('Title', 'Services category title across one or two lines', parentKnobs.title, parentKnobs.knobTab),
    links: randomLinks(knobNumber(
      'Number of links',
      5,
      {
        range: true,
        min: 0,
        max: 10,
        step: 1,
      },
      parentKnobs.number_of_links,
      parentKnobs.knobTab,
    ), 10),
    modifier_class: knobText('Additional class', '', parentKnobs.modifier_class, parentKnobs.knobTab),
    attributes: knobText('Additional attributes', '', parentKnobs.attributes, parentKnobs.knobTab),
  };

  return shouldRender(parentKnobs) ? CivicThemeServiceCard({
    ...knobs,
    ...generateSlots([
      'content_top',
      'content_bottom',
    ]),
  }) : knobs;
};
