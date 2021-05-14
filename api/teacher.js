import request from '@/utils/request'
export default {
  // 分页查询讲师
  getPageList(page, limit) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'get'
    })
  }
}
