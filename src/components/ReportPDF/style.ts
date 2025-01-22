import { StyleSheet } from "@react-pdf/renderer"

export const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    color: '#262626',
    fontFamily: 'Helvetica',
    fontSize: '12px',
    padding: '30px 50px'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  title: {
    fontSize: 24
  },
  titleServices: {
    fontSize: 20
  },
  textBold: {
    fontFamily: 'Helvetica-Bold'
  },
  spaceY: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px'
  },
  billTo: {
    marginBottom: 10
  },
  table: {
    width: "100%",
    borderColor: "1px solid #f3f4f6",
    margin: "20px 0"
  },
  tableHeader: {
    backgroundColor: "#e5e5e5"
  },
  td: {
    padding: 6
  },
  imageSty: {
    width: '100px',
    height: '100px'
  },
  photoContainer: {
    lineHeight: 0,
    columnGap: 5
  },
  photo: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px'
  }
});