import { useQuasar } from 'quasar'

export default function useNotify() {
  const $q = useQuasar();

  /**
   * @description
   * notify 출력 함수
   * 
   * @param { string } type - 'positive' || 'negative' || 'primary' 
   * @param { string } msg - 출력할 메시지
   */
  const showNotify = (type, msg) => {
    $q.notify({
      message: msg,
      color: type
    });
  }

  return { showNotify };
}