module.exports = {
    root: true,
    extends: ["turbo", "prettier"],
    rules: {
        "@next/next/no-html-link-for-pages": "off",
        "react/jsx-key": "off",
    },
    settings: {
        next: {
            rootDir: ["/"],
        },
    },
};