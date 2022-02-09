var markup = document.documentElement.innerHTML;
window.onload = function() {
    var count_styles_a = (markup.match(/style=/g) || []).length;
    count_styles_b = (markup.match(/<style>/g) || []).length;
    if (count_styles_a + count_styles_b > 2) {
        document.body.parentNode.innerHTML = "<p> ATTENTION, tu n'as PAS le droit de mettre tes propres definitions de style pour ce devoir, enleve-les et n'utilise seulement que les attributs pre-definis (did you think you could fool me? MOUAHAHA!!!)</p>";
    }
    
}
