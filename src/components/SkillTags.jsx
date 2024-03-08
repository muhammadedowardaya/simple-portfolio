import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io5';
import { SiJavascript, SiLaravel, SiPhp } from 'react-icons/si';

export default function SkillTags() {
	return (
		<div className="skil-tags text-slate-900 text-[12px] flex overflow-x-auto  select-none sm:overflow-hidden sm:flex-wrap gap-2 sm:justify-center hide-scrollbar px-2 ">
			<div className="flex items-center gap-1 skil-tag px-4 py-1 border rounded-full hover:bg-slate-100">
				<IoLogoHtml5 size={18} className="text-orange-600" />
				HTML
			</div>
			<div className="flex items-center gap-1 skil-tag px-4 py-1 border rounded-full hover:bg-slate-100">
				<IoLogoCss3 size={18} className="text-blue-600" />
				CSS
			</div>
			<div className="flex items-center gap-1 skil-tag px-4 py-1 border rounded-full hover:bg-slate-100">
				<SiJavascript size={18} className="text-yellow-400" />
				Javascript
			</div>
			<div className="flex items-center gap-1 skil-tag px-4 py-1 border rounded-full hover:bg-slate-100">
				<SiPhp size={20} className="text-purple-900" />
				PHP
			</div>
			<div className="flex items-center gap-1 skil-tag px-4 py-1 border rounded-full hover:bg-slate-100">
				<SiLaravel size={18} className="text-orange-800" />
				Laravel
			</div>
			<div className="flex items-center gap-1 skil-tag px-4 py-1 border rounded-full hover:bg-slate-100">
				<IoLogoHtml5 size={18} className="text-orange-600" />
				HTML
			</div>
			<div className="flex items-center gap-1 skil-tag px-4 py-1 border rounded-full hover:bg-slate-100">
				<IoLogoCss3 size={18} className="text-blue-600" />
				CSS
			</div>
			<div className="flex items-center gap-1 skil-tag px-4 py-1 border rounded-full hover:bg-slate-100">
				<SiJavascript size={18} className="text-yellow-400" />
				Javascript
			</div>
			<div className="flex items-center gap-1 skil-tag px-4 py-1 border rounded-full hover:bg-slate-100">
				<SiPhp size={20} className="text-purple-900" />
				PHP
			</div>
			<div className="flex items-center gap-1 skil-tag px-4 py-1 border rounded-full hover:bg-slate-100">
				<SiLaravel size={18} className="text-orange-800" />
				Laravel
			</div>
		</div>
	);
}
