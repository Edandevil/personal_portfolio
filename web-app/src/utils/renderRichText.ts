// Helper function to render Strapi's rich text blocks format
export function renderRichText(data: any): string {
    // Handle null/undefined
    if (!data) {
        return '';
    }

    // Handle plain text string
    if (typeof data === 'string') {
        // Just return the string wrapped in a paragraph
        return `<p>${data}</p>`;
    }

    // Handle rich text blocks array
    if (Array.isArray(data)) {
        return data.map((block: any) => {
            if (block.type === 'paragraph') {
                const text = block.children?.map((child: any) => {
                    let str = child.text || '';
                    // Handle formatting
                    if (child.bold) str = `<strong>${str}</strong>`;
                    if (child.italic) str = `<em>${str}</em>`;
                    return str;
                }).join('') || '';
                return `<p>${text}</p>`;
            }
            if (block.type === 'heading') {
                const text = block.children?.map((child: any) => child.text || '').join('') || '';
                const level = block.level || 2;
                return `<h${level}>${text}</h${level}>`;
            }
            if (block.type === 'list') {
                const items = block.children?.map((item: any) => {
                    const itemText = item.children?.map((child: any) => child.text || '').join('') || '';
                    return `<li>${itemText}</li>`;
                }).join('') || '';
                const tag = block.format === 'ordered' ? 'ol' : 'ul';
                return `<${tag}>${items}</${tag}>`;
            }
            return '';
        }).join('');
    }

    // Unknown format, try to stringify
    console.warn('Unknown rich text format:', data);
    return '';
}
