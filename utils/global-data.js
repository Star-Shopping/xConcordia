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