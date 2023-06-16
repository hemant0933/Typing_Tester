import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "../Context/ThemeContext";


const TableUserData = ({ data }) => {
  const { theme } = useTheme();

  // console.log(data)
  const tableCellStyle = {
    color: theme.textColor,
    textAlign: "center",
  };
  const tableBody = data.map((obj,index) => (
            <TableRow key={index+'A'}>
              <TableCell style={tableCellStyle}>{index+1}</TableCell>
              <TableCell style={tableCellStyle}>{obj.wpm}</TableCell>
              <TableCell style={tableCellStyle}>{obj.accuracy}</TableCell>
              <TableCell style={tableCellStyle}>{obj.characters}</TableCell>
              <TableCell style={tableCellStyle}>{obj.timeStamp.toDate().toLocaleString()}</TableCell>
            </TableRow>
  ))


  return (
    <div className="table">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={tableCellStyle}>S.No</TableCell>
              <TableCell style={tableCellStyle}>WPM</TableCell>
              <TableCell style={tableCellStyle}>Acurracy</TableCell>
              <TableCell style={tableCellStyle}>Characters</TableCell>
              <TableCell style={tableCellStyle}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

                {tableBody}
          </TableBody>

        </Table>
      </TableContainer>
    </div>
  );
};

export default TableUserData;
