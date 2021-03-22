import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "20px",
    minWidth: "1444px",
  },
  TextField: {
    width: "70%",
  },
  button: {
    margin: "0px 0px 5px 0px",
  },
}));


const conceptosFacturaBuild = () => {
  return (
    <>
      <Grid item xs={2}>
        <TextField label="FUL" variant="outlined" />
      </Grid>
      <Grid item xs={1}>
        <TextField label="Cantidad" variant="outlined" />
      </Grid>
      <Grid item xs={1}>
        <TextField label="Concepto" variant="outlined" />
      </Grid>
      <Grid item xs={1}>
        <TextField label="Unidad" variant="outlined" />
      </Grid>
      <Grid item xs={2}>
        <TextField label="Precio Unitario" variant="outlined" />
      </Grid>
      <Grid item xs={2}>
        <TextField label="Importe linea" variant="outlined" />
      </Grid>
      <Grid item xs={1}>
        <TextField label="Tasa IVA" variant="outlined" />
      </Grid>
    </>
  );
};

const conceptosNotaCredito = () => {
  return (
    <>
      <Grid item xs={2}>
        <TextField label="FUL" variant="outlined" />
      </Grid>
      <Grid item xs={2}>
        <TextField label="Concepto" variant="outlined" />
      </Grid>
      <Grid item xs={2}>
        <TextField label="Importe original" variant="outlined" />
      </Grid>
      <Grid item xs={2}>
        <TextField label="Importe modificado" variant="outlined" />
      </Grid>
      <Grid item xs={2}>
        <TextField label="Tasa IVA" variant="outlined" />
      </Grid>
    </>
  );
};

export default function Main() {
  const classes = useStyles();
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [cuentaDelOrdenDelPM, setCuentaDelOrdenDelPM] = useState("");
  const [FUF, setFUF] = useState("");
  const [periodoECD, setPeriodoECD] = useState("");
  const [fechaLimDePago, setFechaLimDePago] = useState("");
  const [contacto, setContacto] = useState("");
  const [banco, setBanco] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [cuenta, setCuenta] = useState("");
  const [CLABE, setCLABE] = useState("");
  const [referencia, setReferencia] = useState("");
  
  //Conceptos factura
  const [FUL, setFUL] = useState([]);
  const [cantidad, setCantidad] = useState([]);
  const [concepto, setConcepto] = useState([]);
  const [unidad, setUnidad] = useState([]);
  const [precioUnitario, setPrecioUnitario] = useState([]);
  const [importeLinea, setImporteLinea] = useState([]);
  const [tasaIVA, setTasaIVA] = useState([]);

  //Conceptos nota de crédito/cargo
  const [FULCredito, setFULCredito] = useState([]);
  const [conceptoCredito, setConceptoCredito] = useState([]);
  const [importeOriginal, setImporteOriginal] = useState([]);
  const [importeModificado, setImporteModificado] = useState([]);
  const [tasaIVACredito, setTasaIVACredito] = useState([]);
  


  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
      <h1>Solario facturación</h1>
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Tipo documento"
          variant="outlined"
          className={classes.TextField}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Cuenta de orden del PM"
          variant="outlined"
          className={classes.TextField}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Folio único de facturación FUF"
          variant="outlined"
          className={classes.TextField}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Periodo ECD"
          variant="outlined"
          className={classes.TextField}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Fecha límite de pago"
          variant="outlined"
          className={classes.TextField}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Contacto"
          variant="outlined"
          className={classes.TextField}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Nombre del banco"
          variant="outlined"
          className={classes.TextField}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Sucursal"
          variant="outlined"
          className={classes.TextField}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Cuenta"
          variant="outlined"
          className={classes.TextField}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="CLABE"
          variant="outlined"
          className={classes.TextField}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Referencia"
          variant="outlined"
          className={classes.TextField}
        />
      </Grid>
      <Grid item xs={12}>
        <h3>Conceptos factura</h3>
      </Grid>
      <Grid item xs={1}>
        <Button variant="contained" className={classes.button}>
          +
        </Button>
        <Button variant="contained" className={classes.button}>
          -
        </Button>
      </Grid>
      {conceptosFacturaBuild()}
      <Grid item xs={12}>
        <h3>Conceptos de nota credito/cargo</h3>
      </Grid>
      <Grid item xs={1}>
        <Button variant="contained" className={classes.button}>
          +
        </Button>
        <Button variant="contained" className={classes.button}>
          -
        </Button>
      </Grid>
      {conceptosNotaCredito()}
    </Grid>
  );
}
