import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    maxWidth: "1135.5px",
    borderRadius: "8px",
    backgroundColor: "#f6f4f5",
    fontSize: "14px",
    color: "black",
    boxSizing: "border-box",
    padding: "11px 0 10px",
  },
  imageCustomer: {
    width: 110,
    height: 80,
  },
  headerCell: {
    fontWeight: "bold ",
    padding: "0 ",
    borderBottom: "0.5px solid #8d8e91 ",
  },
  bodyCell: {
    fontWeight: "500 ",
    padding: "0 ",
    borderBottom: "0.5px solid #8d8e91 ",
  },
  iconEvent: {
    width: 24,
    height: 24,
    color: "#ec1b2e",
  },
  rootIcon: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
  },
});

function createData(
  stt,
  date,
  timeIn,
  timeOut,
  id,
  name,
  gender,
  age,
  type,
  img
) {
  return {
    stt,
    date,
    timeIn,
    timeOut,
    id,
    name,
    gender,
    age,
    type,
    img,
  };
}

const rows = [
  createData(
    1,
    "25/04/2022",
    "7:66:00",
    "8:00:00",
    52696,
    "Nguyễn Thuỳ Trang",
    "Nữ",
    30,
    "Vip",
    "https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg"
  ),
  createData(
    1,
    "25/04/2022",
    "7:66:00",
    "8:00:00",
    52695,
    "Nguyễn Thuỳ Trang",
    "Nữ",
    30,
    "Vip",
    "https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg"
  ),
  createData(
    1,
    "25/04/2022",
    "7:66:00",
    "8:00:00",
    52694,
    "Nguyễn Thuỳ Trang",
    "Nữ",
    30,
    "Vip",
    "https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg"
  ),
  createData(
    1,
    "25/04/2022",
    "7:66:00",
    "8:00:00",
    52693,
    "Nguyễn Thuỳ Trang",
    "Nữ",
    30,
    "Vip",
    "https://teddystudio.vn/wp-content/uploads/2020/05/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg"
  ),
];

const headerCells = [
  "STT",
  "Ngày",
  "Giờ vào",
  "Giờ ra",
  "ID khách hàng",
  "Tên khách hàng",
  "Giới tính",
  "Tuổi",
  "KH",
  "Hình ảnh khách hàng",
  "Event ghi nhận",
];

function DetailList() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow style={{ height: "60px" }}>
            {headerCells.map((headerCell) => (
              <TableCell
                className={classes.headerCell}
                align="center"
                key={headerCell}
              >
                {headerCell}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} style={{ height: "100px" }}>
              <TableCell className={classes.bodyCell} align="center">
                {row.stt}
              </TableCell>
              <TableCell className={classes.bodyCell} align="center">
                {row.date}
              </TableCell>
              <TableCell className={classes.bodyCell} align="center">
                {row.timeIn}
              </TableCell>
              <TableCell className={classes.bodyCell} align="center">
                {row.timeOut}
              </TableCell>
              <TableCell className={classes.bodyCell} align="center">
                {row.id}
              </TableCell>
              <TableCell className={classes.bodyCell} align="center">
                {row.name}
              </TableCell>
              <TableCell className={classes.bodyCell} align="center">
                {row.gender}
              </TableCell>
              <TableCell className={classes.bodyCell} align="center">
                {row.age}
              </TableCell>
              <TableCell className={classes.bodyCell} align="center">
                {row.type}
              </TableCell>
              <TableCell className={classes.bodyCell} align="center">
                <img
                  alt="customer"
                  src={row.img}
                  className={classes.imageCustomer}
                />
              </TableCell>
              <TableCell align="center" className={classes.bodyCell}>
                <Box className={classes.rootIcon}>
                  <PlayCircleFilledIcon className={classes.iconEvent} />
                  <GetAppIcon className={classes.iconEvent} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DetailList;
