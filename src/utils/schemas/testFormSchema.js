import * as yup from "yup";

export const testSchema = yup.object({
  email: yup
    .string()
    .required("이메일은 필수 항목입니다")
    .email("올바른 이메일 형태가 아닙니다"),
  password: yup.string().required('비밀번호는 필수 항목입니다').min(6, '패스워드는 최소 6자리'),
  desc: yup
    .string()
    .required("상세설명은 필수 항목입니다")
    .min(20, "최소 20자 이상을 작성해야 합니다"),
  agreeStatus: yup.boolean().test('agreeStatus', '동의 여부는 필수로 체크하셔야 합니다', function (value) {
    if (!value) return false;
    else return true
  }),
  startDate: yup
    .date()
    .required('시작날짜는 필수 항목입니다')
    .test("startDate", '종료날자보단 작아야 해요', function (value) {
      const endDate = this.parent.endDate;
      if (!value || !endDate) {
        return true
      }
      return new Date(value) < new Date(endDate);
    }),
  endDate: yup
    .date()
    .required('종료날짜는 필수 항목입니다'),
  level: yup
    .number()
    .required('level은 필수 항목입니다')
});