// import parseTime, formatTime and set to filter
// https://juejin.im/post/5a091afe6fb9a044ff30f402
import Vue from 'vue'

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat '{y}-{m}-{d} {h}:{i}'
 * @returns {string} 2019-06-21 15:46
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

Vue.filter('pluralize', (time, label) => {
  return pluralize(time, label)
})

export function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

/**
 * @param {number} time
 * @returns {number} 相差分钟、小时、天数
 */
export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  console.log('between: ', between)
  if (between < 3600) {
    console.log('minute: ', pluralize(~~(between / 60), ' minute'))
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    console.log('hour: ', pluralize(~~(between / 3600), ' hour'))
    return pluralize(~~(between / 3600), ' hour')
  } else {
    console.log('day: ', pluralize(~~(between / 86400), ' day'))
    return pluralize(~~(between / 86400), ' day')
  }
}

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

/**
 * 价格格式
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * 首先字母大写
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 *
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} ele
 * @param {String} cls
 * @return {Boolean}
 */
export function hasClass(ele, cls) {
  return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className)
}

/**
 *
 * @desc   为元素添加class
 * @param  {HTMLElement} ele
 * @param  {String} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += ' ' + cls
  }
}

/**
 *
 * @desc 为元素移除class
 * @param {HTMLElement} ele
 * @param {String} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

/**
 *
 * @desc 根据name读取cookie
 * @param  {String} name
 * @return {String}
 */
export function getCookie(name) {
  var arr = document.cookie.replace(/\s/g, '').split(';')
  for (var i = 0; i < arr.length; i++) {
    var tempArr = arr[i].split('=')
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1])
    }
  }
  return ''
}

/**
 *
 * @desc 根据name删除cookie
 * @param  {String} name
 */
export function removeCookie(name) {
  // 设置已过期，系统会立刻删除cookie
  setCookie(name, '1', -1)
}

/**
 *
 * @desc  设置Cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
export function setCookie(name, value, days) {
  var date = new Date()
  date.setDate(date.getDate() + days)
  document.cookie = name + '=' + value + ';expires=' + date
}

/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 */
export function deepClone(values) {
  var copy

  // Handle the 3 simple types, and null or undefined
  if (values == null || typeof values !== 'object') return values

  // Handle Date
  if (values instanceof Date) {
    copy = new Date()
    copy.setTime(values.getTime())
    return copy
  }

  // Handle Array
  if (values instanceof Array) {
    copy = []
    for (var i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i])
    }
    return copy
  }

  // Handle Object
  if (values instanceof Object) {
    copy = {}
    for (var attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr])
    }
    return copy
  }

  throw new Error("Unable to copy values! Its type isn't supported.")
}
