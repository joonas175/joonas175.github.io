interface Formatter {
    regex: RegExp,
    method: (text : string) => string,
}

const dateFormat = ""

export const formatters : Formatter[] = [
    {
        // Years since
        regex: /{(years-since:(\d{4})-(\d{2})-(\d{2}))}/,
        method: (text) => {
            const regex = /(\d{4})-(\d{2})-(\d{2})/
            text = (text.match(regex) || [])[0]
            const date = new Date(text);
            const now = new Date();

            return (now.getFullYear() - date.getFullYear()).toString();
        }
    },
    {
        // Years since
        regex: /{(link:(.+):(.+:.+)})/,
        method: (text) => {
            const splits = text.split(':', 4);

            let url = [splits[2], splits[3]].join(":"); // Spaghetti
            url = url.substring(0, url.length - 1);

            return `<a href="${url}">${splits[1]}</a>`;
        }
    }
];


export const formatWithSpecialFormatters = (text : string) => {
    for(const formatter of formatters) {
        text = text.replace(formatter.regex, formatter.method);
    }
    return text;
}