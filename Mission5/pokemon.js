// PokeAPIからポケモン情報を取得し、HTMLに反映する関数
async function fetchPokemon(pokemonId) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if (!response.ok) throw new Error("ポケモンデータの取得に失敗しました");

        const pokemonData = await response.json();

        // ポケモン情報をHTMLに反映
        document.getElementById("txtNo").textContent = `No. ${pokemonData.id}`;
        document.getElementById("imgPokemon").src = pokemonData.sprites.front_default;
        document.getElementById("txtType").textContent = `タイプ: ${pokemonData.types.map(type => type.type.name).join(", ")}`;
        document.getElementById("txtPokemon").innerText = `英語名: ${pokemonData.name}`;
    } catch (error) {
        console.error("エラー:", error);
        document.getElementById("txtNo").textContent = "エラーが発生しました";
        document.getElementById("txtType").textContent = "";
        document.getElementById("txtPokemon").textContent = "";
    }
}

//ボタンをクリックしたときにイベント
document.getElementById("fetchButton").addEventListener("click", () => {
    const pokemonId = document.getElementById("pokemonId").value;
    if (pokemonId)
    {
        fetchPokemon(pokemonId);
    }
    else
    {
        alert("ポケモン番号を入力してください");
    }
})
