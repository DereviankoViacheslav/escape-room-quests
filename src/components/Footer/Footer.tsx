import Image from 'next/image';

export default function Footer() {
    return (
        <span className="fixed flex items-start left-6 bottom-4">
            <a href="skype:test123">
                <Image
                    src="/icons/skype.svg"
                    alt="Skype icon"
                    width={36}
                    height={36}
                />
            </a>
            <a href="https://vk.com" target='_blank'>
                <Image
                    src="/icons/vk.svg"
                    alt="VK icon"
                    width={28}
                    height={28}
                />
            </a>
        </span>
    );
}
