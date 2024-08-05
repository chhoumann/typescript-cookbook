/**
 * @typedef {Object} Article
 * @property {number} price
 * @property {string} name
 * @property {boolean=} sold
 */

/**
 *
 * @param {[Article]} articles
 * @returns {number}
 */
function totalAmount(articles) {
    return articles.reduce((acc, article) => acc + article.price, 0);
}
