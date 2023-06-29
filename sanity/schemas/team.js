const team = {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
        {
            name: 'fullname',
            title: 'Full Name',
            type: 'string'
        },
        {
            name: 'sortorder',
            title: 'Sort order',
            type: 'number'
        },
        {
            name: 'job',
            title: 'Job',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'seo',
            title: 'SEO About (summary)',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'visibility',
            title: 'Visibility',
            type: 'boolean',
            initialValue: true
        },
        {
           name: 'instagram',
           title: 'Instagram',
           type: 'string',
        },
        {
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'string'
        },
        {
            name: 'facebook',
            title: 'Facebook',
            type: 'string'
        },
        {
            name: 'behance',
            title: 'Behance',
            type: 'string'
        },
        {
            name: 'twitter',
            title: 'Twitter',
            type: 'string'
        },
        {
            name: 'customsite',
            title: 'Custom site',
            type: 'string'
        },
    ],
    orderings: [
        {
            title: 'Given order',
            name: 'sortOrder',
            by: [
                {field: 'sortorder', direction: 'asc'}
            ]
        } 
    ]
};

export default team;