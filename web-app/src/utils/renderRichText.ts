interface RichTextNode {
    text?: string;
    bold?: boolean;
    italic?: boolean;
    children?: RichTextNode[];
}

interface RichTextBlock {
    type: string;
    level?: number;
    format?: 'ordered' | 'unordered';
    children?: RichTextNode[];
}

export function renderRichText(data: string | RichTextBlock[] | null | undefined): string {
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
        return data.map((block: RichTextBlock) => {
            if (block.type === 'paragraph') {
                const text = block.children?.map((child: RichTextNode) => {
                    let str = child.text || '';
                    // Handle formatting
                    if (child.bold) str = `<strong>${str}</strong>`;
                    if (child.italic) str = `<em>${str}</em>`;
                    return str;
                }).join('') || '';
                return `<p>${text}</p>`;
            }
            if (block.type === 'heading') {
                const text = block.children?.map((child: RichTextNode) => child.text || '').join('') || '';
                const level = block.level || 2;
                return `<h${level}>${text}</h${level}>`;
            }
            if (block.type === 'list') {
                const items = block.children?.map((item: RichTextNode) => {
                    const itemText = item.children?.map((child: RichTextNode) => child.text || '').join('') || '';
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
