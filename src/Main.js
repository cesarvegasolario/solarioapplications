import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// var fileDownload = require('js-file-download');
import fileDownload from 'js-file-download'

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
    margin: "0px 5px 0px 5px",
    height: "50%",
  },
}));

export default function Main() {
  const facturaIndex = useRef(1);
  const notasIndex = useRef(1);

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

  const updateTipoDocumento = (e) => {
    setTipoDocumento(e.target.value);
  };

  const updateCuentaDelOrdenDelPM = (e) => {
    setCuentaDelOrdenDelPM(e.target.value);
  };

  const updateFUF = (e) => {
    setFUF(e.target.value);
  };

  const updatePeriodoECD = (e) => {
    setPeriodoECD(e.target.value);
  };

  const updateFechaLimDePago = (e) => {
    setFechaLimDePago(e.target.value);
  };

  const updateContacto = (e) => {
    setContacto(e.target.value);
  };

  const updateBanco = (e) => {
    setBanco(e.target.value);
  };
  const updateSucursal = (e) => {
    setSucursal(e.target.value);
  };
  const updateCuenta = (e) => {
    setCuenta(e.target.value);
  };
  const updateCLABE = (e) => {
    setCLABE(e.target.value);
  };
  const updateReferencia = (e) => {
    setReferencia(e.target.value);
  };

  //Conceptos factura
  const [FUL, setFUL] = useState([]);
  const [cantidad, setCantidad] = useState([]);
  const [concepto, setConcepto] = useState([]);
  const [unidad, setUnidad] = useState([]);
  const [precioUnitario, setPrecioUnitario] = useState([]);
  const [importeLinea, setImporteLinea] = useState([]);
  const [tasaIVA, setTasaIVA] = useState([]);

  const updateFUL = (e, index) => {
    const newArr = FUL;
    newArr[index] = e.target.value;
    setFUL(newArr);
  };
  const updateCantidad = (e, index) => {
    const newArr = cantidad;
    newArr[index] = e.target.value;
    setCantidad(newArr);
  };
  const updateConcepto = (e, index) => {
    const newArr = concepto;
    newArr[index] = e.target.value;
    setConcepto(newArr);
  };
  const updateUnidad = (e, index) => {
    const newArr = unidad;
    newArr[index] = e.target.value;
    setUnidad(newArr);
  };
  const updatePrecioUnitario = (e, index) => {
    const newArr = precioUnitario;
    newArr[index] = e.target.value;
    setPrecioUnitario(newArr);
  };
  const updateImporteLinea = (e, index) => {
    const newArr = importeLinea;
    newArr[index] = e.target.value;
    setImporteLinea(newArr);
  };

  const updateTasaIVA = (e, index) => {
    const newArr = tasaIVA;
    newArr[index] = e.target.value;
    setTasaIVA(newArr);
  };

  //Conceptos nota de crédito/cargo
  const [FULCredito, setFULCredito] = useState([]);
  const [conceptoCredito, setConceptoCredito] = useState([]);
  const [importeOriginal, setImporteOriginal] = useState([]);
  const [importeModificado, setImporteModificado] = useState([]);
  const [tasaIVACredito, setTasaIVACredito] = useState([]);

  const updateFULCredito = (e, index) => {
    const newArr = FULCredito;
    newArr[index] = e.target.value;
    setFULCredito(newArr);
  };

  const updateConceptoCredito = (e, index) => {
    const newArr = conceptoCredito;
    newArr[index] = e.target.value;
    setConceptoCredito(newArr);
  };

  const updateImporteOriginal = (e, index) => {
    const newArr = importeOriginal;
    newArr[index] = e.target.value;
    setImporteOriginal(newArr);
  };

  const updateImporteModificado = (e, index) => {
    const newArr = importeModificado;
    newArr[index] = e.target.value;
    setImporteModificado(newArr);
  };

  const updateTasaIVACredito = (e, index) => {
    const newArr = tasaIVACredito;
    newArr[index] = e.target.value;
    setTasaIVACredito(newArr);
  };

  const conceptosFacturaBuild = (index) => {
    return (
      <>
        <Grid id={`conceptos-factura-${index}`}>{index}</Grid>
        <Grid item xs={2}>
          <TextField
            label="FUL"
            variant="outlined"
            value={FUL[index - 1]}
            onChange={(e) => updateFUL(e, index)}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            label="Cantidad"
            variant="outlined"
            value={cantidad[index - 1]}
            onChange={(e) => updateCantidad(e, index)}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            label="Concepto"
            variant="outlined"
            value={concepto[index - 1]}
            onChange={(e) => updateConcepto(e, index)}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            label="Unidad"
            variant="outlined"
            value={unidad[index - 1]}
            onChange={(e) => updateUnidad(e, index)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Precio Unitario"
            variant="outlined"
            value={precioUnitario[index - 1]}
            onChange={(e) => updatePrecioUnitario(e, index)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Importe linea"
            variant="outlined"
            value={importeLinea[index - 1]}
            onChange={(e) => updateImporteLinea(e, index)}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            label="Tasa IVA"
            variant="outlined"
            value={tasaIVA[index - 1]}
            onChange={(e) => updateTasaIVA(e, index)}
          />
        </Grid>
      </>
    );
  };

  const conceptosNotaCredito = (index) => {
    return (
      <>
        <Grid id={`conceptos-factura-${index}`}>{index}</Grid>
        <Grid item xs={2}>
          <TextField
            label="FUL"
            variant="outlined"
            value={FULCredito[index - 1]}
            onChange={(e) => updateFULCredito(e, index)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Concepto"
            variant="outlined"
            value={conceptoCredito[index - 1]}
            onChange={(e) => updateConceptoCredito(e, index)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Importe original"
            variant="outlined"
            value={importeOriginal[index - 1]}
            onChange={(e) => updateImporteOriginal(e, index)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Importe modificado"
            variant="outlined"
            value={importeModificado[index - 1]}
            onChange={(e) => updateImporteModificado(e, index)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Tasa IVA"
            variant="outlined"
            value={tasaIVACredito[index - 1]}
            onChange={(e) => updateTasaIVACredito(e, index)}
          />
        </Grid>
      </>
    );
  };

  const [refreshSite, setRefreshSite] = useState(0);
  const [facturasArr, setFacturasArr] = useState([]);
  const [notasArr, setNotasArr] = useState([]);

  const addConceptoFactura = () => {
    const newArr = facturasArr;
    newArr.push(conceptosFacturaBuild(facturaIndex.current));
    setFacturasArr(newArr);
    facturaIndex.current += 1;
    setRefreshSite(Math.random());
  };

  const addConceptoCredito = () => {
    const newArr = notasArr;
    newArr.push(conceptosNotaCredito(notasIndex.current));
    setNotasArr(newArr);
    notasIndex.current += 1;
    setRefreshSite(Math.random());
  };

  // Upload logic

  const onFileUpload = (e) => {
    const buildFactura = window.confirm("Ya agregaste las líneas de factura que quieres anexar?");
    if(buildFactura){
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onloadend = function () {
        var xmlData = reader.result;
        const splitIndex = xmlData.indexOf("</ad:Conceptos></ad:CAB>")
        let xmlDataBase = xmlData.substr(0,splitIndex);
        let xmlDataFin = xmlData.substr(splitIndex,);
        //49 20 6b 6e 6f 77 20 74 68 69 73 20 69 73 20 75 67 6c 79 20 62 75 74 20 49 20 6a 75 73 74 20 77 61 6e 74 20 74 6f 20 66 69 6e 69 73 68
        let newXmlData = xmlDataBase;
        if(facturaIndex.current >= 2){
          for (let i = 1; i < facturaIndex.current; i++){
            let datosFactura = `<ad:LINEA LABEL="LINADD" NUM_LIN="${facturaIndex.current}" FOLIO_UNICO="${FUL[i]}" CONCEPTO="${concepto[i]}" CANTIDAD="${cantidad[i]}" UNIDAD="${unidad[i]}" PRECIO_UNIT="${precioUnitario[i]}" IMPORTE_LINEA="${importeLinea[i]}" IVA="${tasaIVA[i]}" TOTAL="${importeLinea[i] + tasaIVA[i]}"/>`
            newXmlData += datosFactura;
          }
        }
        newXmlData +=  xmlDataFin;
        console.log(newXmlData);
        let nombreArchivoADescargar = "factura.xml"
        nombreArchivoADescargar = prompt("Nombre del archivo a descargar");
        nombreArchivoADescargar += ".xml"
        fileDownload(newXmlData, nombreArchivoADescargar);
    }
    } else{
      alert("Agrega los datos que necesites.");
    }
  };

  

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <h1>Solario facturación</h1>
        <input type="file" name="xmlFile" onChange={onFileUpload} />
      </Grid>
      <Grid item xs={3}>
        <TextField
          className={classes.TextField}
          label="Tipo documento"
          variant="outlined"
          value={tipoDocumento}
          onChange={updateTipoDocumento}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Cuenta de orden del PM"
          variant="outlined"
          className={classes.TextField}
          value={cuentaDelOrdenDelPM}
          onChange={updateCuentaDelOrdenDelPM}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Folio único de facturación FUF"
          variant="outlined"
          className={classes.TextField}
          value={FUF}
          onChange={updateFUF}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Periodo ECD"
          variant="outlined"
          className={classes.TextField}
          value={periodoECD}
          onChange={updatePeriodoECD}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Fecha límite de pago"
          variant="outlined"
          className={classes.TextField}
          value={fechaLimDePago}
          onChange={updateFechaLimDePago}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Contacto"
          variant="outlined"
          className={classes.TextField}
          value={contacto}
          onChange={updateContacto}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Nombre del banco"
          variant="outlined"
          className={classes.TextField}
          value={banco}
          onChange={updateBanco}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Sucursal"
          variant="outlined"
          className={classes.TextField}
          value={sucursal}
          onChange={updateSucursal}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Cuenta"
          variant="outlined"
          className={classes.TextField}
          value={cuenta}
          onChange={updateCuenta}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="CLABE"
          variant="outlined"
          className={classes.TextField}
          value={CLABE}
          onChange={updateCLABE}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Referencia"
          variant="outlined"
          className={classes.TextField}
          value={referencia}
          onChange={updateReferencia}
        />
      </Grid>
      <Grid>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>Conceptos factura</h3>

          <Button
            variant="contained"
            className={classes.button}
            onClick={addConceptoFactura}
          >
            +
          </Button>

          <Button variant="contained" className={classes.button}>
            -
          </Button>
        </div>
      </Grid>
      {facturasArr.map((facturaArr, index) => {
        return (
          <div
            key={`factura-${index}`}
            style={{ display: "flex", margin: "5px" }}
          >
            {facturaArr}
          </div>
        );
      })}
      <Grid>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>Conceptos de nota credito/cargo</h3>

          <Button
            variant="contained"
            className={classes.button}
            onClick={addConceptoCredito}
          >
            +
          </Button>
          <Button variant="contained" className={classes.button}>
            -
          </Button>
        </div>
      </Grid>
      {notasArr.map((arr, index) => {
        return (
          <div key={`nota-${index}`} style={{ display: "flex", margin: "5px" }}>
            {arr}
          </div>
        );
      })}
    </Grid>
  );
}
