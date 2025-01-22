import { Document, Image, Page, Text, View } from "@react-pdf/renderer"
import { styles } from "./style"
import { Table, TD, TH, TR } from "@ag-media/react-pdf-table"

const ReportServicesOrderPDF = (props: any) => {

  const {
    data,
    dataImages
  } = props

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={[styles.titleServices, styles.textBold]}>REPORTE ORDENES DE SERVICIO</Text>
          </View>
          <View style={styles.spaceY}>
            <Text style={styles.textBold}>DEMOTORS</Text>
            <Text>Direccion Empresa</Text>
            <Text>Ciudad de Guatemala</Text>
          </View>
        </View>

        <View style={styles.spaceY}>
          <Text style={[styles.billTo, styles.textBold]}>Atencion a:</Text>
          <Text>{data?.CLIENT || ''}</Text>
          <Text>{data?.ADDRESS_CLIENT || ''}</Text>
        </View>

        {/* Renderizado de Tabla */}

        <Table style={styles.table}>
          <TH style={[styles.tableHeader, styles.textBold]}>
            <TD style={styles.td}>No. Orden</TD>
            <TD style={styles.td}>No. Serie</TD>
            <TD style={styles.td}>Fecha</TD>
            <TD style={styles.td}>Trabajo Realizado</TD>
          </TH>
          {
            data && data?.ces.map((item: any, index: any) => (
              <TR key={index}>
                <TD style={styles.td}>{item.NO_ORDER}</TD>
                <TD style={styles.td}>{item.NO_SERIE}</TD>
                <TD style={styles.td}>{item.DATE}</TD>
                <TD style={styles.td}>{item.WORK_DONE}</TD>
              </TR>
            ))
          }
        </Table>

        <View style={[styles.photoContainer]}>
          {
            dataImages && dataImages.map((item: any) => (
              <Image
                src={item}
                style={styles.photo}
              />
            ))
          }
        </View>

      </Page>
    </Document>
  )
}

export default ReportServicesOrderPDF