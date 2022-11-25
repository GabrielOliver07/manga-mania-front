function FormCadastroManga() {
    return (
        <div className="form">
            <h2>Add Mangá</h2>
            <form>
                <div className="items-form">
                    <input placeholder="Nome do manga..." type="text" />
                    <input placeholder="Descrição do mangá ..." type="test" />
                    <input placeholder="Ano de publicação ..." type="test" />
                    <input placeholder="Status..." type="test" />
                    <input placeholder="Categoria..." type="text" />
                    <input placeholder="Nome do autor ..." type="test" />
                    <input placeholder="Numero de capitulos ..." type="test" />
                    <input placeholder="Add img ..." type="URL" />
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}
export default FormCadastroManga;