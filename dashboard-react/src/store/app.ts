import { atom } from 'recoil'
import { MetaBreadcrumb } from '../types'

export const activePathAtom = atom({
  key: 'activePath',
  default: '',
})

export const breadcrumbsAtom = atom({
  key: 'breadcrumbs',
  default: [] as Array<MetaBreadcrumb>,
})
