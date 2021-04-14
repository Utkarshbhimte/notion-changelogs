import Image from 'next/image'
import Link from 'next/link'
import { PageMetadata } from 'src/contracts/app'

export const HomeLayout: React.FC<{ metadata: PageMetadata }> = ({ children, metadata }) => {
    return (
        <>
            <nav className="py-4">
                <div className="container mx-auto">
                    <div className="flex justify-content items-center">
                        <Link href="/">
                            <Image
                                width={32}
                                height={32}
                                src={metadata.icon}
                                alt={metadata.app_name}
                            />
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
            <footer className="py-4 text-gray-600">
                <div className="container mx-auto text-center">
                    © 2021 {metadata.app_name}
                </div>
            </footer>
        </>
    )
}