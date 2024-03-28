import { CloseIconModal } from '../CloseIconModal/CloseIconModal';

export function Modal({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed z-50 top-0 flex justify-center items-center min-w-full min-h-full bg-black bg-opacity-80">
            <CloseIconModal />
            {children}
        </div>
    );
}
