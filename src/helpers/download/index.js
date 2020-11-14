export const download_file = (fileURL, fileName) => {
  const link = document.createElement('a')
  link.href = fileURL
  link.download = fileName
  link.target = '_BLANK'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
