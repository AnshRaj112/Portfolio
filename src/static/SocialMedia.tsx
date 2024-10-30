import Image from 'next/image';

interface SocialMediaProps {
  size: number;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ size }) => {
  return (
    <div
      className="flex justify-center gap-2 pb-4"
      style={{ pointerEvents: 'auto' }}
    >
      <a
        className="bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100"
        href="https://www.linkedin.com/in/ansh-raj112/" // Replace with your LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/linkedin.svg"
          alt="LinkedIn Icon"
          width={size}
          height={size}
        />
      </a>
      <a
        className="bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100"
        href="https://github.com/AnshRaj112" // Replace with your GitHub URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/github.svg"
          alt="GitHub Icon"
          width={size}
          height={size}
        />
      </a>
      {/* <a
        className="bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100"
        href="https://www.youtube.com/channel/your-channel" // Replace with your YouTube URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/youtube.svg"
          alt="YouTube Icon"
          width={size}
          height={size}
        />
      </a> */}
    </div>
  );
};

export default SocialMedia;
