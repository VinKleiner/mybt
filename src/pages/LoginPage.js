const LoginPage = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Вхід на сайт</h1>

            <form className="mt-4">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Пароль</label>
                    <input type="password" className="form-control" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Увійти</button>
            </form>
        </div>
    )
}

export default LoginPage;