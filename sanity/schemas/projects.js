const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'sortorder',
            title: 'Sort order',
            type: 'number'
        },
        {
            name: 'description',
            title: 'Description',
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
           name: 'url',
           title: 'URL',
           type: 'url' 
        },
        {
            name: 'preferenced',
            title: 'Preferenced (landing page)',
            type: 'boolean',
            initialValue: true
        },
        {
            name: 'visibility',
            title: 'Visibility',
            type: 'boolean',
            initialValue: true
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alternative text',
                            type: 'string'
                        },
                        {
                            name: 'size',
                            title: 'Size - (rounded, small, medium, large)',
                            type: 'string'
                        }
                    ]
                },
            ],
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

export default project;