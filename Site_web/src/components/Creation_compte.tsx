export const Creation_compte = () => {
    return(
        <section className="mb-4">
            <h1>Création de compte</h1>

            <form className="mt-5">
                <label className="block" htmlFor="id">Identifiant</label>
                <input className="border" type="text" name="id" id="id" />

                <label className="block" htmlFor="pswd">Mot de passe</label>
                <input className="border" type="password" name="pswd" id="pswd" />

                <label className="block" htmlFor="pswd">Confirmer le mot de passe</label>
                <input className="border" type="password" name="pswd" id="pswd" />                
            </form>
        </section>
    )
}