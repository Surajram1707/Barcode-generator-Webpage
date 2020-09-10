function generateBarcode(){
  let barcodeValue = document.getElementById('barcode-value').value
  JsBarcode('#barcode',barcodeValue,{
    background: 'pink',
    lineColor:'purple'
  })
}
