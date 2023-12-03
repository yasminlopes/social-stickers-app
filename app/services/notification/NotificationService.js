import Toast from 'react-native-toast-message';

export class NotificationService {
  
  static notify(response) {
    const toastType = response?.message ? 'success' : 'error'

    const toastMessage = response?.message || response?.error || 'Erro interno'

    Toast.show({
      type: toastType,
      text1: toastMessage
    })
  }
}
