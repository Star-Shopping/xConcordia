const headers = new Headers();
headers.set('520', 'Bearer <276377ba5206683e51d50fb86c378dc5>');

const response = await fetch('https://opendata.concordia.ca/API/v1/library/occupancy/', {
    method: 'GET',
    headers: headers,
});

const json = await response.json();
console.log(json);

export const getGlobalData = () => {
    const name = process.env.BLOG_NAME ?
        decodeURI(process.env.BLOG_NAME) :
        'xConcordia';
    const blogTitle = process.env.BLOG_TITLE ?
        decodeURI(process.env.BLOG_TITLE) :
        'xConcordia';
    const footerText = process.env.BLOG_FOOTER_TEXT ?
        decodeURI(process.env.BLOG_FOOTER_TEXT) :
        'yeeeeeeeeee buddyyyyy.';

    return {
        name,
        blogTitle,
        footerText,
    };
};