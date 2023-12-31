import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { validarEmail, validarPassword } from "./validaciones";

const  DatosUsuario = () => {
  const [email, setEmail] = useState({
    value: 'Josei',
    valid: null});
  const [password, setPassword] = useState({
    value: '',
    valid: null
  })

    return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={(e) =>{
          e.preventDefault()
          if (email.valid && password.valid) {
            console.log("Siguiente formulario");
            console.log(email, password);
          } else {
            console.log("No hacer nada");
          }
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={email.valid === false}
          helperText={email.valid === false && "Ingresa un correo electrónico válido"}
          value={email.value}
          onChange={(input) => {
            const email =  input.target.value
            const valido = validarEmail(email)
            setEmail({value: email, valid: valido})

            }   
          }
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          error={password.valid === false}
          helperText={password.valid === false && "Ingrese una contraseña valida, Almenos 8 caracteres y maximo 20"}
          value={password.value}
          onChange={(input) => {
            const password =  input.target.value
            validarPassword(password);
            setPassword({value: password, valid: validarPassword(password)})

            }
          }
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  }


export default DatosUsuario;
