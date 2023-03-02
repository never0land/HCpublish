/***
 * 
 * @params address
 * 做vue2的require动作
 * 动态进图，不可以像v2一样直接require，哪个是webpack的，不是vite的
 * 
 */ 
export const renderIco = (address) =>new URL(address, import.meta.url).href

export const isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
// isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)