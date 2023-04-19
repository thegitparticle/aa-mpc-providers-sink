import { providersList } from "@/info/providersList";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();
	return (
		<main className="flex min-h-screen flex-col items-center p-24 bg-base-300">
			<p className="font-bold text-3xl">trying aa, mpc providers</p>
			<div className="grid grid-cols-2 gap-6 my-8">
				{providersList.map((provider, key) => (
					<div key={key} className="card w-96 bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title">{provider.name}</h2>
							<p>{provider.description}</p>
							<div className="card-actions justify-end">
								<button
									className="btn btn-primary font-bold"
									onClick={() =>
										router.push(`/${provider.slug}`)
									}
								>
									try
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
