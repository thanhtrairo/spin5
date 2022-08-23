function createDataUniform(number, name, image, type, store) {
  return {
    number,
    name,
    image,
    type,
    store,
  }
}

export const rowsUniform = [
  createDataUniform(
    '1',
    ['Sales staff - Male 0', 'No1'],
    [
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
    ],
    ['Message - Email', 'Message - Email'],
    ['store1', 'store2', 'store3', 'store4', 'store5']
  ),
  createDataUniform(
    '1',
    ['Sales staff - Male 0', 'No1'],
    [
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
    ],
    ['Message - Email', 'Message - Email'],
    ['store1', 'store2', 'store3', 'store4', 'store5']
  ),
  createDataUniform(
    '1',
    ['Sales staff - Male 0', 'No1'],
    [
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
      'https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
    ],
    ['Message - Email', 'Message - Email'],
    ['store1', 'store2', 'store3', 'store4', 'store5']
  ),
]

export const headerCellsUniform = ['', 'Number', 'Uniform Name', 'Image Model', 'Uniform Type', 'Store/Area', 'Activity', 'Edit']
export const headerCellsRule = ['', 'Number', 'Rule Name', 'Valid Date', 'Shedule', 'Leave Position time', 'Alert Type', 'Store/Area', 'Activity', 'Edit']

function createDataRule(number, name, date, she, time, type, store) {
  return {
    number,
    name,
    date,
    she,
    time,
    type,
    store,
  }
}
export const rowsRule = [
  createDataRule(
    '1',
    ['Sales staff - Male 0', 'No1'],
    ['22/03/2002', '22/03/2002'],
    ['22/03/2002', '22/03/2002'],
    '10 min',
    ['Message - Email', 'Message - Email'],
    ['store1', 'store2', 'store3', 'store4', 'store5']
  ),
  createDataRule(
    '1',
    ['Sales staff - Male 0', 'No1'],
    ['22/03/2002', '22/03/2002'],
    ['22/03/2002', '22/03/2002'],
    '10 min',
    ['Message - Email', 'Message - Email'],
    ['store1', 'store2', 'store3', 'store4', 'store5']
  ),
  createDataRule(
    '1',
    ['Sales staff - Male 0', 'No1'],
    ['22/03/2002', '22/03/2002'],
    ['22/03/2002', '22/03/2002'],
    '10 min',
    ['Message - Email', 'Message - Email'],
    ['store1', 'store2', 'store3', 'store4', 'store5']
  ),
]
