import request from '@/utils/request'
export default {
  // 分页查询讲师
  getPageList(page, limit) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'get'
    })
  },

  // 获取特点讲师的详情信息
  getTeacherInfo(teacherId) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontInfo/${teacherId}`,
      method: 'get'
    })
  }
}
