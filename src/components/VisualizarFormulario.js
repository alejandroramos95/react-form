import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function VisualizarFormulario() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => response.json())
        .then((json) => setUserData(json));
    }
    fetchData();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">userId</TableCell>
              <TableCell align="right">TITLE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log("userdata", userData)}
            {userData.length ? (
              userData.map((row) => (
                <>
                  {console.log("row", row)}
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.userId}</TableCell>
                    <TableCell align="right">{row.title}</TableCell>
                    <TableCell align="right">{row.completed}</TableCell>
                  </TableRow>
                </>
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
