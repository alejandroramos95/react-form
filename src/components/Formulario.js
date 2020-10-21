import React, { useState } from "react";
import {
  TextField,
  Select,
  Checkbox,
  Button,
  InputLabel,
  FormControl,
  makeStyles,
  MenuItem,
} from "@material-ui/core";
import VisualizarFormulario from "./VisualizarFormulario"

export default function Formulario() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("");
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [validation, setValidation] = useState(false);

  const handleNameChange = (event) => {
    const tempRegEx = /^[a-zA-Z]+$/;
    let result = event.target.value.match(tempRegEx);
    console.log("res", result);
    if (result && lastName.match(tempRegEx)) {
      setValidation(false);
    } else {
      setValidation(true);
    }
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    const tempRegEx = /^[a-zA-Z]+$/;
    let result = event.target.value.match(tempRegEx);
    console.log("res2", result);
    if (result && name.match(tempRegEx)) {
      setValidation(false);
    } else {
      setValidation(true);
    }
    setLastName(event.target.value);
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const handleCheckedChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    let user = { nombre: name, apellido: lastName, sexo: sex, covid: checked };
    let mapBoolean = { true: "Si", false: "No" };
    console.log("usuario", user);
    alert(
      `Nombre: ${name}, Apellido: ${lastName}, Sexo: ${sex}, Covid: ${mapBoolean[checked]}`
    );
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <p></p>
        <br></br>
        <TextField
          id="outlined-basic"
          label="Ingrese su Nombre"
          variant="outlined"
          onChange={handleNameChange}
          type="text"
        />
        <p></p>
        <br></br>
        <TextField
          id="outlined-basic"
          label="Ingrese su Apellido"
          variant="outlined"
          onChange={handleLastNameChange}
          type="text"
        />
        <p></p>
        <br></br>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleSexChange}
          >
            <MenuItem value={"Masculino"}>Masculino</MenuItem>
            <MenuItem value={"Femenino"}>Femenino</MenuItem>
          </Select>
        </FormControl>

        <br></br>
        <p>
          Padeció COVID?
          <Checkbox
            checked={checked}
            onChange={handleCheckedChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </p>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={validation}
        >
          Enviar
        </Button>
      </form>
      <VisualizarFormulario ejemplo={["aasd","gdfgdfg"]}></VisualizarFormulario>
    </>
  );
}
