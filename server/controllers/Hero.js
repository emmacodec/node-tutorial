/**
 * Get /
 * Homepenu
 */

exports.homepage = async (req, res) => {
    const locals = {
        title: 'NodeJs practice',
        description: 'Free NodeJs Notes App.',
    };

    res.render('index', locals);
}


/**
 * Get /
 * About
 */

exports.about = async (req, res) => {
    const locals = {
        title: 'All About NodeJs',
        description: 'Free NodeJs Notes App.',
    };

    res.render('about', locals);
}