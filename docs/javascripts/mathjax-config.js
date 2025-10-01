window.MathJax = {
    tex:{
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$','$$'], ['\\[','\\]']],
        tags: 'ams',             // auto-number equations
        tagSide: 'right',
        tagIndent: '0.8em',
        macros: {
        R: '{\\mathbb{R}}',
        E: '{\\mathbb{E}}',
        T: '{\\mathsf{T}}',
        diag: '\\operatorname{diag}'
        }
    },
    options: { skipHtmlTags: ['script','noscript','style','textarea','pre'] }
};