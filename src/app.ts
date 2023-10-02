function ex1(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
        return false;
    }
    const charCount = new Map<string, number>();
    for (const char of str1) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (const char of str2) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char)! - 1);
        } else {
            return false;
        }
    }
    return Array.from(charCount.values()).every(count => count === 0);
}
