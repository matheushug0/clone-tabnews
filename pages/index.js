function Home() {
    return <div>
        <h1>QUER CASAR COMIGO ? 😎</h1>
        <form>
            <input id="yes" type="radio" checked/>
            <label name="yes">Sim</label>

            <input id="no" type="radio" disabled/>
            <label name="yes">Não</label>

                <div>
                    
                    <button><a href="https://www.guiadecasamento.com.br/lua-de-mel/roteiro-de-viagens/">Confirmar</a></button>
            </div>
        </form>
    </div>
}

export default Home;