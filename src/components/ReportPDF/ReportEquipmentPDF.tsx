import { Document, Page, Text, View } from "@react-pdf/renderer"
import { styles } from "./style"
import { Table, TD, TH, TR } from "@ag-media/react-pdf-table"

const ReportEquipmentPDF = (props: any) => {

  const {
    data
  } = props

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={[styles.title, styles.textBold]}>REPORTE EQUIPOS</Text>
          </View>
          <View style={styles.spaceY}>
            <Text style={styles.textBold}>DEMOTORS</Text>
            <Text>Direccion empresa</Text>
            <Text>Ciudad de Guatemala</Text>
          </View>
        </View>

        <View style={styles.spaceY}>
          <Text style={[styles.billTo, styles.textBold]}>Equipo:</Text>
          <Text>{data?.DESCRIPTION_SERIE || ''}</Text>
        </View>
        
        <Table style={styles.table}>
          <TH style={[styles.tableHeader, styles.textBold]}>
            <TD style={styles.td}>Direccion</TD>
            <TD style={styles.td}>Fecha</TD>
            <TD style={styles.td}>Orden de servicio</TD>
            <TD style={styles.td}>Trabajo Realizado</TD>
          </TH>
          {
            data && data?.cc.map((item: any, index: any) => (
              <TR key={index}>
                <TD style={styles.td}>{item.ADDRESS_CLIENT}</TD>
                <TD style={styles.td}>{item.DATE}</TD>
                <TD style={styles.td}>{item.NO_ORDER}</TD>
                <TD style={styles.td}>{item.WORK_DONE}</TD>
              </TR>
            ))
          }
        </Table>

      </Page>
    </Document>
  )
}

export default ReportEquipmentPDF