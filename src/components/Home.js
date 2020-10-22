import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div style={{ height: "100%", position: "relative" }}>
        <h1 style={{ position: "absolute", width: "100%" }}>RICARDO DARIN</h1>
        <div className="CardAtt">
          <div className="CardColumn">
            <Card className="Card">
              <CardActionArea>
                <CardContent className="CardContent">
                  <Typography gutterBottom variant="h5" component="h2">
                    Formulario
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ display: "flex", textAlign: "left" }}
                  >
                    Ingrese sus datos: nombre, apellido, sexo e indique si
                    padeció COVID.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to="./form"
                >
                  Ingresar datos
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="CardColumn">
            <Card className="Card">
              <CardActionArea>
                <CardContent className="CardContent">
                  <Typography gutterBottom variant="h5" component="h2">
                    Tabla de Formulario
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ display: "flex", textAlign: "left" }}
                  >
                    Datos ingresados
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to="./forms_table"
                >
                  Tabla de Formulario
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
