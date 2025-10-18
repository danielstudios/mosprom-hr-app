import React from 'react';
import { Navigate } from 'react-router';
import { USER_ROLE, useAuthStore} from '@stores/authStore';

const WithAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  allowedRoles?: typeof USER_ROLE[keyof typeof USER_ROLE][],
): React.FC<P> => {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const { isAuthenticated, user } = useAuthStore();
    
    // Если пользователь не авторизован - показываем форму логина
    if (!isAuthenticated || !user) {
      return <Navigate to='/signin' />;
    }
    
    // Если указаны роли и роль пользователя не подходит
    if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Доступ запрещен</h2>
          <p>У вас недостаточно прав для просмотра этой страницы</p>
          <p>Требуемые роли: {allowedRoles.join(', ')}</p>
          <p>Ваша роль: {user.role}</p>
        </div>
      );
    }
    
    // Если все проверки пройдены - рендерим компонент
    return <WrappedComponent {...props} />;
  };
  
  return ComponentWithAuth;
};

export default WithAuth;
