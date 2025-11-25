export const TITLE_CONFIG = Object.freeze([
    {maxLevel: 1, title: "Apprentice"},
    {maxLevel: 8, title: "Warrior"},
    {maxLevel: 9, title: "Vanquisher of Nogartse"},
    {maxLevel: Infinity, title: "Distinguished Knight"}
]);

export function calculateTitle(playerLevel) {
    if (!Number.isInteger(playerLevel ?? playerLevel <  1)) {
        throw new Error(`Invalid player level: ${playerLevel}`);
    }
    const config = TITLE_CONFIG.find(cfg => playerLevel <= cfg.maxLevel);
    return config?.title?? "Unknown";
}