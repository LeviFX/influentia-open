import Navbar from "@/app/components/navbar";

export const metadata = {
	robots: {
		index: false,
		follow: false,
		googleBot: {
			index: false,
			follow: false,
		},
	},
};

export default function RootLayout({ children }) {
	return <>{children}</>;
}
