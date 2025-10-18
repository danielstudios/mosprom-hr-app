export const AuthForm = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <p className="text-center text-4xl mb-4 text-medium">Авторизация</p>
      <div className="px-6 py-8 rounded-lg border border-gray-300 xl:w-1/5 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div>
              <label className="font-medium text-gray-500 text-lg">Почта</label>
              <input 
                className="rounded-lg border-gray-300 border h-10 outline-none hover:bg-gray-50 focus:border-rose-700 p-4 w-full mt-2"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="font-medium text-gray-500 text-lg">Пароль</label>
              <input
                className="rounded-lg border-gray-300 border h-10 outline-none hover:bg-gray-50 focus:border-rose-700 p-4 w-full mt-2"
                placeholder="Телефон"
              />
            </div>
        </div>
        <button className='bg-rose-700 rounded-lg p-3 text-white text-lg font-medium hover:bg-rose-800 active:bg-rose-900'>Войти</button>
      </div>
    </div>
  )
}