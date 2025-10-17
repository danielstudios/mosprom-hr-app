import { useEffect } from 'react';
import type { ReactNode } from 'react';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto';
  title?: string;
  showCloseButton?: boolean;
  overlay?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  preventBodyScroll?: boolean;
  className?: string;
  overlayClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  position = 'right',
  size = 'md',
  title,
  showCloseButton = true,
  overlay = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  preventBodyScroll = true,
  className = '',
  overlayClassName = '',
  headerClassName = '',
  bodyClassName = '',
}) => {
  // Закрытие по ESC
  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, closeOnEscape]);

  // Блокировка скролла body
  useEffect(() => {
    if (!preventBodyScroll) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, preventBodyScroll]);

  const getSizeClasses = () => {
    const horizontalSizeMap = {
      sm: 'w-80',
      md: 'w-96',
      lg: 'w-[480px]',
      xl: 'w-[600px]',
      full: 'w-full',
      auto: 'w-auto',
    };

    const verticalSizeMap = {
      sm: 'h-64',
      md: 'h-96',
      lg: 'h-[480px]',
      xl: 'h-[600px]',
      full: 'h-full',
      auto: 'h-auto',
    };

    if (position === 'top' || position === 'bottom') {
      return verticalSizeMap[size];
    }
    return horizontalSizeMap[size];
  };

  const getPositionClasses = () => {
    const positionMap = {
      left: 'left-0 top-0 h-full',
      right: 'right-0 top-0 h-full',
      top: 'top-0 left-0 w-full',
      bottom: 'bottom-0 left-0 w-full',
    };
    return positionMap[position];
  };

  const getTransformClasses = () => {
    if (!isOpen) {
      const transformMap = {
        left: '-translate-x-full',
        right: 'translate-x-full',
        top: '-translate-y-full',
        bottom: 'translate-y-full',
      };
      return transformMap[position];
    }
    return 'translate-x-0 translate-y-0';
  };

  const getOverlayTransition = () => {
    return isOpen ? 'opacity-100' : 'opacity-0';
  };

  const getDrawerTransition = () => {
    return isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      {overlay && (
        <div
          className={`
            absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out
            ${getOverlayTransition()}
            ${overlayClassName}
          `}
          onClick={closeOnOverlayClick ? onClose : undefined}
        />
      )}

      {/* Drawer Panel */}
      <div
        className={`
          absolute ${getPositionClasses()} ${getSizeClasses()}
          bg-white shadow-xl transition-all duration-300 ease-in-out
          flex flex-col
          ${getTransformClasses()} ${getDrawerTransition()}
          ${className}
        `}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className={`
            flex items-center justify-between p-4 border-b border-gray-200
            ${headerClassName}
          `}>
            {title && (
              <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="
                  p-2 rounded-lg hover:bg-gray-100 
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                "
                aria-label="Close drawer"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className={`
          flex-1 overflow-auto
          ${bodyClassName}
        `}>
          {children}
        </div>
      </div>
    </div>
  );
};
