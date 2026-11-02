// --- ÉTAT DES TOUCHES (Indépendant de la disposition AZERTY/QWERTY) ---
const touches = {
    haut: false,   // Touche W (QWERTY) ou Z (AZERTY)
    gauche: false, // Touche A (QWERTY) ou Q (AZERTY)
    bas: false,    // Touche S
    droite: false  // Touche D
};

// Écouteur quand on appuie sur une touche
window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyW':
            touches.haut = true;
            break;
        case 'KeyA':
            touches.gauche = true;
            break;
        case 'KeyS':
            touches.bas = true;
            break;
        case 'KeyD':
            touches.droite = true;
            break;
    }
});

// Écouteur quand on relâche une touche
window.addEventListener('keyup', (e) => {
    switch (e.code) {
        case 'KeyW':
            touches.haut = false;
            break;
        case 'KeyA':
            touches.gauche = false;
            break;
        case 'KeyS':
            touches.bas = false;
            break;
        case 'KeyD':
            touches.droite = false;
            break;
    }
});
