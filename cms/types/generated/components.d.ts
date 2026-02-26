import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectProcess extends Struct.ComponentSchema {
  collectionName: 'components_project_processes';
  info: {
    description: '';
    displayName: 'Process';
    icon: 'project-diagram';
  };
  attributes: {
    heading: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'project.process-step', true>;
  };
}

export interface ProjectProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_project_process_steps';
  info: {
    description: '';
    displayName: 'Process Step';
    icon: 'layer-group';
  };
  attributes: {
    description: Schema.Attribute.Text;
    number: Schema.Attribute.String & Schema.Attribute.DefaultTo<'01'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
  };
}

export interface SharedMarqueeItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_marquee_items';
  info: {
    description: '';
    displayName: 'Marquee Item';
    icon: 'quote';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_items';
  info: {
    description: '';
    displayName: 'Service Item';
    icon: 'bulletList';
  };
  attributes: {
    categories: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'share-alt';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['facebook', 'twitter', 'instagram', 'dribbble', 'linkedin', 'youtube']
    > &
      Schema.Attribute.DefaultTo<'facebook'>;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.process': ProjectProcess;
      'project.process-step': ProjectProcessStep;
      'shared.link': SharedLink;
      'shared.marquee-item': SharedMarqueeItem;
      'shared.service-item': SharedServiceItem;
      'shared.social-link': SharedSocialLink;
    }
  }
}
