import { IoLocationOutline } from 'react-icons/io5';

export default function Profile() {
	return (
		<div className="profile px-6 sm:px-8 pt-8">
			<img
				src="/me.jpg"
				alt="my photo"
				id="my-photo"
				className="rounded-full w-28 mx-auto"
			/>
			<p className="name font-bold text-center mt-6 mb-2 text-2xl">
				Muhammad Edo Wardaya
			</p>
			<p className="description text-center">
				Berinovasi dan Berkembang Bersama Teknologi Web untuk Menciptakan
				Pengalaman Pengguna yang Luar Biasa sebagai Seorang Front End Web
				Developer
			</p>
			<div className="info text-center text-sm flex flex-col sm:flex-row justify-center gap-x-8 mt-3 mb-6">
				<p className="date">24 Oktober 2000</p>
				<p className="place-of-birth flex items-center justify-center">
					<IoLocationOutline />
					Bogor, Indonesia
				</p>
			</div>
		</div>
	);
}
