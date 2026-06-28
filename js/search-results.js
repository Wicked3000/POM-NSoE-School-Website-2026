document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    if (query) {
        displaySearchResults(query);
    } else {
        showNoResults();
    }
});

function displaySearchResults(query, categoryFilter = 'all') {
    const searchQueryDisplay = document.getElementById('query-text');
    const resultsCount = document.getElementById('result-count');
    const searchResults = document.getElementById('search-results');
    const noResults = document.getElementById('no-results');

    searchQueryDisplay.textContent = `"${query}"`;

    const allResults = searchInData(query);

    populateCategoryFilter(allResults);

    const results = categoryFilter === 'all' ? allResults : allResults.filter(result => result.category === categoryFilter);

    if (results.length > 0) {
        resultsCount.textContent = results.length;
        noResults.style.display = 'none';
        searchResults.innerHTML = '';

        results.forEach(result => {
            const resultElement = createResultElement(result, query);
            searchResults.appendChild(resultElement);
        });
    } else {
        showNoResults();
    }
}

function searchInData(query) {
    const searchTerm = query.toLowerCase();
    const results = [];

    searchData.forEach(page => {
        let score = 0;
        let matches = [];
        let matchedSection = null;

        if (page.title.toLowerCase().includes(searchTerm)) {
            score += 10;
            matches.push({ type: 'title', text: page.title });
        }

        page.keywords.forEach(keyword => {
            if (keyword.toLowerCase().includes(searchTerm)) {
                score += 5;
                matches.push({ type: 'keyword', text: keyword });
            }
        });

        if (page.sections) {
            page.sections.forEach(section => {
                const contentWords = section.content.toLowerCase().split(' ');
                contentWords.forEach(word => {
                    if (word.includes(searchTerm)) {
                        score += 1;
                        if (!matchedSection) matchedSection = section.id;
                        if (matches.length < 3) {
                            matches.push({ type: 'content', text: word });
                        }
                    }
                });
            });
        } else if (page.content) {
            const contentWords = page.content.toLowerCase().split(' ');
            contentWords.forEach(word => {
                if (word.includes(searchTerm)) {
                    score += 1;
                    if (matches.length < 3) {
                        matches.push({ type: 'content', text: word });
                    }
                }
            });
        }

        if (score > 0) {
            results.push({
                ...page,
                score: score,
                matches: matches,
                section: matchedSection
            });
        }
    });

    return results.sort((a, b) => b.score - a.score);
}

function createResultElement(result, query) {
    const resultDiv = document.createElement('div');
    resultDiv.className = 'search-result-item';

    const categoryClass = getCategoryClass(result.category);
    const linkUrl = result.section ? `${result.url}#${result.section}` : result.url;

    resultDiv.innerHTML = `
        <a href="${linkUrl}" class="result-link">
            <div class="result-header">
                <h3>${highlightText(result.title, query)}</h3>
                <span class="result-category ${categoryClass}">${result.category}</span>
            </div>
            <p class="result-content">${highlightText(getSnippet(result, query), query)}</p>
            <div class="result-matches">
                ${result.matches.slice(0, 3).map(match => `<span class="match-tag">${match.text}</span>`).join('')}
            </div>
        </a>
    `;

    return resultDiv;
}

function highlightText(text, query) {
    if (!query || !text) return text;
    try {
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    } catch (e) {
        return text;
    }
}

function getSnippet(result, query) {
    const searchTerm = query.toLowerCase();
    let content = result.content;

    if (result.sections && result.section) {
        const matchedSection = result.sections.find(sec => sec.id === result.section);
        if (matchedSection) {
            content = matchedSection.content;
        }
    }

    const sentences = content.split('.');
    const relevantSentence = sentences.find(sentence =>
        sentence.toLowerCase().includes(searchTerm)
    );

    if (relevantSentence) {
        return relevantSentence.trim() + '.';
    }

    return content.substring(0, 100) + '...';
}

function populateCategoryFilter(results) {
    const categoryFilter = document.getElementById('category-filter');
    const currentValue = categoryFilter.value;
    const categories = new Set();

    results.forEach(result => {
        categories.add(result.category);
    });

    categoryFilter.innerHTML = '<option value="all">All</option>';

    Array.from(categories).sort().forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryFilter.appendChild(option);
    });

    categoryFilter.value = currentValue;

    categoryFilter.removeEventListener('change', handleFilterChange);

    categoryFilter.addEventListener('change', handleFilterChange);
}

function handleFilterChange() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    displaySearchResults(query, this.value);
}

function getCategoryClass(category) {
    const categoryClasses = {
        'main': 'category-main',
        'about': 'category-about',
        'admissions': 'category-admissions',
        'academics': 'category-academics',
        'gallery': 'category-gallery',
        'students': 'category-students'
    };
    return categoryClasses[category] || 'category-default';
}

function showNoResults() {
    const noResults = document.getElementById('no-results');
    const searchResults = document.getElementById('search-results');

    noResults.style.display = 'block';
    searchResults.innerHTML = '';
    document.getElementById('result-count').textContent = '0';
}