import {CollectionConfig} from 'payload/types';

export const Collaborators: CollectionConfig = {
    slug: 'collaborators',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {name: 'name', type: 'text', required: true},
        {name: 'description', type: 'textarea', required: true},
        {name: 'profilePictureURI', type: 'text', required: true},
        {name: 'personalPortfolioURI', type: 'text', required: false},
    ],
};
