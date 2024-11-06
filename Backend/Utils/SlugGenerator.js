const generateSlug = (name) => {
    return name
        .toLowerCase() // Convert to lowercase
        .trim() // Remove whitespace from both ends
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
        .replace(/^-+|-+$/g, ''); // Trim any leading or trailing hyphens
}

module.exports = generateSlug;