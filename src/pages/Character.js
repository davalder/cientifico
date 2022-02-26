const Character = () => {
    const view = `
        <div class="Characters-inner">
            <articule class="Characters-card">
                <img src="image" alt="name">
                <h2>Name</h2>
            </articule>
            <articule class="Characters-card">
                <h3>Episodes:</h3>
                <h3>Status:</h3>
                <h3>Species:</h3>
                <h3>Gender:</h3>
                <h3>Origin:</h3>
                <h3>Last Location:</h3>
            </articule>
        </div>
    `;
    return view;
};

export default Character;