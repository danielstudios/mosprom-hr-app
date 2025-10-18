import { mockVacancies } from "@/data/mockVacanciesList";
import { statuses } from "./vacancyList-const";
import { useState, useMemo } from "react";

const getStatusClasses = (status): string => {
  const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
  
  const statusClasses = {
    active: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    hidden: "bg-gray-100 text-gray-800",
    decline: "bg-red-100 text-red-800",
  };
  
  return `${baseClasses} ${statusClasses[status]}`;
};

const getStatusLabel = (status): string => {
  const labels = {
    active: 'Активная',
    pending: 'На рассмотрении',
    hidden: 'Скрыта',
    decline: 'Отклонена',
  };
  return labels[status];
};

const getDaysUntilExpire = (expiresAt: string) => {
    const today = new Date();
    const expireDate = new Date(expiresAt);
    const diffTime = expireDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};

type SortField = 'vacancyName' | 'companyName' | 'status' | 'views' | 'responses' | 'expiresAt';
type SortDirection = 'asc' | 'desc';

export const VacancyHrTable: React.FC = () => {
  const [sortField, setSortField] = useState<SortField>('vacancyName');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedVacancies = useMemo(() => {
    return [...mockVacancies].sort((a, b) => {
      let aValue: any = a[sortField];
      let bValue: any = b[sortField];

      // Специальная обработка для поля expiresAt (сортировка по дням до истечения)
      if (sortField === 'expiresAt') {
        aValue = getDaysUntilExpire(a.expiresAt);
        bValue = getDaysUntilExpire(b.expiresAt);
      }

      // Сортировка строк
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      // Сортировка чисел
      if (sortDirection === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
  }, [sortField, sortDirection]);

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return '↕';
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  return (
    <div> 
      <div className="overflow-x-auto bg-white rounded-lg border">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th 
                className="px-3 py-2 text-left font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('vacancyName')}
              >
                <div className="flex items-center gap-1">
                  Вакансия
                  <span className="text-xs">{getSortIcon('vacancyName')}</span>
                </div>
              </th>
              <th 
                className="px-3 py-2 text-left font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center gap-1">
                  Статус
                  <span className="text-xs">{getSortIcon('status')}</span>
                </div>
              </th>
              <th 
                className="px-3 py-2 text-center font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('views')}
              >
                <div className="flex items-center gap-1 justify-center">
                  Просмотры
                  <span className="text-xs">{getSortIcon('views')}</span>
                </div>
              </th>
              <th 
                className="px-3 py-2 text-center font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('responses')}
              >
                <div className="flex items-center gap-1 justify-center">
                  Отклики
                  <span className="text-xs">{getSortIcon('responses')}</span>
                </div>
              </th>
              <th 
                className="px-3 py-2 text-center font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('expiresAt')}
              >
                <div className="flex items-center gap-1 justify-center">
                  Срок
                  <span className="text-xs">{getSortIcon('expiresAt')}</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedVacancies.map((vacancy) => {
              const daysUntilExpire = getDaysUntilExpire(vacancy.expiresAt);
              const isExpired = daysUntilExpire < 0;

              return (
                <tr key={vacancy.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2">
                    <div className="font-medium text-gray-900">{vacancy.vacancyName}</div>
                    <div className="text-xs text-gray-500">{vacancy.professionType}</div>
                  </td>
                  <td className="px-3 py-2">
                    <span className={getStatusClasses(vacancy.status)}>
                      {getStatusLabel(vacancy.status)}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-center text-blue-600 font-medium">
                    {vacancy.views}
                  </td>
                  <td className="px-3 py-2 text-center text-green-600 font-medium">
                    {vacancy.responses}
                  </td>
                  <td className="px-3 py-2 text-center">
                    <span className={`text-xs font-medium ${
                      isExpired ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {isExpired ? 'Истекла' : `${daysUntilExpire}д`}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};