
quotes = [{    
    text: "O Rio está sempre de braços abertos para responder as mudanças",
    banner: "Brazil_-_Rio_de_Janeiro.jpg"
}, {
    text: "Entregar software frequentemente é a forma mais inteligente de saber se o caminho está correto.",
    banner: "craftsmanship-cover.jpg"
}, {
    text: "Desenvolver Software é a arte de cultivar a informação de forma que ela cresça naturalmente através de mãos distintas.",
    banner: "BXK17779_caxadaco-ilha-grande800.jpg"
}, {
    text: "Nós acreditamos que é o trabalho em equipe que gera o valor que o cliente espera.",
    banner: "maracana-stadium-rio-de-janeiro-city-wallpapers-1024x768.jpg"
}];


$(function() {
    var q = quotes[~~ (Math.random() * quotes.length)];
    var $banner = $("banner");    
    $banner.find(".excerpt h2").text(q.text);
    $banner.css({
        backgroundImage: 'url(/themes/default/img/banner/' + q.banner + ')'
    });
});