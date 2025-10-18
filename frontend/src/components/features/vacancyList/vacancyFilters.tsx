import { useMatch } from "react-router";

export const VacancyFilters = () => {
  const hrMode = useMatch('/myvacancy');

  const renderHrFilters = () => (
    <div>
      <p className="text-lg font-medium text-rose-700">Статус</p>
        <div className="flex gap-2">
          <input type="checkbox" name="education" id="notSpecifiedEd" />
          <label htmlFor="notSpecifiedEd">На рассмотрении</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="education" id="higherEd" />
          <label htmlFor="higherEd">Активная</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="education" id="secondaryEd" />
          <label htmlFor="secondaryEd">Скрыта</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="education" id="secondaryEd" />
          <label htmlFor="secondaryEd">Отклонена</label>
        </div>
    </div>
  )

  return (
    <div className={`px-4 py-6 rounded-lg border border-gray-300 h-full flex gap-4 ${hrMode ? 'flex-row' : 'flex-col'}`}>
      {hrMode && renderHrFilters()}
      <div>
        <p className="text-lg font-medium text-rose-700">Тип</p>
        <div className="flex gap-2">
          <input type="radio" name="vacancyType" id="Internship" />
          <label htmlFor="Internship">Стажировка</label>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="vacancyType" id="Vacancy" />
          <label htmlFor="Vacancy">Вакансия</label>
        </div>
      </div>
      <div>
        <p className="text-lg font-medium text-rose-700">Специализация</p>
        <select className="text-base">
          <option>Производство</option>
          <option>Разработка</option>
          <option>Создание</option>
        </select>
      </div>
      <div>
        <p className="text-lg font-medium text-rose-700">Опыт работы</p>
        <div className="flex gap-2">
          <input type="radio" name="workExp" id="noExp" />
          <label htmlFor="noExp">Нет опыта</label>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="workExp" id="exp1to3" />
          <label htmlFor="exp1to3">От 1 года до 3 лет</label>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="workExp" id="exp3to6" />
          <label htmlFor="exp3to6">От 3 до 6 лет</label>
        </div>
      </div>
      <div>
        <p className="text-lg font-medium text-rose-700">Образование</p>
        <div className="flex gap-2">
          <input type="checkbox" name="education" id="notSpecifiedEd" />
          <label htmlFor="notSpecifiedEd">Не требуется</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="education" id="higherEd" />
          <label htmlFor="higherEd">Высшее</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="education" id="secondaryEd" />
          <label htmlFor="secondaryEd">Среднее профессиональное</label>
        </div>
      </div>
    </div>
  )
};