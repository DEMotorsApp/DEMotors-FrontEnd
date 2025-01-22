import { Document, Image, Page, Text, View } from '@react-pdf/renderer';
import { Table, TH, TD, TR } from '@ag-media/react-pdf-table'
import { styles } from './style';

const ReportClientPDF = (props: any) => {

  /* const [infoReport, setInfoReport] = useState(null)

  const fetchInfo = async () => {
    const result = await getImageServices('2025-2101000361')
    console.log('result => ', result)
    setInfoReport(result.response)
  }

  useEffect(() => {
    fetchInfo()
  }, []) */

  const {
    data,
    dataImages
  } = props

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={[styles.title, styles.textBold]}>REPORTE CLIENTES</Text>
          </View>
          <View style={styles.spaceY}>
            <Text style={styles.textBold}>DEMOTORS</Text>
            <Text>Direccion empresa</Text>
            <Text>Ciudad de Guatemala</Text>
          </View>
        </View>

        <View style={styles.spaceY}>
          <Text style={[styles.billTo, styles.textBold]}>Atendido a:</Text>
          <Text>{ data?.CLIENT || '' }</Text>
          <Text>{ data?.MODEL_1 || '' }</Text>
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

export default ReportClientPDF
