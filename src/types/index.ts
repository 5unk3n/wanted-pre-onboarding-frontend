export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface ToastProps {
  message: string;
  $type: 'error' | 'success';
  duration?: number;
}
