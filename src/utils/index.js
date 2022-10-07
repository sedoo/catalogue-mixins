/**
 * return a object to apply a style on tag
 * @return {any}
 * @param {any}
 */
export function applyPrimaryAndSecondaryColors (theme) {
  if (theme) {
    const style = {}
    if (theme.primaryColor) {
      style['--primaryColor'] = theme.primaryColor
    }
    if (theme.secondaryColor) {
      style['--secondaryColor'] = theme.secondaryColor
    }
    return style
  } else {
    return ''
  }
}

export function formatEditedData (metadataName, dataEdited) {
  return {
    [metadataName]: dataEdited
  }
}

export const capitalize = (word) => {
  if (typeof word !== 'string') return ''
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function constructUrl () {
  const url = new URL(this.href)
  url.pathname += `${url.pathname.endsWith('/') ? '' : '/'}${
    this.service_name
  }`
  return url.href
}

export const keyHasValue = (obj, key) => {
  if (
    (!obj[key] || !obj[key].length || !Object.keys(obj[key]).length) &&
    obj[key] !== 0
  ) { return false }
  return true
}

/**
 *
 * @param {String} dataurl public url of the file
 * @param {String} mimeType mime type of the file to download
 * @param {String} filename name of the file to download
 *
 * Example : downloadFile("https://wp.com/uploads/image.jpg", "image/jpeg", "image.jpg");
 */
export function downloadFile (dataurl, mimeType, filename) {
  const fileType = 'data:' + mimeType + ','
  const link = document.createElement('a')
  link.href = fileType + dataurl
  link.download = filename
  link.click()
}

export function isEmpty (object) {
  let empty = true
  const keys = Object.keys(object)
  if (keys.length > 0) {
    keys.forEach((key) => {
      const currentObject = object[key]
      if (key === 'jsonAttributes') {
        empty = isJsonAttributesEmpty(object)
      } else if (
        currentObject !== null &&
        currentObject === Object(currentObject)
      ) {
        if (
          (Array.isArray(currentObject) && currentObject.length > 0) ||
          (!Array.isArray(currentObject) &&
            Object.keys(currentObject).length > 0)
        ) {
          empty = empty && isEmpty(currentObject)
        } else {
          empty = empty && true
        }
      } else if (currentObject) {
        empty = empty && false
      } else {
        empty = empty && true
      }
    })
  } else {
    empty = object !== null || object !== ''
  }
  return empty
}

export function isJsonAttributesEmpty (object) {
  if (!object.jsonAttributes.length) return true
  return object.jsonAttributes.every((criteria) => !criteria.values.length)
}

export function objSlice (obj, lastExclusive) {
  var filteredKeys = Object.keys(obj).slice(0, lastExclusive)
  var newObj = {}
  filteredKeys.forEach(function (key) {
    newObj[key] = obj[key]
  })
  return newObj
}
