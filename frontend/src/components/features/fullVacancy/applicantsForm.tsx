export const ApplicantsForm = () => {
  return (
    <div className="px-6 py-8 rounded-lg border border-gray-300 xl:w-1/3 flex flex-col gap-8">
        <p className="text-rose-700 text-2xl font-medium">Анкета соискателя</p>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <input 
              className="rounded-lg border-gray-300 border h-10 outline-none hover:bg-gray-50 focus:border-rose-700 p-4 w-full"
              placeholder="ФИО"
            />
          </div>
          <div>
            <input 
              className="rounded-lg border-gray-300 border h-10 outline-none hover:bg-gray-50 focus:border-rose-700 p-4 w-full"
              placeholder="Телефон"
            />
          </div>
          <div>
            <input 
              className="rounded-lg border-gray-300 border h-10 outline-none hover:bg-gray-50 focus:border-rose-700 p-4 w-full"
              placeholder="Email"
            />
          </div>
          <div>
            <label 
              htmlFor="uploadResume" 
              className="size-full flex rounded-lg border-gray-300 border h-10 outline-none hover:bg-gray-50 items-center p-4 cursor-pointer text-rose-700 font-medium"
            >Приложить резюме</label>
            <input className="hidden" type="file" id="uploadResume" name="uploadResume" accept=".html, .pdf, .docx"></input>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <label className='flex gap-2'><input type="checkbox" />Я согласен на обработку персональных данных</label>
              <label className='flex gap-2'><input type="checkbox" />Даю согласие на получение рассылок</label>
            </div>
            <button className='bg-rose-700 rounded-lg p-3 text-white text-lg font-medium hover:bg-rose-800 active:bg-rose-900'>Отправить анкету</button>
          </div>
        </div>
    </div>
  )
}