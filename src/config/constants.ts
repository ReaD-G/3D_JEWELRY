import { StaticImageData } from 'next/image'
import { ai, fileIcon, logoShirt, stylishShirt, swatch } from '../assets'

export const EditorTabs: {
	name: string
	icon: StaticImageData
}[] = [
	{
		name: 'colorpicker',
		icon: swatch,
	},
	{
		name: 'filepicker',
		icon: fileIcon,
	},
	{
		name: 'aipicker',
		icon: ai,
	},
]

export const FilterTabs = [
	{
		name: 'logoShirt',
		icon: logoShirt,
	},
	{
		name: 'stylishShirt',
		icon: stylishShirt,
	},
]

type DecalType = {
	[key: string]: { stateProperty: string; filterTab: string }
}

export const DecalTypes: DecalType = {
	logo: {
		stateProperty: 'logoDecal',
		filterTab: 'logoShirt',
	},
	full: {
		stateProperty: 'fullDecal',
		filterTab: 'stylishShirt',
	},
}
