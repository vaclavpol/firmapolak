const levaGalerie = `
    <div class="side-gallery">
        <div class="item"><img src="obrazky/chotilsko.jpg"><p>Chotilsko</p></div>
        <div class="item"><img src="obrazky/svate_pole.jpg"><p>Svaté Pole</p></div>
    </div>
`;

const pravaGalerie = `
    <div class="side-gallery">
        <div class="item"><img src="obrazky/picin.jpg"><p>Pičín</p></div>
        <div class="item"><img src="obrazky/prestavlky.jpg"><p>Přestavlky</p></div>
    </div>
`;

// Vloží obsah do připravených ID
if(document.getElementById('vlevo')) {
    document.getElementById('vlevo').innerHTML = levaGalerie;
}
if(document.getElementById('vpravo')) {
    document.getElementById('vpravo').innerHTML = pravaGalerie;
}