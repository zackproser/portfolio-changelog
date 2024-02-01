import Image from 'next/image';
import Beaker from '@/images/beaker_transparent_background.png'

export function Logo() {
  return (
    <Image src={Beaker} alt="Zack Proser's changelog site" />
  );
}
