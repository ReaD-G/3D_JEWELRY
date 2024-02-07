import { proxy } from 'valtio'

type StateType = {
	intro: boolean
	color: string
	isLogoTexture: boolean
	isFullTexture: boolean
	logoDecal: string
	fullDecal: string
	[key: string]: any // Index signature allowing any string key
}

const state: StateType = proxy({
	intro: true,
	color: '#EFBD48',
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: './threejs.png',
	fullDecal: './threejs.png',
})

export default state
