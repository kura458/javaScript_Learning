
"use strict";

const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");
const characterCount = document.getElementById("character-count");

/**
 * Converts supported Markdown syntax into HTML.
 * @returns {string} The converted HTML.
 */
function convertMarkdown() {
    let markdown = markdownInput.value;

    // 1. Convert images before links.
    markdown = markdown.replace(
        /!\[([^\]]*)\]\(([^)]+)\)/g,
        '<img alt="$1" src="$2">'
    );

    // 2. Convert links.
    markdown = markdown.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2">$1</a>'
    );

    // 3. Convert bold text containing nested italic text.
    markdown = markdown.replace(
        /\*\*(.*?)\*(.*?)\*\*\*/g,
        "<strong>$1<em>$2</em></strong>"
    );

    // 4. Convert bold text using double asterisks.
    markdown = markdown.replace(
        /\*\*(.+?)\*\*/g,
        "<strong>$1</strong>"
    );

    // 5. Convert bold text using double underscores.
    markdown = markdown.replace(
        /__(.+?)__/g,
        "<strong>$1</strong>"
    );

    // 6. Convert italic text using single asterisks.
    markdown = markdown.replace(
        /(?<!\*)\*([^*]+)\*(?!\*)/g,
        "<em>$1</em>"
    );

    // 7. Convert italic text using single underscores.
    markdown = markdown.replace(
        /(?<!_)_([^_]+)_(?!_)/g,
        "<em>$1</em>"
    );

    // 8. Convert level-three headings.
    markdown = markdown.replace(
        /^[ \t]*### (.+)$/gm,
        "<h3>$1</h3>"
    );

    // 9. Convert level-two headings.
    markdown = markdown.replace(
        /^[ \t]*## (.+)$/gm,
        "<h2>$1</h2>"
    );

    // 10. Convert level-one headings.
    markdown = markdown.replace(
        /^[ \t]*# (.+)$/gm,
        "<h1>$1</h1>"
    );

    // 11. Convert blockquotes.
    markdown = markdown.replace(
        /^[ \t]*> (.+)$/gm,
        "<blockquote>$1</blockquote>"
    );

    // 12. Remove line breaks between converted elements.
    return markdown.replace(/\r?\n/g, "");
}

/**
 * Updates the raw HTML, live preview and character counter.
 */
function updateConverter() {
    const convertedHTML = convertMarkdown();

    htmlOutput.textContent = convertedHTML;
    preview.innerHTML = convertedHTML;

    characterCount.textContent =
        `${markdownInput.value.length} characters`;
}

// Update the converter whenever the user types.
markdownInput.addEventListener("input", updateConverter);

// Display the initial character count.
updateConverter();
