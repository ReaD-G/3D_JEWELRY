import type { Metadata } from 'next'
import Customizer from './Customizer'
import Dashboard from './Dashboard'
import CanvasModel from '@/canvas/CanvasModel'

export const metadata: Metadata = {
	description: 'Add description',
}

export default async function Page() {
	return (
		<>
			<Dashboard />
			<CanvasModel />
			<Customizer />
		</>
	)
}
